import { PrismaClient, User } from "@prisma/client";

export async function getUserByEmail(
  prisma: PrismaClient,
  email: string
): Promise<User | null> {
  return prisma.user.findUnique({ where: { email } });
}
