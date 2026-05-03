import { describe, expect, it } from "vitest";
import { HealthCheckResponse } from "./generated/api";

describe("generated HealthCheckResponse schema", () => {
  it("accepts a valid payload", () => {
    const parsed = HealthCheckResponse.safeParse({ status: "ok" });
    expect(parsed.success).toBe(true);
    if (parsed.success) {
      expect(parsed.data.status).toBe("ok");
    }
  });

  it("rejects payloads missing status", () => {
    const parsed = HealthCheckResponse.safeParse({});
    expect(parsed.success).toBe(false);
  });

  it("rejects non-string status", () => {
    const parsed = HealthCheckResponse.safeParse({ status: 1 });
    expect(parsed.success).toBe(false);
  });
});
