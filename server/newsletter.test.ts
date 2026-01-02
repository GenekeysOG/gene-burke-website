import { describe, expect, it } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: () => {},
    } as TrpcContext["res"],
  };
}

describe("newsletter.subscribe", () => {
  it("should return a result object with success and message properties", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    // Test with a real-looking email - Mailchimp will process it
    const result = await caller.newsletter.subscribe({ email: "test@test.com" });

    expect(result).toBeDefined();
    expect(typeof result.success).toBe("boolean");
    expect(typeof result.message).toBe("string");
  }, 15000);

  it("should reject invalid email format via zod validation", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    // This should fail zod validation before reaching Mailchimp
    await expect(
      caller.newsletter.subscribe({ email: "invalid-email" })
    ).rejects.toThrow();
  });
});
