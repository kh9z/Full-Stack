import { processEmail } from "../email/emailService";

describe("processEmail", () => {
  it("should return the same body as JSON", async () => {
    const body = { test: "value" };
    const result = await processEmail(body);
    expect(result).toEqual(body);
  });

  it("should throw on invalid body", async () => {
    await expect(processEmail(null)).rejects.toThrow();
    await expect(processEmail(undefined)).rejects.toThrow();
  });
});
