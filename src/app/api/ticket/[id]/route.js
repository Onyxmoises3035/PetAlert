// import { NextResponse } from "next/server";
// import prisma from "@/libs/db";

// export async function GET(request, {params} ){

//     const id = parseInt(params.id);

//     const result = await prisma.reporte.findUnique({
//         where:{
//             rep_id: id
//         },
//         include: {
//             ticket: true
//         }
//     });

//     return NextResponse.json(result)
// }
