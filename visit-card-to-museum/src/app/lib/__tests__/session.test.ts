import * as session from "../session";
import { JWTPayload } from "jose";

describe("session utils", () => {
  it("encrypts and decrypts a payload", async () => {
    const payload: JWTPayload = { userId: "123" };
    const token = await session.encrypt(payload);
    expect(typeof token).toBe("string");
    const decrypted = await session.decrypt(token);
    expect(decrypted?.userId).toBe("123");
  });

  it("returns undefined for invalid token", async () => {
    const result = await session.decrypt("badtoken");
    expect(result).toBeUndefined();
  });

  it("deleteSession calls cookies().delete", async () => {
    const mockDelete = jest.fn();
    jest.spyOn(require("next/headers"), "cookies").mockReturnValue({
      delete: mockDelete,
      set: jest.fn(),
      get: jest.fn(),
    });
    const { deleteSession } = require("../session");
    await deleteSession();
    expect(mockDelete).toHaveBeenCalledWith("session");
  });
});
