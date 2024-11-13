import RegPet from "@/components/RegPet"
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

const register = async () => {

    const session = await getServerSession(authOptions)

    if (session != null) {
        redirect('/myPets')
    }

    return (
        <>
            <div className="pt-28">
                <RegPet />
            </div>
        </>
    )
}

export default register