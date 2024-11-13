import { NextResponse } from "next/server";
import prisma from "@/libs/db";

// endpoint para la extraccion de una mascota en particular
export async function GET(request, { params }) {

    const user = await prisma.usuario.findUnique({
        where: {
            usu_name: params.user
        }
    })

    const result = await prisma.mascotas.findMany({
        where: {
            usu_id: user.usu_id
        }
    })

    return NextResponse.json(result)
}

// endpoint para la eliminacion de una mascota en particular
export async function DELETE(request, { params }) {

    const result = await prisma.mascotas.delete({
        where: {
            mac_id: parseInt(params.user)
        }
    })

    return new Response(null, { status: 204 })
}

// endpoint para la actualizacion de una mascota en particular
export async function PUT(request, { params }) {

    const data = await request.json();
    const result = await prisma.mascotas.update({
        where: {
            mac_id: parseInt(params.user),
        },
        data: {
            mas_estatus: data.per,
        },
    })

    return NextResponse.json(result)
}
