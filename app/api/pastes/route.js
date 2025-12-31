import { createPaste } from "@/app/lib/store";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { content, ttlSeconds } = await req.json();

  const id = Math.random().toString(36).slice(2, 8);

  createPaste(id, content, 10);

  return NextResponse.json({ id });
}