import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { createUser } from "./userService";

const prisma = new PrismaClient();

export async function GET() {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, password } = body;

  const user = await createUser(prisma, { name, email, password });
  return NextResponse.json(user, { status: 201 });
}
