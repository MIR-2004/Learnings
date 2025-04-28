import { PrismaClient } from "@prisma/client/extension";
import { NextRequest, NextResponse } from "next/server";

const client = new PrismaClient();

export async function GET(req: NextRequest){

    const user = await client.user.findFirst();
    return NextResponse.json({
        email: user.email,
        name: user.name
    })
}

export async function POST(req:NextRequest) {
    const body = await req.json();

    client.user.create({
        data:{
            name: body.name,
            password: body.password
        }
    })

    return NextResponse.json({
        message:"You are logged in"
    })
}