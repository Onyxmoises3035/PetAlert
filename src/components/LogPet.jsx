'use client'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

const LogPet = () => {

    const router = useRouter()

    // uso de 'react hook forms' para validar datos del forms
    const { register, handleSubmit, formState: { errors } } = useForm();


    const [mes, setMes] = useState(null);

    const enviar = handleSubmit(async data => {

        const tex = document.getElementById('tex');
        const spin = document.getElementById('spin');
        const but = document.getElementById('but');

        tex.classList.add('hidden');
        spin.classList.remove('hidden');
        but.disabled = true;

        const res = await signIn('credentials', {
            email: data.email,
            password: data.password,
            redirect: false,
        })
        if (res.error) {
            tex.classList.remove('hidden');
            spin.classList.add('hidden');
            but.disabled = false;
            setMes('Usuario o contraseña incorrecto');
        } else {
            router.push('/myPets');
            router.refresh();
        }
    })


    return (
        <div className='flex justify-center flex-col lg:flex-row items-center h-full text-center lg:pl-40 pl-0'>

            <img className='lg:w-1/2 w-full lg:mb-0 mb-4' src="/login.png" alt="masc" />

            <div className='bg-none lg:w-1/2 w-full'>

                {/* formulario de inicio */}
                <div >
                    <form onSubmit={enviar} className='flex lg:items-start items-center flex-col'>

                        <h1 className='text-NG text-2xl pb-4 w-1/2'>Iniciar Sesion</h1>

                        {mes && <span className='block text-RJ text-xs'>{mes}</span>}
                        <div className={`w-full flex items-center px-10 lg:px-0 ${mes ? "mt-1" : "mt-0"}`}>
                            <EmailIcon className='absolute mx-2'></EmailIcon>

                            <input type="email" placeholder='E-mail'
                                className='py-2 px-4 pl-10 block lg:w-1/2 w-full rounded bg-transparent font-normal border border-NG'
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Escribe un correo"
                                    },
                                    pattern: {
                                        value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                                        message: "Correo no valido"
                                    }
                                })}
                            />
                        </div>

                        {errors.email && (
                            <span className='block text-RJ text-xs'>{errors.email.message}</span>
                        )}

                        <div className={`w-full flex items-center px-10 lg:px-0 ${errors.email ? "mt-1" : "mt-5"}`}>
                            <LockIcon className='absolute mx-2'></LockIcon>

                            <input type="password" placeholder='Contraseña'
                                className='py-2 px-4 pl-10 block lg:w-1/2 w-full rounded bg-transparent font-normal border border-NG'
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Escribe una contraseña"
                                    },
                                    pattern: {
                                        value: /^[A-Za-z\d$@!%*?&]+$/,
                                        message: "Contraseña no valida"
                                    },
                                })}
                            />
                        </div>
                        {errors.password && (
                            <span className='block text-RJ text-xs'>{errors.password.message}</span>
                        )}

                        <button id='but' className={`flex justify-center items-center font-normal lg:w-1/2 w-5/6 bg-BF text-NG py-2 px-10 rounded ${errors.password ? "mt-1" : "mt-5"}`}>

                            <span id='tex'>Ingresar</span>

                            <div id='spin' role="status" className='hidden'>
                                <svg aria-hidden="true" className="size-6 text-GR animate-spin dark:text-NG fill-BC" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                </svg>
                                <span className="sr-only">Loading...</span>
                            </div>

                        </button>

                        <p className='text-xs pt-4 w-1/2'>¿Es tu primera vez? <a href="/auth/register" className='text-VR'>Registrate</a></p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LogPet