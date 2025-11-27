import { NextRequest, NextResponse } from "next/server";
import { updateTechnology } from "@/tools/DataManager";

export async function PUT(
  req: NextRequest,
  context: { params: Record<string, string> } // ✅ Generic record
) {
  const id = context.params.id;

  try {
    const result = await updateTechnology(req, id);
    return NextResponse.json({ success: true, data: result });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Failed to update technology";
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
