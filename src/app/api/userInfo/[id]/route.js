import { NextResponse } from "next/server";
import prisma from "@/libs/db";

// endpoint para la extraccion de una mascota en particulas
export async function GET(request, {params} ) {

    const result = await prisma.usuario.findUnique({
        where: {
            usu_id: parseInt(params.id)
        }
    })

    return NextResponse.json(result)
}