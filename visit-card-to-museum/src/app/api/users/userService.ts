import { PrismaClient, User } from "@prisma/client";

export async function getUsers(prisma: PrismaClient): Promise<User[]> {
  return prisma.user.findMany();
}

export interface CreateUserInput {
  name: string;
  email: string;
  password: string;
}

export async function createUser(
  prisma: PrismaClient,
  data: CreateUserInput
): Promise<User> {
  return prisma.user.create({ data });
}
