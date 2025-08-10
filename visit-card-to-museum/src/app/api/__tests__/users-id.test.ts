import { getUserById } from "../users/[id]/userService";

describe("getUserById", () => {
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
    const user = await getUserById(mockPrisma as any, "1");
    expect(user).toHaveProperty("id", "1");
  });

  it("should return null if not found", async () => {
    mockPrisma.user.findUnique.mockResolvedValueOnce(null);
    const user = await getUserById(mockPrisma as any, "2");
    expect(user).toBeNull();
  });
});
