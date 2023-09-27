import { NextResponse } from "next/server";


export async function GET() {
    try {
        return NextResponse.json({message: "Hello World !!!"})
    } catch (error) {
        return NextResponse.json({message: error}, {status: 400})
    }
}