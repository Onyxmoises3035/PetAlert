const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const cat = async () => {
    await prisma.edad.createMany({
        data: [
            { edad_id: 1, edad_tiempo: "1-3 meses" },
            { edad_id: 2, edad_tiempo: "4-6 meses" },
            { edad_id: 3, edad_tiempo: "7-9 meses" },
            { edad_id: 4, edad_tiempo: "10-12 meses" },
            { edad_id: 5, edad_tiempo: "1 año" },
            { edad_id: 6, edad_tiempo: "2 años" },
            { edad_id: 7, edad_tiempo: "3 años" },
            { edad_id: 8, edad_tiempo: "4 años" },
            { edad_id: 9, edad_tiempo: "5 o mas" },
        ]
    });

    await prisma.raza.createMany({
        data: [
            { raza_id: 1, raza_tipo: "Gato", raza_nombre: "Mestizo" },
            { raza_id: 2, raza_tipo: "Gato", raza_nombre: "Persa" },
            { raza_id: 3, raza_tipo: "Gato", raza_nombre: "Benagli" },
            { raza_id: 4, raza_tipo: "Gato", raza_nombre: "Siames" },
            { raza_id: 5, raza_tipo: "Gato", raza_nombre: "Americano de pelo corto" },
            { raza_id: 6, raza_tipo: "Gato", raza_nombre: "Anogora" },
            { raza_id: 7, raza_tipo: "Gato", raza_nombre: "Azul Ruso" },
            { raza_id: 8, raza_tipo: "Gato", raza_nombre: "Bombay" },
            { raza_id: 9, raza_tipo: "Gato", raza_nombre: "Maine Coon" },
            { raza_id: 10, raza_tipo: "Gato", raza_nombre: "Siberiano" },
            { raza_id: 11, raza_tipo: "Gato", raza_nombre: "Ragdoll" },
            { raza_id: 12, raza_tipo: "Perro", raza_nombre: "Mestizo" },
            { raza_id: 13, raza_tipo: "Perro", raza_nombre: "Chihuahua" },
            { raza_id: 14, raza_tipo: "Perro", raza_nombre: "Schnauzer" },
            { raza_id: 15, raza_tipo: "Perro", raza_nombre: "Pitbull" },
            { raza_id: 16, raza_tipo: "Perro", raza_nombre: "Labrador" },
            { raza_id: 17, raza_tipo: "Perro", raza_nombre: "Pug" },
            { raza_id: 18, raza_tipo: "Perro", raza_nombre: "Pastor Aleman" },
            { raza_id: 19, raza_tipo: "Perro", raza_nombre: "Siberiano" },
            { raza_id: 20, raza_tipo: "Perro", raza_nombre: "Yorkshire" },
            { raza_id: 21, raza_tipo: "Perro", raza_nombre: "Golden" },
            { raza_id: 22, raza_tipo: "Perro", raza_nombre: "Bulldog Frances" },
        ]
    });

    await prisma.colorP.createMany({
        data: [
            { colorP_id: 1, colorP_colores: "Negro" },
            { colorP_id: 2, colorP_colores: "Blanco" },
            { colorP_id: 3, colorP_colores: "Café" },
            { colorP_id: 4, colorP_colores: "Amarillo" },
            { colorP_id: 5, colorP_colores: "Naranja" },
            { colorP_id: 6, colorP_colores: "Gris oxford" },
            { colorP_id: 7, colorP_colores: "Gris claro" },
            { colorP_id: 8, colorP_colores: "Marron" },
            { colorP_id: 9, colorP_colores: "Chocolate" },
            { colorP_id: 10, colorP_colores: "Sepia" },
            { colorP_id: 11, colorP_colores: "Rojizo" },
        ]
    });

    await prisma.patron.createMany({
        data: [
            { patron_id: 1, patron_combinacion: "Negro" },
            { patron_id: 2, patron_combinacion: "Blanco" },
            { patron_id: 3, patron_combinacion: "Café" },
            { patron_id: 4, patron_combinacion: "Amarillo" },
            { patron_id: 5, patron_combinacion: "Gris claro" },
            { patron_id: 6, patron_combinacion: "Gris Oxford" },
            { patron_id: 7, patron_combinacion: "Dorado" },
            { patron_id: 8, patron_combinacion: "Chocolate" },
            { patron_id: 9, patron_combinacion: "Plata" },
            { patron_id: 10, patron_combinacion: "Rojizo" },
            { patron_id: 11, patron_combinacion: "Sepya" },
            { patron_id: 12, patron_combinacion: "Escamado" },
            { patron_id: 13, patron_combinacion: "Marrón" },
            { patron_id: 14, patron_combinacion: "Genjibre" },
            { patron_id: 15, patron_combinacion: "Beige" },
            { patron_id: 16, patron_combinacion: "Naranja" },
            { patron_id: 17, patron_combinacion: "Atigrado" },
            { patron_id: 18, patron_combinacion: "Paja" },
            { patron_id: 19, patron_combinacion: "Color unico" },
        ]
    });

    await prisma.colorOjos.createMany({
        data: [
            { colorOjos_id: 1, colorOjos_Ojos: 'Amarillo' },
            { colorOjos_id: 2, colorOjos_Ojos: 'Azúl' },
            { colorOjos_id: 3, colorOjos_Ojos: 'Miel' },
            { colorOjos_id: 4, colorOjos_Ojos: 'Negro' },
            { colorOjos_id: 5, colorOjos_Ojos: 'Bicolor' },
            { colorOjos_id: 6, colorOjos_Ojos: 'Gris' },
            { colorOjos_id: 7, colorOjos_Ojos: 'Verde' },
        ]
    });

    await prisma.pelaje.createMany({
        data: [
            { pelaje_id: 1, pelaje_patron: 'Corto' },
            { pelaje_id: 2, pelaje_patron: 'Largo' },
            { pelaje_id: 3, pelaje_patron: 'Aspero' },
            { pelaje_id: 4, pelaje_patron: 'Duro' },
            { pelaje_id: 5, pelaje_patron: 'Sin pelo' },
            { pelaje_id: 6, pelaje_patron: 'Lanoso' },
            { pelaje_id: 7, pelaje_patron: 'Pelaje nuevo' },
            { pelaje_id: 8, pelaje_patron: 'Grueso' },
            { pelaje_id: 9, pelaje_patron: 'Muy peludo' },
            { pelaje_id: 10, pelaje_patron: 'Poquito pelo' },
            { pelaje_id: 11, pelaje_patron: 'Pelo em ciertas areas' },
        ]
    });

    await prisma.usuario.createMany({
        data: [
            { usu_id: 1, usu_adm: 1, usu_name: "Usuario", usu_email: "UsuarioPet@gmail.com", usu_password: "Pet123456%", usu_telefono: "5548786103", usu_telrepuesto: "5522607801" },
            { usu_id: 2, usu_adm: 2, usu_name: "Administrador", usu_email: "AdminPet@gmail.com", usu_password: "Pet123456%", usu_telefono: "5548786103", usu_telrepuesto: "5522607801" },
            { usu_id: 3, usu_adm: 3, usu_name: "Programador", usu_email: "PrograPet@gmail.com", usu_password: "Pet123456%", usu_telefono: "5548786103", usu_telrepuesto: "5522607801" },
            { usu_id: 4, usu_adm: 2, usu_name: "priscila", usu_email: "priscilaram01@gmail.com", usu_password: "Priscila21@", usu_telefono: "5548786103", usu_telrepuesto: "5522607801" },
            { usu_id: 5, usu_adm: 2, usu_name: "AbiMinRom", usu_email: "abymarinromerita@gmail.com", usu_password: "AbyMin18@", usu_telefono: "5575176010", usu_telrepuesto: "" },
            { usu_id: 6, usu_adm: 3, usu_name: "AlbertoBV", usu_email: "bautista.vega.alberto12@gmail.com", usu_password: "BEtoo55@@", usu_telefono: "5536786748", usu_telrepuesto: "" },
        ]
    });

    await prisma.$disconnect();
}

cat();