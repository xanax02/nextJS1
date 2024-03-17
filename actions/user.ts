"use server";

import prisma from "@/db";

export async function signup(username: string, password: string) {
    const user = await prisma.user.create({
        data: {
            username,
            password
        }
    })

    return "SIGNUP SUCCESS";
}