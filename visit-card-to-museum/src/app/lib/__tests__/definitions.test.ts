import { SignupFormSchema, LoginFormSchema } from "../definitions";

describe("SignupFormSchema", () => {
  it("validates correct data", () => {
    const result = SignupFormSchema.safeParse({
      name: "Test User",
      email: "test@example.com",
      password: "Password1!",
    });
    expect(result.success).toBe(true);
  });

  it("fails on invalid data", () => {
    const result = SignupFormSchema.safeParse({
      name: "T",
      email: "bademail",
      password: "short",
    });
    expect(result.success).toBe(false);
    expect(result.error).toBeDefined();
  });
});

describe("LoginFormSchema", () => {
  it("validates correct data", () => {
    const result = LoginFormSchema.safeParse({
      email: "test@example.com",
      password: "Password1!",
    });
    expect(result.success).toBe(true);
  });

  it("fails on invalid data", () => {
    const result = LoginFormSchema.safeParse({
      email: "bademail",
      password: "short",
    });
    expect(result.success).toBe(false);
    expect(result.error).toBeDefined();
  });
});
