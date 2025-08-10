import { getUsers, createUser } from "../users/userService";

const mockPrisma = {
  user: {
    findMany: jest
      .fn()
      .mockResolvedValue([
        { id: "1", name: "User", email: "a@b.com", password: "pass" },
      ]),
    create: jest.fn().mockResolvedValue({
      id: "1",
      name: "User",
      email: "a@b.com",
      password: "pass",
    }),
  },
};

describe("getUsers", () => {
  it("should return users", async () => {
    const users = await getUsers(mockPrisma as any);
    expect(Array.isArray(users)).toBe(true);
    expect(users[0]).toHaveProperty("id");
  });
});

describe("createUser", () => {
  it("should create a user", async () => {
    const userData = { name: "User", email: "a@b.com", password: "pass" };
    const user = await createUser(mockPrisma as any, userData);
    expect(user).toHaveProperty("id");
    expect(user.name).toBe("User");
  });
});
