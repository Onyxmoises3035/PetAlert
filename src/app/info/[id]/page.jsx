import InfoPet from "@/components/InfoPet";
// import axios from "axios";
// import { getServerSession } from 'next-auth/next';
// import { authOptions } from '@/app/api/auth/[...nextauth]/route';

// async function informacion(id) {
//     if (id && Number.isInteger(parseInt(id))) {
//         const { data } = await axios.get(process.env.NEXTAUTH_URL + `/api/info/${id}`);
//         return data;
//     } else {
//         return;
//     }
// }

// async function comentarios(id) {
//     if (id && Number.isInteger(parseInt(id))) {
//         const { data } = await axios.get(process.env.NEXTAUTH_URL + `/api/com/${id}`);
//         return data;
//     } else {
//         return;
//     }
// }

const info = async ({ params }) => {

    const { id } = params;

    // const session = await getServerSession(authOptions)
    // const infor = await informacion(id);
    // const com = await comentarios(id);

    const session = null

    const petsDemo = [
        { mac_id: 1, mas_nombre: 'Pelusa', mas_sexo: 'Hembra', mas_especie: 'Gato', mas_edad: '1 año', mas_raza: 'Bombay', mas_colorP: 'Naranja', mas_patron: 'Rojizo', mas_colorOjos: 'Miel', mas_pelaje: 'Lanoso', mas_particular: 'Tiene el labio partido', mas_actitud: 'Si', mas_estatus: true, mas_imgFron: 'https://res.cloudinary.com/dt7jeebnl/image/upload/v1718467926/gmjl05mnj5yv09o6mm3j.jpg', usu_id: 1 },
        { mac_id: 2, mas_nombre: 'Pedro', mas_sexo: 'Macho', mas_especie: 'Gato', mas_edad: '3 año', mas_raza: 'Anogora', mas_colorP: 'Naranja', mas_patron: 'Rojizo', mas_colorOjos: 'Miel', mas_pelaje: 'Duro', mas_particular: 'Tiene el labio partido', mas_actitud: 'Si', mas_estatus: true, mas_imgFron: 'https://res.cloudinary.com/dt7jeebnl/image/upload/v1717641157/qflaoxkqyy1ayacaaswz.jpg', usu_id: 1 },
        { mac_id: 3, mas_nombre: 'Galletita', mas_sexo: 'Hembra', mas_especie: 'Perro', mas_edad: '1 año', mas_raza: 'Golden', mas_colorP: 'Naranja', mas_patron: 'Rojizo', mas_colorOjos: 'Miel', mas_pelaje: 'Grueso', mas_particular: 'Tiene el labio partido', mas_actitud: 'Si', mas_estatus: true, mas_imgFron: 'https://res.cloudinary.com/dt7jeebnl/image/upload/v1717974145/kykgs1f4o4miqfwvmhwr.jpg', usu_id: 1 },
        { mac_id: 4, mas_nombre: 'Rafa', mas_sexo: 'Macho', mas_especie: 'Perro', mas_edad: '5 o mas', mas_raza: 'Siames', mas_colorP: 'Naranja', mas_patron: 'Rojizo', mas_colorOjos: 'Miel', mas_pelaje: 'Corto', mas_particular: 'Tiene el labio partido', mas_actitud: 'Si', mas_estatus: true, mas_imgFron: 'https://res.cloudinary.com/dt7jeebnl/image/upload/v1717724288/cvndykykaebmzg3e1pcj.jpg', usu_id: 1 },
        { mac_id: 5, mas_nombre: 'Leo', mas_sexo: 'Hembra', mas_especie: 'Perro', mas_edad: '7-9 meses', mas_raza: 'Ragdoll', mas_colorP: 'Naranja', mas_patron: 'Rojizo', mas_colorOjos: 'Miel', mas_pelaje: 'Corto', mas_particular: 'Tiene el labio partido', mas_actitud: 'Si', mas_estatus: true, mas_imgFron: 'https://res.cloudinary.com/dt7jeebnl/image/upload/v1717118382/jxnotltnhgh4frmldoua.jpg', usu_id: 1 },
        { mac_id: 6, mas_nombre: 'Paco', mas_sexo: 'Macho', mas_especie: 'Perro', mas_edad: '4 año', mas_raza: 'Schnauzer', mas_colorP: 'Naranja', mas_patron: 'Rojizo', mas_colorOjos: 'Miel', mas_pelaje: 'Corto', mas_particular: 'Tiene el labio partido', mas_actitud: 'Si', mas_estatus: true, mas_imgFron: 'https://res.cloudinary.com/dt7jeebnl/image/upload/v1717200699/zgous4vmk1joj2iuts2w.jpg', usu_id: 1 },
        { mac_id: 7, mas_nombre: 'Sasha', mas_sexo: 'Hembra', mas_especie: 'Gato', mas_edad: '1-3 meses', mas_raza: 'Chihuahua', mas_colorP: 'Naranja', mas_patron: 'Rojizo', mas_colorOjos: 'Miel', mas_pelaje: 'Corto', mas_particular: 'Tiene el labio partido', mas_actitud: 'Si', mas_estatus: true, mas_imgFron: 'https://res.cloudinary.com/dt7jeebnl/image/upload/v1717972561/iwrqhvenybnnmhqiwxvd.jpg', usu_id: 1 },
        { mac_id: 8, mas_nombre: 'Meli', mas_sexo: 'Macho', mas_especie: 'Gato', mas_edad: '1-3 meses', mas_raza: 'Siames', mas_colorP: 'Naranja', mas_patron: 'Rojizo', mas_colorOjos: 'Miel', mas_pelaje: 'Corto', mas_particular: 'Tiene el labio partido', mas_actitud: 'Si', mas_estatus: true, mas_imgFron: 'https://res.cloudinary.com/dt7jeebnl/image/upload/v1717972670/txukqosjykvyvnfjgyyo.jpg', usu_id: 1 },
        { mac_id: 9, mas_nombre: 'Cora', mas_sexo: 'Macho', mas_especie: 'Perro', mas_edad: '5 o mas', mas_raza: 'Schnauzer', mas_colorP: 'Naranja', mas_patron: 'Rojizo', mas_colorOjos: 'Miel', mas_pelaje: 'Corto', mas_particular: 'Tiene el labio partido', mas_actitud: 'Si', mas_estatus: true, mas_imgFron: 'https://res.cloudinary.com/dt7jeebnl/image/upload/v1717974025/qihw4pihj52dugmhk9kx.jpg', usu_id: 1 },
        { mac_id: 10, mas_nombre: 'Mishi', mas_sexo: 'Hembra', mas_especie: 'Gato', mas_edad: '2 año', mas_raza: 'Yorkshire', mas_colorP: 'Naranja', mas_patron: 'Rojizo', mas_colorOjos: 'Miel', mas_pelaje: 'Corto', mas_particular: 'Tiene el labio partido', mas_actitud: 'Si', mas_estatus: true, mas_imgFron: 'https://res.cloudinary.com/dt7jeebnl/image/upload/v1718383885/yd1crfx9bb0dcbnykqnu.jpg', usu_id: 1 },
        { mac_id: 11, mas_nombre: 'Juan', mas_sexo: 'Macho', mas_especie: 'Perro', mas_edad: '4 año', mas_raza: 'Maine Coon', mas_colorP: 'Naranja', mas_patron: 'Rojizo', mas_colorOjos: 'Miel', mas_pelaje: 'Corto', mas_particular: 'Tiene el labio partido', mas_actitud: 'Si', mas_estatus: true, mas_imgFron: 'https://res.cloudinary.com/dt7jeebnl/image/upload/v1718465783/ryem7nnjzsvsby3wulto.jpg', usu_id: 1 },
    ];

    const coments = [
        { com_id: 1, com_text: 'Yo lo vi', com_fec: '9/6/2024', com_hor: '07:22 p.m.', com_usu: 'Juan Pedro', mac_id: 1 },
        { com_id: 2, com_text: 'Yo tambien vi', com_fec: '9/6/2024', com_hor: '07:25 p.m.', com_usu: 'Pepe', mac_id: 1 },
        { com_id: 3, com_text: 'Yo no lo vi', com_fec: '9/6/2024', com_hor: '07:30 p.m.', com_usu: 'Pancho', mac_id: 1 },
        { com_id: 4, com_text: 'Yo no lo vi', com_fec: '9/6/2024', com_hor: '07:30 p.m.', com_usu: 'Pancho', mac_id: 2 },
    ];

    return (
        // <div className="pt-28 w-full flex justify-center">
        //     {infor && com ?
        //         <InfoPet info={infor} com={com} session={session}/>
        //         :
        //         <div id="noInfo" className="bg-BC rounded p-8 m-2">
        //             <h1>No se encontro informacion de la mascota</h1>
        //         </div>
        //     }
        // </div>
        <div className="pt-28 w-full flex justify-center">
            {petsDemo ?
                <InfoPet info={petsDemo[id - 1]} com={coments} session={session} />
                :
                <div id="noInfo" className="bg-BC rounded p-8 m-2">
                    <h1>No se encontro informacion de la mascota</h1>
                </div>
            }
        </div>
    )
};

export default info;