import { getPosts, createPost } from "../posts/postService";

describe("getPosts", () => {
  const mockPrisma = {
    post: {
      findMany: jest.fn(),
    },
  };

  it("should return posts", async () => {
    mockPrisma.post.findMany.mockResolvedValueOnce([
      { id: "1", title: "Test", author: {} },
    ]);
    const posts = await getPosts(mockPrisma as any);
    expect(Array.isArray(posts)).toBe(true);
    expect(posts[0]).toHaveProperty("id");
  });
});

describe("createPost", () => {
  const mockPrisma = {
    post: {
      create: jest.fn(),
    },
  };

  it("should create a post", async () => {
    const postData = {
      title: "Test",
      content: "...",
      published: true,
      authorId: "1",
    };
    mockPrisma.post.create.mockResolvedValueOnce({
      id: "1",
      ...postData,
    });
    const post = await createPost(mockPrisma as any, postData);
    expect(post).toHaveProperty("id");
    expect(post.title).toBe("Test");
  });
});
