import { NextResponse } from "next/server";
import prisma from "@/libs/db";

// endpoint para la extraccion de una mascota en particulas
export async function GET() {

    const result = await prisma.colorP.findMany()

    return NextResponse.json(result)
}