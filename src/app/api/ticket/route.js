// import { NextResponse } from "next/server";
// import prisma from "@/libs/db";

// export async function GET(){

//     const result = await prisma.reporte.findMany({
//         where:{
//             rep_sta: "En proceso"
//         },
//         include: {
//             ticket: true
//         } 
//     });

//     return NextResponse.json(result);
// }

// export async function POST(request) {

//     const data = await request.json()

//     const time = new Date();
//     const fec = time.toLocaleDateString([], { timeZone: "CST" });
//     const hor = time.toLocaleTimeString([], { timeZone: "CST", hour: "2-digit", minute: "2-digit" });

//     await prisma.ticket.create({
//         data: {
//             tic_fec: fec,
//             tic_hor: hor,
//             tic_pri: data.pri,
//             tic_tipo: data.tipo,
//             tic_nom: data.name,
//             rep_id: parseInt(data.id),
//         }
//     })

//     await prisma.reporte.update({
//         where: {
//             rep_id: parseInt(data.id),
//         },
//         data: {
//             rep_sta: 'En proceso',
//         },
//     })

//     return NextResponse.json(null)
// }