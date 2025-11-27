import { NextRequest } from "next/server";
import { deleteTechnology } from "@/tools/DataManager";

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  return deleteTechnology(id);
}
