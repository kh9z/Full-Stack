import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  const posts = await prisma.post.findMany({
    include: { author: true },
  });
  return NextResponse.json(posts);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { title, content, published, authorId } = body;

  const post = await prisma.post.create({
    data: {
      title,
      content,
      published,
      authorId,
    },
  });

  return NextResponse.json(post, { status: 201 });
}
