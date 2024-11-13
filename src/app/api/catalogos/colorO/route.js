import { NextResponse } from "next/server";
import prisma from "@/libs/db";

// endpoint para la extraccion de una mascota en particulas
export async function GET() {

    const result = await prisma.colorOjos.findMany()

    return NextResponse.json(result)
}