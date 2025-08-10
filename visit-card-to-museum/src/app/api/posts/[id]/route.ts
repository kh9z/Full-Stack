import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { getPostById, updatePost } from "./postService";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const prisma = new PrismaClient();
  const { id } = await params;

  const post = await getPostById(prisma, id);

  if (!post) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(post);
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const prisma = new PrismaClient();
  const { id } = await params;
  const data = await req.json();

  const post = await updatePost(prisma, id, data);

  return NextResponse.json(post);
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const prisma = new PrismaClient();
  const { id } = await params;

  await prisma.post.delete({
    where: { id },
  });

  return NextResponse.json({ message: "Deleted" }, { status: 204 });
}
