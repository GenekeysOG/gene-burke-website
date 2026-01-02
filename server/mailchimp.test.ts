import { describe, expect, it } from "vitest";
import { verifyMailchimpCredentials } from "./mailchimp";

describe("Mailchimp Integration", () => {
  it("should verify Mailchimp API credentials are valid", async () => {
    const isValid = await verifyMailchimpCredentials();
    
    expect(isValid).toBe(true);
  }, 10000); // 10 second timeout for API call
});
