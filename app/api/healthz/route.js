import { getPaste } from "@/app/lib/store";

export async function GET() {
  try {
    await kv.ping();
    return Response.json({ ok: true });
  } catch {
    return Response.json({ ok: false }, { status: 500 });
  }
}