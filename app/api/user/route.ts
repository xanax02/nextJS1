import { NextRequest } from "next/server"
import prisma from "@/db";

export async function GET() {

    const user = await prisma.user.findFirst();

    return Response.json({
        email: user?.username
    })
}

export async function POST(req: NextRequest) {
    const body = await req.json();
    await prisma.user.create({
        data: {
            username: body.username,
            password: body.password
        }
    })

    return Response.json({
        message: "You are logged in"
    })
}