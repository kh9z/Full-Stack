import { login, logout, signup } from "../auth";

jest.mock("../../lib/session", () => ({
  createSession: jest.fn(),
  deleteSession: jest.fn(),
}));
jest.mock("next/navigation", () => ({
  redirect: jest.fn(),
}));
jest.mock("bcryptjs", () => ({
  hash: jest.fn(async (pw) => "hashed" + pw),
  compare: jest.fn(async (pw, hash) => pw === "Password1!"),
}));

describe("signup", () => {
  it("creates a user and redirects", async () => {
    const formData = new FormData();
    formData.set("name", "User");
    formData.set("email", "test@example.com");
    formData.set("password", "Password1!");
    const result = await signup(undefined, formData);
    expect(result).toBeUndefined();
  });

  it("returns errors for invalid data", async () => {
    const formData = new FormData();
    formData.set("name", "U");
    formData.set("email", "bad");
    formData.set("password", "short");
    const result = await signup(undefined, formData);
    expect(result.errors).toBeDefined();
  });
});

describe("login", () => {
  it("logs in and redirects", async () => {
    const formData = new FormData();
    formData.set("email", "test@example.com");
    formData.set("password", "Password1!");
    const result = await login(undefined, formData);
    expect(result).toBeUndefined();
  });

  it("returns errors for invalid data", async () => {
    const formData = new FormData();
    formData.set("email", "bad");
    formData.set("password", "short");
    const result = await login(undefined, formData);
    expect(result.errors).toBeDefined();
  });
});

describe("logout", () => {
  it("calls deleteSession and redirects", async () => {
    await expect(logout()).resolves.toBeUndefined();
  });
});
