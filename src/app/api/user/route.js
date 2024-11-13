import { NextResponse } from "next/server";
import prisma from "@/libs/db";

export async function GET() {
    const result = await prisma.usuario.findMany();

    return NextResponse.json(result)
}