import ContactPet from "@/components/ContactPet";
import axios from "axios";

async function informacion(id) {
    if (id && Number.isInteger(parseInt(id))) {
        const { data } = await axios.get(process.env.NEXTAUTH_URL + `/api/info/${id}`);
        return data;
    } else {
        return;
    }
}

async function informacionUser(id) {
    const { data } = await axios.get(process.env.NEXTAUTH_URL + `/api/userInfo/${id}`);
    return data;
}

const contact = async ({ params }) => {

    const { id } = params;
    // const infor = await informacion(id);
    // const inforUser = await informacionUser(infor.usu_id);

    const petsDemo = [
        {mac_id: 1, mas_nombre: 'Pelusa', mas_sexo: 'Hembra', mas_especie: 'Gato', mas_edad: '1 año', mas_raza:'Bombay', mas_colorP: 'Naranja', mas_patron: 'Rojizo', mas_colorOjos: 'Miel', mas_pelaje: 'Lanoso', mas_particular: 'Tiene el labio partido', mas_actitud: 'Si', mas_estatus: true, mas_imgFron: 'https://res.cloudinary.com/dt7jeebnl/image/upload/v1718467926/gmjl05mnj5yv09o6mm3j.jpg', usu_id: 1},
        {mac_id: 2, mas_nombre: 'Pedro', mas_sexo: 'Macho', mas_especie: 'Gato', mas_edad: '3 año', mas_raza:'Anogora', mas_colorP: 'Naranja', mas_patron: 'Rojizo', mas_colorOjos: 'Miel', mas_pelaje: 'Duro', mas_particular: 'Tiene el labio partido', mas_actitud: 'Si', mas_estatus: true, mas_imgFron: 'https://res.cloudinary.com/dt7jeebnl/image/upload/v1717641157/qflaoxkqyy1ayacaaswz.jpg', usu_id: 2},
        {mac_id: 3, mas_nombre: 'Galletita', mas_sexo: 'Hembra', mas_especie: 'Perro', mas_edad: '1 año', mas_raza:'Golden', mas_colorP: 'Naranja', mas_patron: 'Rojizo', mas_colorOjos: 'Miel', mas_pelaje: 'Grueso', mas_particular: 'Tiene el labio partido', mas_actitud: 'Si', mas_estatus: true, mas_imgFron: 'https://res.cloudinary.com/dt7jeebnl/image/upload/v1717974145/kykgs1f4o4miqfwvmhwr.jpg', usu_id: 1},
        {mac_id: 4, mas_nombre: 'Rafa', mas_sexo: 'Macho', mas_especie: 'Perro', mas_edad: '5 o mas', mas_raza:'Siames', mas_colorP: 'Naranja', mas_patron: 'Rojizo', mas_colorOjos: 'Miel', mas_pelaje: 'Corto', mas_particular: 'Tiene el labio partido', mas_actitud: 'Si', mas_estatus: true, mas_imgFron: 'https://res.cloudinary.com/dt7jeebnl/image/upload/v1717724288/cvndykykaebmzg3e1pcj.jpg', usu_id: 3},
        {mac_id: 5, mas_nombre: 'Leo', mas_sexo: 'Hembra', mas_especie: 'Perro', mas_edad: '7-9 meses', mas_raza:'Ragdoll', mas_colorP: 'Naranja', mas_patron: 'Rojizo', mas_colorOjos: 'Miel', mas_pelaje: 'Corto', mas_particular: 'Tiene el labio partido', mas_actitud: 'Si', mas_estatus: true, mas_imgFron: 'https://res.cloudinary.com/dt7jeebnl/image/upload/v1717118382/jxnotltnhgh4frmldoua.jpg', usu_id: 3},
        {mac_id: 6, mas_nombre: 'Paco', mas_sexo: 'Macho', mas_especie: 'Perro', mas_edad: '4 año', mas_raza:'Schnauzer', mas_colorP: 'Naranja', mas_patron: 'Rojizo', mas_colorOjos: 'Miel', mas_pelaje: 'Corto', mas_particular: 'Tiene el labio partido', mas_actitud: 'Si', mas_estatus: true, mas_imgFron: 'https://res.cloudinary.com/dt7jeebnl/image/upload/v1717200699/zgous4vmk1joj2iuts2w.jpg', usu_id: 1},
        {mac_id: 7, mas_nombre: 'Sasha', mas_sexo: 'Hembra', mas_especie: 'Gato', mas_edad: '1-3 meses', mas_raza:'Chihuahua', mas_colorP: 'Naranja', mas_patron: 'Rojizo', mas_colorOjos: 'Miel', mas_pelaje: 'Corto', mas_particular: 'Tiene el labio partido', mas_actitud: 'Si', mas_estatus: true, mas_imgFron: 'https://res.cloudinary.com/dt7jeebnl/image/upload/v1717972561/iwrqhvenybnnmhqiwxvd.jpg', usu_id: 1},
        {mac_id: 8, mas_nombre: 'Meli', mas_sexo: 'Macho', mas_especie: 'Gato', mas_edad: '1-3 meses', mas_raza:'Siames', mas_colorP: 'Naranja', mas_patron: 'Rojizo', mas_colorOjos: 'Miel', mas_pelaje: 'Corto', mas_particular: 'Tiene el labio partido', mas_actitud: 'Si', mas_estatus: true, mas_imgFron: 'https://res.cloudinary.com/dt7jeebnl/image/upload/v1717972670/txukqosjykvyvnfjgyyo.jpg', usu_id: 1},
        {mac_id: 9, mas_nombre: 'Cora', mas_sexo: 'Macho', mas_especie: 'Perro', mas_edad: '5 o mas', mas_raza:'Schnauzer', mas_colorP: 'Naranja', mas_patron: 'Rojizo', mas_colorOjos: 'Miel', mas_pelaje: 'Corto', mas_particular: 'Tiene el labio partido', mas_actitud: 'Si', mas_estatus: true, mas_imgFron: 'https://res.cloudinary.com/dt7jeebnl/image/upload/v1717974025/qihw4pihj52dugmhk9kx.jpg', usu_id: 1},
        {mac_id: 10, mas_nombre: 'Mishi', mas_sexo: 'Hembra', mas_especie: 'Gato', mas_edad: '2 año', mas_raza:'Yorkshire', mas_colorP: 'Naranja', mas_patron: 'Rojizo', mas_colorOjos: 'Miel', mas_pelaje: 'Corto', mas_particular: 'Tiene el labio partido', mas_actitud: 'Si', mas_estatus: true, mas_imgFron: 'https://res.cloudinary.com/dt7jeebnl/image/upload/v1718383885/yd1crfx9bb0dcbnykqnu.jpg', usu_id: 2},
        {mac_id: 11, mas_nombre: 'Juan', mas_sexo: 'Macho', mas_especie: 'Perro', mas_edad: '4 año', mas_raza:'Maine Coon', mas_colorP: 'Naranja', mas_patron: 'Rojizo', mas_colorOjos: 'Miel', mas_pelaje: 'Corto', mas_particular: 'Tiene el labio partido', mas_actitud: 'Si', mas_estatus: true, mas_imgFron: 'https://res.cloudinary.com/dt7jeebnl/image/upload/v1718465783/ryem7nnjzsvsby3wulto.jpg', usu_id: 1},
    ];

    const usuDemo = [
        { usu_id: 1, usu_adm: 1, usu_name: "Usuario", usu_email: "maumoy1229@gmail.com", usu_password: "Pet123456%", usu_telefono: "5548786103", usu_telrepuesto: "5522607801" },
        { usu_id: 2, usu_adm: 2, usu_name: "Administrador", usu_email: "maumoy1229@gmail.com", usu_password: "Pet123456%", usu_telefono: "5548786103", usu_telrepuesto: "5522607801" },
        { usu_id: 3, usu_adm: 3, usu_name: "Programador", usu_email: "maumoy1229@gmail.com", usu_password: "Pet123456%", usu_telefono: "5548786103", usu_telrepuesto: "5522607801" },
        { usu_id: 4, usu_adm: 2, usu_name: "priscila", usu_email: "maumoy1229@gmail.com", usu_password: "Priscila21@", usu_telefono: "5548786103", usu_telrepuesto: "5522607801" },
        { usu_id: 5, usu_adm: 2, usu_name: "AbiMinRom", usu_email: "maumoy1229@gmail.com", usu_password: "AbyMin18@", usu_telefono: "5575176010", usu_telrepuesto: "" },
        { usu_id: 6, usu_adm: 3, usu_name: "AlbertoBV", usu_email: "maumoy1229@gmail.com", usu_password: "BEtoo55@@", usu_telefono: "5536786748", usu_telrepuesto: "" },
    ]

    return (
        <ContactPet inforUser={usuDemo[petsDemo[id-1].usu_id]} infor={petsDemo[id-1]} />
    );
};

export default contact;