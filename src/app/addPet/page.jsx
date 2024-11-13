import AddPets from "@/components/AddPets";
import axios from 'axios';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/apis/auth/[...nextauth]/route';

async function user(name) {
    const { data } = await axios.get(process.env.NEXTAUTH_URL + `/api/user/${name}`);
    return data;
}

async function catEdad() {
    const { data } = await axios.get(process.env.NEXTAUTH_URL + `/api/catalogos/edad`);
    return data;
}

async function catRaza() {
    const { data } = await axios.get(process.env.NEXTAUTH_URL + `/api/catalogos/raza`);
    return data;
}

async function catColorP() {
    const { data } = await axios.get(process.env.NEXTAUTH_URL + `/api/catalogos/colorP`);
    return data;
}

async function catPatron() {
    const { data } = await axios.get(process.env.NEXTAUTH_URL + `/api/catalogos/patron`);
    return data;
}

async function catColorO() {
    const { data } = await axios.get(process.env.NEXTAUTH_URL + `/api/catalogos/colorO`);
    return data;
}

async function catPelaje() {
    const { data } = await axios.get(process.env.NEXTAUTH_URL + `/api/catalogos/pelaje`);
    return data;
}

const addPet = async () => {

    const session = await getServerSession(authOptions)

    const edad = await catEdad();
    const raza = await catRaza();
    const colorP = await catColorP();
    const patron = await catPatron();
    const colorO = await catColorO();
    const pelaje = await catPelaje();
    const id = await user(session.user.name);

    return (
        <div>
            <div className="pt-24 mx-5 flex items-center flex-col text-center">
                <h1 className="text-2xl m-5 bg-BF rounded-full w-full md:w-1/2 lg:w-5/12 xl:w-5/12">Añadir mascota</h1>
            </div>
            <div className='flex justify-center items-center h-full text-left'>
                <AddPets id={id} edad={edad} raza={raza} colorP={colorP} patron={patron} colorO={colorO} pelaje={pelaje} />
            </div>
        </div>
    );
};

export default addPet;