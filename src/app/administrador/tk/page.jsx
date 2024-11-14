// import React from 'react';
// import { getServerSession } from 'next-auth/next';
// import { authOptions } from '@/app/api/auth/[...nextauth]/route';
// import axios from "axios";
// import NoPet from "@/components/NoPet";
// import TabTicPet from '@/components/TabTicPet';

// async function user(name) {
//     const { data } = await axios.get(process.env.NEXTAUTH_URL + `/api/user/${name}`);
//     return data;
// }

// async function tickets() {
//     const { data } = await axios.get(process.env.NEXTAUTH_URL + "/api/ticket");
//     return data;
// }

const listaRepotes = async () => {

    // const session = await getServerSession(authOptions);
    // const userInfo = await user(session?.user.name);
    // const tic = await tickets();

    // const rows = [];

    // for (let i = 0; i < tic.length; i++) {
    //     tic[i].ticket.map(tic => {
    //         const temp = tic.tic_id;
    //         delete tic.tic_id;
    //         tic.id = temp
    //         rows.push(tic)
    //     })
    // }

    return (
        <div className='pt-28 flex justify-center'>
            {/* {(userInfo?.usu_adm == 3) ?
                <div className='bg-BC w-fit'>
                    <TabTicPet rows={rows} />
                </div>
                :
                <NoPet />
            } */}
        </div>
    )
}

export default listaRepotes;