import { PrismaClient, User } from "@prisma/client";

export async function getUserById(
  prisma: PrismaClient,
  id: string
): Promise<User | null> {
  return prisma.user.findUnique({ where: { id } });
}
