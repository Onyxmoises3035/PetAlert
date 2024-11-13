import LogPet from "@/components/LogPet"
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

const login = async () => {

    const session = await getServerSession(authOptions)

    if (session != null) {
        redirect('/myPets')
    }

    return (
        <>
            <div className="pt-28">
                <LogPet />
            </div>
        </>
    )
}

export default login