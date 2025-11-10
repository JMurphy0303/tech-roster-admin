import { NextResponse, NextRequest } from "next/server";
import { updateTechnology } from "@/tools/DataManager";

export async function PUT(request:NextRequest, { params }:{params:Promise<{id:string}>}) {
    const { id } = await params;
    return updateTechnology(request, id);
}