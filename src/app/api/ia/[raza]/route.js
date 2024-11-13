// import { NextResponse } from "next/server";
// import prisma from "@/libs/db";

// // endpoint para la extraccion de una mascota en particular
// export async function GET(request, { params }) {

//     const { raza } = params;
//     const razaEsp = raza.replace(/_/g, ' ')

//     const result = await prisma.mascotas.findMany({
//         where: {
//             mas_raza: razaEsp
//         }
//     })

//     return NextResponse.json(result);
// }
