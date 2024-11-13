import { AppBar, Typography, Toolbar, Button } from '@mui/material';
// import { getServerSession } from 'next-auth/next';
// import { authOptions } from '@/app/api/auth/[...nextauth]/route';
// import MenuPet from './MenuPet';
// import axios from 'axios';

// async function user(name) {
//     const { data } = await axios.get(process.env.NEXTAUTH_URL + `/api/user/${name}`);
//     return data;
// }

const BarPet = async () => {

    // const session = await getServerSession(authOptions);
    // const userInfo = await user(session?.user.name);

    const session = null
    const userInfo = null

    return (
        <>
            {/* barra superior */}
            <AppBar className='mb-5 bg-BF'>
                <Toolbar>
                    <div className='flex justify-between w-full items-center'>
                        <div id='logo' >
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                <Button href='/' className='text-NG'>
                                    <img className='w-16 h-16' src="/log.jpg" alt="PetAlert" />
                                    <Typography textTransform="none" className='mx-3 text-xl hidden md:inline'>
                                        PetAlert
                                    </Typography>
                                </Button>
                            </Typography>
                        </div>
                        <div id='menu' className='hidden lg:flex xl:flex'>
                            <Button className='text-NG mx-6 px-6 py-2 bg-BC bg-opacity-0 hover:bg-opacity-100 rounded-xl' href='/'>
                                <img className='size-10' src="/ext.svg" alt="ext" />
                                {/* <Typography textTransform="none">
                                    Mascotas
                                </Typography> */}
                            </Button>
                            {session?.user &&
                                <Button className='text-NG mx-6 px-6 py-2 bg-BC bg-opacity-0 hover:bg-opacity-100 rounded-xl' href='/myPets'>
                                    <img className='size-12' src="/pets.svg" alt="ext" />
                                    {/* <Typography textTransform="none">
                                        Mis Mascotas
                                    </Typography> */}
                                </Button>
                            }
                            <Button className='text-NG mx-6 px-6 py-2 bg-BC bg-opacity-0 hover:bg-opacity-100 rounded-xl' href='/nosotros'>
                                <img className='size-9' src="/us.svg" alt="ext" />
                                {/* <Typography textTransform="none">
                                    Nosotros
                                </Typography> */}
                            </Button>
                            <Button className='text-NG mx-6 px-6 py-2 bg-BC bg-opacity-0 hover:bg-opacity-100 rounded-xl' href='/ayuda'>
                                <img className='size-11' src="/help.svg" alt="ext" />
                                {/* <Typography textTransform="none">
                                    Ayuda
                                </Typography> */}
                            </Button>
                        </div>
                        <div id='user' >

                            {session?.user &&
                                <Button className='w-16 h-16' href='/addPet'>
                                    <img src="/pat.png" alt="addpet" />
                                    <img className='mt-7 ml-7 w-2/5 h-auto absolute z-10' src="/add.png" alt="addpet" />
                                </Button>
                            }
                            {!session?.user ?
                                <Button className='text-NG bg-BC mr-2 font-normal py-2 px-4 rounded' href='/auth/login'>
                                    <Typography textTransform="none">
                                        Ingresar
                                    </Typography>
                                </Button>
                                :
                                <MenuPet userInfo={userInfo} />
                            }

                        </div>
                    </div>
                </Toolbar>
            </AppBar>
        </>

    )
}

export default BarPet