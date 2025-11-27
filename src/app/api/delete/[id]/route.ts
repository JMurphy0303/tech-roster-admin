import { NextResponse } from "next/server";
import { deleteTechnology } from "@/tools/DataManager";

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  // note: params.id is always a string
  const id = params.id;

  try {
    const result = await deleteTechnology(id);
    return NextResponse.json({ success: true, data: result });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message ?? "failed to delete technology" },
      { status: 500 }
    );
  }
}
