import { PrismaClient, Post } from "@prisma/client";

export async function getPostById(
  prisma: PrismaClient,
  id: string
): Promise<Post | null> {
  return prisma.post.findUnique({ where: { id } });
}

export async function updatePost(
  prisma: PrismaClient,
  id: string,
  data: any
): Promise<Post> {
  return prisma.post.update({ where: { id }, data });
}
