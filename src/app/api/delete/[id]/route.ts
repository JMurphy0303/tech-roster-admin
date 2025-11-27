import { NextResponse } from "next/server";
import { deleteTechnology } from "@/tools/DataManager";

export async function DELETE(
  request: Request,
  context: { params: { id: string } }
) {
  const { id } = context.params;

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
