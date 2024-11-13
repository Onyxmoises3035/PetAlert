import { NextResponse } from 'next/server';
import prisma from '@/libs/db';

export async function POST(request){
    // obtener datos que se vana a mandar
    const data = await request.json()

    // comprobar si ya exsite el usuario en la BD
    const userFound = await prisma.usuario.findUnique({
        where: {
            usu_name: data.usu_name,
        }
    })
    if (userFound) {
        return NextResponse.json({
            message: 'El usuraio ya existe',
        },{
            status: 400
        })
    }

    // comprobar si ya exsite el correo en la BD
    const emailFound = await prisma.usuario.findUnique({
        where: {
            usu_email: data.usu_email
        }
    })
    if (emailFound) {
        return NextResponse.json({
            message: 'El correo ya esta registrado',
            lim: 'ext'
        },{
            status: 400
        })
    }

    // crear los nuevos datos en la BD
    const newUser = await prisma.usuario.create({
        data
    })

    // regresar la info sin la contraseña
    const {password: _, ...user} = newUser

    return NextResponse.json(user)
}