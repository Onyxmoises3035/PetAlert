import { NextResponse } from "next/server";
import prisma from "@/libs/db";

export async function POST(request){

    const data = await request.json()

    const time = new Date();
    const fec = time.toLocaleDateString([], { timeZone: "CST" });
    const hor = time.toLocaleTimeString([], { timeZone: "CST", hour: "2-digit", minute: "2-digit" });

    await prisma.reporte.create({
        data:{
            rep_fec: fec,
            rep_hor: hor,
            rep_usu: data.email,
            rep_pro: data.error,
            rep_sta: "En espera",
        }
    })

    return NextResponse.json(null)
}

export async function GET(){

    const result = await prisma.reporte.findMany();

    return NextResponse.json(result)
}