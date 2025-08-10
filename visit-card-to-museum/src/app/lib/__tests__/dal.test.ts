// Mock react cache for Jest environment
jest.mock("react", () => ({
  ...jest.requireActual("react"),
  cache: (fn: any) => fn,
}));

// Mock next/headers cookies for Jest environment
jest.mock("next/headers", () => ({
  cookies: () => ({
    get: () => ({ value: "mocked.jwt.token" }),
    set: jest.fn(),
  }),
}));

// Mock dal.verifySession for all tests
jest.mock("../dal", () => {
  const original = jest.requireActual("../dal");
  return {
    ...original,
    verifySession: jest.fn().mockResolvedValue({ isAuth: true, userId: "1" }),
  };
});

describe("dal", () => {
  it("verifySession returns userId if session is valid", async () => {
    const { verifySession } = require("../dal");
    const session = await verifySession();
    expect(session).toEqual({ isAuth: true, userId: "1" });
  });

  it("getUser returns user if fetch is successful", async () => {
    global.fetch = jest.fn(async () => ({
      json: async () => ({ id: "1", name: "User" }),
    })) as any;
    const { getUser } = require("../dal");
    const user = await getUser();
    expect(user).toEqual({ id: "1", name: "User" });
  });

  it("getUser returns null if fetch fails", async () => {
    global.fetch = jest.fn(async () => {
      throw new Error();
    }) as any;
    const { getUser } = require("../dal");
    const user = await getUser();
    expect(user).toBeNull();
  });
});
