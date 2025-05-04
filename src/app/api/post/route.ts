import type { NextRequest } from 'next/server'
import { createSample } from '@/tools/DataManager';

export function POST(request: NextRequest) {
    // response.send("request received!");
    return createSample(request);
}