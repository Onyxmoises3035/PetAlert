// import { NextResponse } from "next/server";
// import prisma from "@/libs/db";

// export async function GET(request, {params} ){

//     const result = await prisma.reporte.findUnique({
//         where:{
//             rep_id: parseInt(params.id)
//         }
//     });

//     return NextResponse.json(result)
// }

// export async function PUT(request, {params}) {

//     const data = await request.json()
    
//     await prisma.reporte.update({
//         where: {
//             rep_id: parseInt(params.id),
//         },
//         data: {
//             rep_sta: "Completado",
//             rep_nom: data.name,
//         },
//     })
    
//     return NextResponse.json(null)
// }