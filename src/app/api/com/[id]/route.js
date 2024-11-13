import { NextResponse } from "next/server";
import prisma from "@/libs/db";

export async function GET(request, {params} ) {

    const result = await prisma.coment.findMany({
        where: {
            mac_id: parseInt(params.id)
        }
    })

    return NextResponse.json(result)
}