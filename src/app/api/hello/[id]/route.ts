import { NextResponse, NextRequest } from "next/server";

export async function GET(request: Request, { params }: { params: { id: string } }): Promise<NextResponse> {
    try {
        return NextResponse.json({ message: "Hello, with the params value: " + params.id}); 
    } catch (error) {
        return NextResponse.json({ message: error }, { status: 400 });
    }
}

