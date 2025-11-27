import { NextRequest, NextResponse } from "next/server";
import { updateTechnology } from "@/tools/DataManager";

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  try {
    const result = await updateTechnology(request, id);
    return NextResponse.json({ success: true, data: result });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message ?? "failed to update technology" },
      { status: 500 }
    );
  }
}
