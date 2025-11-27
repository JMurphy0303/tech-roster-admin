import { NextRequest, NextResponse } from "next/server";
import { updateTechnology } from "@/tools/DataManager";

// Note: do NOT destructure params in the function signature
export async function PUT(
  req: NextRequest,
  context: { params: { id: string } } // exactly this type
) {
  const id = context.params.id;

  try {
    const body = await req.json();
    const result = await updateTechnology(body, id); // pass request body to your function
    return NextResponse.json({ success: true, data: result });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Failed to update technology";
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
