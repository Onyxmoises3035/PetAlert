import CardPet from "@/components/CardPet";
// import { getServerSession } from 'next-auth/next';
// import { authOptions } from '@/app/api/auth/[...nextauth]/route';
// import axios from "axios";
import { Button, ImageList } from "@mui/material";

// async function masc(name) {
//     const { data } = await axios.get(process.env.NEXTAUTH_URL + `/api/pets/${name}`);
//     return data;
// }

const myPets = async () => {

    // const session = await getServerSession(authOptions)
    // const pets = await masc(session.user.name);

    return (

        <div className="content-center text-center">
            <div className="pt-24 mx-5 flex items-center flex-col text-center">
                <h1 className="text-2xl m-5 bg-BF rounded-full w-full md:w-1/2 lg:w-5/12 xl:w-5/12">Mis Mascotas</h1>
            </div>
            {(pets != "") ?
                <ImageList className="p-5 w-full columns-1 md:columns-2 lg:columns-3 xl:columns-4" variant="masonry">
                    {pets.map(pet => (
                        <CardPet pet={pet} user={true} key={pet.mac_id} />
                    ))}
                </ImageList>
                :
                <div>
                    <h1 className="w-full fixed">
                        Da clic en la huellita para registrar una mascota <br />
                        <Button className='w-16 h-16' href='/addPet'>
                            <img src="/pat.png" alt="addpet" />
                            <img className='mt-7 ml-7 w-2/5 h-auto absolute z-10' src="/add.png" alt="addpet" />
                        </Button>
                    </h1>
                </div>
            }
        </div>

    )
}

export default myPets