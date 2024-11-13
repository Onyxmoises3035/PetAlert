import { NextResponse } from "next/server";
import prisma from "@/libs/db";

// endpoint para la extraccion de una mascota en particulas
export async function GET(request, {params} ) {

    const result = await prisma.usuario.findUnique({
        where: {
            usu_name: params.name
        }
    })

    return NextResponse.json(result)
}