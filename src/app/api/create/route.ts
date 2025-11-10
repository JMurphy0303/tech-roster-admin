import { NextResponse, NextRequest } from "next/server";
import { createTechnology } from "@/tools/DataManager";

export function POST(request:NextRequest) {
    // return new NextResponse("Response from Web API via GET request");

    return createTechnology(request);
}