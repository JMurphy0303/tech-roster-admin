import { NextRequest, NextResponse } from "next/server";
import { updateTechnology } from "@/tools/DataManager";

interface Params {
  id: string;
}

export async function PUT(
  req: NextRequest,
  context: { params: Params }
) {
  const { id } = context.params;

  try {
    const result = await updateTechnology(req, id);
    return NextResponse.json({ success: true, data: result });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message ?? "Failed to update technology" },
      { status: 500 }
    );
  }
}
