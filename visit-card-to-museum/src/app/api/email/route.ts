import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const body = await request.json();
    try {
        return NextResponse.json(body);
    } catch (error) {
        return NextResponse.json({ error });
    }
}