import CardPet from "@/components/CardPet";
import axios from "axios";

async function extraviados(raza) {
    const { data } = await axios.get(process.env.NEXTAUTH_URL + `/api/ia/${raza}`);
    return data;
}

const petalert = async ({ params }) => {

    const { raza } = params;
    const data = raza.split("%3D");
    // const pets = await extraviados(data[0]);

    const razaEsp = data[0].replace(/_/g, ' ')
    const razaPor = data[1]

    const petsDemo = [
        {mac_id: 1, mas_nombre: 'Pelusa', mas_sexo: 'Hembra', mas_especie: 'Gato', mas_edad: '1 año', mas_raza:'Bombay', mas_colorP: 'Naranja', mas_patron: 'Rojizo', mas_colorOjos: 'Miel', mas_pelaje: 'Lanoso', mas_particular: 'Tiene el labio partido', mas_actitud: 'Si', mas_estatus: true, mas_imgFron: 'https://res.cloudinary.com/dt7jeebnl/image/upload/v1718467926/gmjl05mnj5yv09o6mm3j.jpg', usu_id: 1},
        {mac_id: 2, mas_nombre: 'Pedro', mas_sexo: 'Macho', mas_especie: 'Gato', mas_edad: '3 año', mas_raza:'Anogora', mas_colorP: 'Naranja', mas_patron: 'Rojizo', mas_colorOjos: 'Miel', mas_pelaje: 'Duro', mas_particular: 'Tiene el labio partido', mas_actitud: 'Si', mas_estatus: true, mas_imgFron: 'https://res.cloudinary.com/dt7jeebnl/image/upload/v1717641157/qflaoxkqyy1ayacaaswz.jpg', usu_id: 1},
        {mac_id: 3, mas_nombre: 'Galletita', mas_sexo: 'Hembra', mas_especie: 'Perro', mas_edad: '1 año', mas_raza:'Golden', mas_colorP: 'Naranja', mas_patron: 'Rojizo', mas_colorOjos: 'Miel', mas_pelaje: 'Grueso', mas_particular: 'Tiene el labio partido', mas_actitud: 'Si', mas_estatus: true, mas_imgFron: 'https://res.cloudinary.com/dt7jeebnl/image/upload/v1717974145/kykgs1f4o4miqfwvmhwr.jpg', usu_id: 1},
        {mac_id: 4, mas_nombre: 'Rafa', mas_sexo: 'Macho', mas_especie: 'Perro', mas_edad: '5 o mas', mas_raza:'Siames', mas_colorP: 'Naranja', mas_patron: 'Rojizo', mas_colorOjos: 'Miel', mas_pelaje: 'Corto', mas_particular: 'Tiene el labio partido', mas_actitud: 'Si', mas_estatus: true, mas_imgFron: 'https://res.cloudinary.com/dt7jeebnl/image/upload/v1717724288/cvndykykaebmzg3e1pcj.jpg', usu_id: 1},
        {mac_id: 5, mas_nombre: 'Leo', mas_sexo: 'Hembra', mas_especie: 'Perro', mas_edad: '7-9 meses', mas_raza:'Ragdoll', mas_colorP: 'Naranja', mas_patron: 'Rojizo', mas_colorOjos: 'Miel', mas_pelaje: 'Corto', mas_particular: 'Tiene el labio partido', mas_actitud: 'Si', mas_estatus: true, mas_imgFron: 'https://res.cloudinary.com/dt7jeebnl/image/upload/v1717118382/jxnotltnhgh4frmldoua.jpg', usu_id: 1},
        {mac_id: 6, mas_nombre: 'Paco', mas_sexo: 'Macho', mas_especie: 'Perro', mas_edad: '4 año', mas_raza:'Schnauzer', mas_colorP: 'Naranja', mas_patron: 'Rojizo', mas_colorOjos: 'Miel', mas_pelaje: 'Corto', mas_particular: 'Tiene el labio partido', mas_actitud: 'Si', mas_estatus: true, mas_imgFron: 'https://res.cloudinary.com/dt7jeebnl/image/upload/v1717200699/zgous4vmk1joj2iuts2w.jpg', usu_id: 1},
        {mac_id: 7, mas_nombre: 'Sasha', mas_sexo: 'Hembra', mas_especie: 'Gato', mas_edad: '1-3 meses', mas_raza:'Chihuahua', mas_colorP: 'Naranja', mas_patron: 'Rojizo', mas_colorOjos: 'Miel', mas_pelaje: 'Corto', mas_particular: 'Tiene el labio partido', mas_actitud: 'Si', mas_estatus: true, mas_imgFron: 'https://res.cloudinary.com/dt7jeebnl/image/upload/v1717972561/iwrqhvenybnnmhqiwxvd.jpg', usu_id: 1},
        {mac_id: 8, mas_nombre: 'Meli', mas_sexo: 'Macho', mas_especie: 'Gato', mas_edad: '1-3 meses', mas_raza:'Siames', mas_colorP: 'Naranja', mas_patron: 'Rojizo', mas_colorOjos: 'Miel', mas_pelaje: 'Corto', mas_particular: 'Tiene el labio partido', mas_actitud: 'Si', mas_estatus: true, mas_imgFron: 'https://res.cloudinary.com/dt7jeebnl/image/upload/v1717972670/txukqosjykvyvnfjgyyo.jpg', usu_id: 1},
        {mac_id: 9, mas_nombre: 'Cora', mas_sexo: 'Macho', mas_especie: 'Perro', mas_edad: '5 o mas', mas_raza:'Schnauzer', mas_colorP: 'Naranja', mas_patron: 'Rojizo', mas_colorOjos: 'Miel', mas_pelaje: 'Corto', mas_particular: 'Tiene el labio partido', mas_actitud: 'Si', mas_estatus: true, mas_imgFron: 'https://res.cloudinary.com/dt7jeebnl/image/upload/v1717974025/qihw4pihj52dugmhk9kx.jpg', usu_id: 1},
        {mac_id: 10, mas_nombre: 'Mishi', mas_sexo: 'Hembra', mas_especie: 'Gato', mas_edad: '2 año', mas_raza:'Yorkshire', mas_colorP: 'Naranja', mas_patron: 'Rojizo', mas_colorOjos: 'Miel', mas_pelaje: 'Corto', mas_particular: 'Tiene el labio partido', mas_actitud: 'Si', mas_estatus: true, mas_imgFron: 'https://res.cloudinary.com/dt7jeebnl/image/upload/v1718383885/yd1crfx9bb0dcbnykqnu.jpg', usu_id: 1},
        {mac_id: 11, mas_nombre: 'Juan', mas_sexo: 'Macho', mas_especie: 'Perro', mas_edad: '4 año', mas_raza:'Maine Coon', mas_colorP: 'Naranja', mas_patron: 'Rojizo', mas_colorOjos: 'Miel', mas_pelaje: 'Corto', mas_particular: 'Tiene el labio partido', mas_actitud: 'Si', mas_estatus: true, mas_imgFron: 'https://res.cloudinary.com/dt7jeebnl/image/upload/v1718465783/ryem7nnjzsvsby3wulto.jpg', usu_id: 1},
    ];

    return (
        <div className="content-center text-center p-28">
            <div className="mx-5 flex items-center flex-col">
                <h1 className="text-2xl m-5 bg-BF rounded-full w-full md:w-1/2 lg:w-5/12 xl:w-5/12">{razaEsp}</h1>
            </div>
            <h1 className="text-sm">Porcentaje de exactitud: {razaPor}%</h1>
            <h1 className="text-sm">(EN ESTA DEMO LOS RESULTADOS DE LA BÚSQUEDA CON IA NO SON CORRECTOS)</h1>
            {(petsDemo != "") ?
                <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {petsDemo.map(pet => (<CardPet pet={pet} user={false} key={pet.mac_id} />))}
                </div>
                :
                <h1 className="text-lg">No hay mascotas perdidas de esta raza</h1>
            }
        </div>
    )
}

export default petalert
