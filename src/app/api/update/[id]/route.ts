import { NextRequest, NextResponse } from "next/server";
import { updateTechnology } from "@/tools/DataManager";

export async function PUT(req: NextRequest, context: unknown) {
  // Use a type assertion inside the function
  const { id } = (context as { params: { id: string } }).params;

  try {
    const body = await req.json();
    const result = await updateTechnology(body, id);
    return NextResponse.json({ success: true, data: result });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Failed to update technology";
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
