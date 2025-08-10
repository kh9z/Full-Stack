import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { createPost, getPosts } from "./postService";

const prisma = new PrismaClient();

export async function GET() {
  const posts = await getPosts(prisma);
  return NextResponse.json(posts);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { title, content, published, authorId } = body;

  const post = await createPost(prisma, {
    title,
    content,
    published,
    authorId,
  });

  return NextResponse.json(post, { status: 201 });
}
