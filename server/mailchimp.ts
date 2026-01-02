import { ENV } from "./_core/env";

interface SubscribeResult {
  success: boolean;
  message: string;
  status?: string;
}

/**
 * Subscribe an email address to the Mailchimp audience
 */
export async function subscribeToNewsletter(email: string): Promise<SubscribeResult> {
  const { mailchimpApiKey, mailchimpAudienceId, mailchimpServerPrefix } = ENV;

  if (!mailchimpApiKey || !mailchimpAudienceId || !mailchimpServerPrefix) {
    console.error("[Mailchimp] Missing configuration");
    return {
      success: false,
      message: "Newsletter service is not configured",
    };
  }

  const url = `https://${mailchimpServerPrefix}.api.mailchimp.com/3.0/lists/${mailchimpAudienceId}/members`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${Buffer.from(`anystring:${mailchimpApiKey}`).toString("base64")}`,
      },
      body: JSON.stringify({
        email_address: email,
        status: "subscribed",
      }),
    });

    const data = await response.json();

    if (response.ok) {
      return {
        success: true,
        message: "Successfully subscribed to the newsletter!",
        status: data.status,
      };
    }

    // Handle specific Mailchimp errors
    if (data.title === "Member Exists") {
      return {
        success: true,
        message: "You're already subscribed to the newsletter!",
        status: "existing",
      };
    }

    if (data.title === "Invalid Resource") {
      return {
        success: false,
        message: "Please enter a valid email address.",
      };
    }

    console.error("[Mailchimp] API error:", data);
    return {
      success: false,
      message: data.detail || "Failed to subscribe. Please try again.",
    };
  } catch (error) {
    console.error("[Mailchimp] Network error:", error);
    return {
      success: false,
      message: "Network error. Please try again later.",
    };
  }
}

/**
 * Verify Mailchimp API credentials by pinging the API
 */
export async function verifyMailchimpCredentials(): Promise<boolean> {
  const { mailchimpApiKey, mailchimpServerPrefix } = ENV;

  if (!mailchimpApiKey || !mailchimpServerPrefix) {
    return false;
  }

  const url = `https://${mailchimpServerPrefix}.api.mailchimp.com/3.0/ping`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Basic ${Buffer.from(`anystring:${mailchimpApiKey}`).toString("base64")}`,
      },
    });

    return response.ok;
  } catch {
    return false;
  }
}
