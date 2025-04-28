import { NextRequest, NextResponse } from "next/server";


export function GET(req: NextRequest){
    return NextResponse.json({
        email: " mir@gamil.com",
        name:"mir saif ali"
    })
}

export async function POST(req:NextRequest) {
    const body = await req.json();

    return NextResponse.json({
        message:"You are logged in"
    })
}