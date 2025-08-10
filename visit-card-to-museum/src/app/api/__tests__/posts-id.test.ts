import { getPostById, updatePost } from "../posts/[id]/postService";

describe("getPostById", () => {
  const mockPrisma = {
    post: {
      findUnique: jest.fn(),
    },
  };

  it("should return a post if found", async () => {
    mockPrisma.post.findUnique.mockResolvedValueOnce({
      id: "1",
      title: "Test",
    });
    const post = await getPostById(mockPrisma as any, "1");
    expect(post).toHaveProperty("id", "1");
  });

  it("should return null if not found", async () => {
    mockPrisma.post.findUnique.mockResolvedValueOnce(null);
    const post = await getPostById(mockPrisma as any, "2");
    expect(post).toBeNull();
  });
});

describe("updatePost", () => {
  const mockPrisma = {
    post: {
      update: jest.fn(),
    },
  };

  it("should update a post", async () => {
    mockPrisma.post.update.mockResolvedValueOnce({ id: "1", title: "Updated" });
    const post = await updatePost(mockPrisma as any, "1", { title: "Updated" });
    expect(post).toHaveProperty("title", "Updated");
  });
});
