import { getUserByEmail } from "../users/auth/[email]/userService";

describe("getUserByEmail", () => {
  const mockPrisma = {
    user: {
      findUnique: jest.fn(),
    },
  };

  it("should return a user if found", async () => {
    mockPrisma.user.findUnique.mockResolvedValueOnce({
      id: "1",
      name: "User",
      email: "a@b.com",
    });
    const user = await getUserByEmail(mockPrisma as any, "a@b.com");
    expect(user).toHaveProperty("email", "a@b.com");
  });

  it("should return null if not found", async () => {
    mockPrisma.user.findUnique.mockResolvedValueOnce(null);
    const user = await getUserByEmail(mockPrisma as any, "notfound@b.com");
    expect(user).toBeNull();
  });
});
