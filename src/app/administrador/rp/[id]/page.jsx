import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/apis/auth/[...nextauth]/route';
import axios from "axios";
import NoPet from "@/components/NoPet";
import TicPet from '@/components/TicPet';

async function user(name) {
    const { data } = await axios.get(process.env.NEXTAUTH_URL + `/api/user/${name}`);
    return data;
}

async function reporte(id) {
    const { data } = await axios.get(process.env.NEXTAUTH_URL + `/api/reporte/${id}`);
    return data;
}

const rep = async ({ params }) => {

    const session = await getServerSession(authOptions)
    const userInfo = await user(session?.user.name)
    const { id } = params;
    const rep = await reporte(id);

    return (
        <div className='pt-28'>
            {(userInfo?.usu_adm == 2) ?
                <div className="flex justify-center text-center">
                    <div className="bg-BC w-fit rounded-md">
                        <div className="flex justify-between">
                            <h1 className="m-2 text-xs">fecha: {rep.rep_fec}</h1>
                            <h1 className="m-2 text-xs">Hora: {rep.rep_hor}</h1>
                            <h1 className="m-2 text-xs">Estatus: {rep.rep_sta}</h1>
                        </div>
                        <h1 className="m-2 text-base">Correo: {rep.rep_usu}</h1>
                        <h1 className="m-2 text-base">Descripcion: {rep.rep_pro}</h1>
                        {(rep.rep_sta == "Completado") && <h1 className="m-2 text-base">Problema corregido por: {rep.rep_nom}</h1>}
                        <TicPet id={rep.rep_id} sta={rep.rep_sta} name={userInfo.usu_name}/>
                    </div>
                </div>
                :
                <NoPet />
            }
        </div>
    )
};

export default rep;