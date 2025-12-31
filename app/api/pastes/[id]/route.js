import { getPaste } from "@/app/lib/store";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { id } = params;

  const paste = getPaste(id);

  if (!paste) {
    return NextResponse.json(
      { error: "Paste not found" },
      { status: 404 }
    );
  }

  if (paste.status === "EXPIRED") {
    return NextResponse.json(
      { error: "Paste expired" },
      { status: 410 }
    );
  }

  return NextResponse.json(paste);
}