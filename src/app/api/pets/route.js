import { NextResponse } from "next/server";
import prisma from "@/libs/db";
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: 'dt7jeebnl',
    api_key: '684666891713584',
    api_secret: 'zEqSDB7H8vUUQaGHSDSxNzU-XKk'
});

// endpoint para la extraccion de las mascotas perdidas
export async function GET() {
    const result = await prisma.mascotas.findMany({
        where: {
            mas_estatus: true
        }
    })
    return NextResponse.json(result)
}

export async function POST(request) {

    const data = await request.formData();
    
    var estBol
    
    if (data.get('per') == 'Si') {
        estBol = true;
    } else {
        estBol = false;
    }
    
    const img = data.get('imgFron')
    const bytes = await img.arrayBuffer();
    const buffer = Buffer.from(bytes);

    cloudinary.uploader.upload_stream({
        resource_type: "image"
    }, async (err, res) => {

        if (err) {
            console.log(err);
            return;
        }

        await prisma.mascotas.create({
            data: {
                usu_id: parseInt(data.get('id')),
                mas_nombre: data.get('nom'),
                mas_sexo: data.get('sex'),
                mas_especie: data.get('esp'),
                mas_edad: data.get('edad'),
                mas_raza: data.get('raza'),
                mas_colorP: data.get('colorP'),
                mas_patron: data.get('pat'),
                mas_colorOjos: data.get('colorO'),
                mas_pelaje: data.get('pelaje'),
                mas_particular: data.get('par'),
                mas_actitud: data.get('agr'),
                mas_estatus: estBol,
                mas_imgFron: res.url,
            }
        })

    }).end(buffer);

    return NextResponse.json(null)
}