import { PrismaClient, Post } from "@prisma/client";

export async function getPosts(prisma: PrismaClient): Promise<Post[]> {
  return prisma.post.findMany({ include: { author: true } });
}

export async function createPost(prisma: PrismaClient, data: any): Promise<Post> {
  return prisma.post.create({ data });
}
