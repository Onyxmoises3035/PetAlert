import React from 'react';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/apis/auth/[...nextauth]/route';
import axios from "axios";
import NoPet from "@/components/NoPet";
import TabPet from '@/components/TabPet';

async function user(name) {
    const { data } = await axios.get(process.env.NEXTAUTH_URL + `/api/user/${name}`);
    return data;
}

async function reportes() {
    const { data } = await axios.get(process.env.NEXTAUTH_URL + "/api/reporte");
    return data;
}

const listaRepotes = async () => {

    const session = await getServerSession(authOptions);
    const userInfo = await user(session.user.name);
    const rep = await reportes();

    const rows = rep.map(rep => {
        const temp = rep.rep_id;
        delete rep.rep_id;
        rep.id = temp;
        return rep;
    })

    return (
        <div className='pt-28 flex justify-center'>
            {(userInfo.usu_adm == 2) ?
                <div className='bg-BC w-fit'>
                    <TabPet rows={rows}/>
                </div>
                :
                <NoPet />
            }
        </div>
    )
}

export default listaRepotes;