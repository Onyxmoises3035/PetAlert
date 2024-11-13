import { NextResponse } from "next/server";
import prisma from "@/libs/db";

export async function POST(request) {

    const data = await request.json()

    const time = new Date();
    const fec = time.toLocaleDateString([], { timeZone: "CST" });
    const hor = time.toLocaleTimeString([], { timeZone: "CST", hour: "2-digit", minute: "2-digit" });

    await prisma.coment.create({
        data: {
            com_text: data.coment,
            com_fec: fec,
            com_hor: hor,
            com_usu: data.name,
            mac_id: data.id
        }
    })

    return NextResponse.json(null)
}