import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/apis/auth/[...nextauth]/route';
import axios from "axios";
import NoPet from "@/components/NoPet";
import TabCPet from '@/components/TabCPet';

async function user(name) {
    const { data } = await axios.get(process.env.NEXTAUTH_URL + `/api/user/${name}`);
    return data;
}

async function usuarios() {
    const { data } = await axios.get(process.env.NEXTAUTH_URL + "/api/user");
    return data;
}

const controTotal = async () => {

    const session = await getServerSession(authOptions);
    const userInfo = await user(session.user.name);
    const usu = await usuarios();

    const rows = usu.map(usu => {
        const temp = usu.usu_id;
        delete usu.rep_id;
        usu.id = temp;
        return usu;
    })

    return (
        <div className='pt-28 flex justify-center'>
            {(userInfo.usu_adm == 2) ?
                <div className='bg-BC w-fit'>
                    <TabCPet rows={rows}/>
                </div>
                :
                <NoPet />
            }
        </div>
    )
}

export default controTotal;