import CardPet from "@/components/CardPet";
import IaPet from "@/components/IaPet";
import { ImageList } from "@mui/material";
// import axios from "axios";

// async function extraviados() {
//     const { data } = await axios.get(process.env.NEXTAUTH_URL + "/api/pets");
//     return data;
// }

const petalert = async () => {

    // const pets = await extraviados();

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
        <div className="content-center text-center pt-24">
            <div className="mx-5 flex items-center flex-col lg:pb-8">
                {/* <h1 className="text-7xl mb-4 text-NG">PetAlert</h1> */}
                {/* <h1 className="text-2xl mb-5 bg-BF rounded-full w-full md:w-1/2 lg:w-5/12 xl:w-5/12">Mascotas Extraviadas</h1> */}
                {/* <p className="pb-6 text-xl text-NG w-full md:w-1/2 lg:w-5/12 xl:w-5/12">PetAlert es una página web enfocada en ayudar a que las mascotas extraviadas regresen pronto a casa</p> */}
                <div className="lg:absolute right-0 px-8">
                    <IaPet />
                </div>
            </div>
            <h1 className="text-sm">(EN ESTA DEMO LA INFORMACION DE LAS MASCOTAS NO ES COMPLETAMENTE CORRECTA)</h1>
            <ImageList className="p-5 w-full columns-1 md:columns-2 lg:columns-3 xl:columns-4" variant="masonry">
                {petsDemo.map(pet => (
                    <CardPet pet={pet} user={false} key={pet.mac_id} />
                ))}
            </ImageList>
        </div>
    )
}

export default petalert
