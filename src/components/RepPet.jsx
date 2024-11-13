'use client'
import { useForm } from 'react-hook-form';
import axios from "axios";
import { useRouter } from 'next/navigation';

const RepPet = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const router = useRouter();

    const enviar = handleSubmit(async (data) => {

        const tex = document.getElementById('tex');
        const spin = document.getElementById('spin');
        const but = document.getElementById('but');

        tex.classList.add('hidden');
        spin.classList.remove('hidden');
        but.disabled = true;

        await axios.post('/api/reporte', data)

        router.push('/');
        router.refresh();

    })

    return (
        <div className='pt-28 text-center p-3 rounded-md flex justify-center'>
            <form onSubmit={enviar} className='w-max bg-BC px-8 pt-6 pb-8 mb-4 rounded-md'>
                <h1 className='text-2xl my-2'>Reporte de problema</h1>
                <h1 className='text-base my-2' >llena lo siguiente para mandar tu reporte</h1>
                <div >
                    <label className='block' htmlFor="">Tu correo</label>
                    <input className='block w-full text-center my-2' type="text" placeholder='Correo'
                        {...register("email", {
                            required: {
                                value: true,
                                message: "Se requiere un correo"
                            }
                        })}
                    />
                    {errors.email && (
                        <span className='block text-RJ text-xs'>{errors.email.message}</span>
                    )}
                    <label className='block' htmlFor="">Descripcion breve del problema</label>
                    <textarea className='block w-full resize-none my-2' cols="30" rows="10"
                        {...register("error", {
                            required: {
                                value: true,
                                message: "Describe el problema"
                            }
                        })}
                    />
                    {errors.error && (
                        <span className='block text-RJ text-xs'>{errors.error.message}</span>
                    )}
                </div>
                <button id='but' className='flex justify-center items-center font-normal w-full bg-BF text-NG py-2 px-4 rounded mt-5'>

                    <span id='tex'>Enviar</span>

                    <div id='spin' role="status" className='hidden'>
                        <svg aria-hidden="true" className="size-6 text-GR animate-spin dark:text-NG fill-BC" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                        </svg>
                        <span className="sr-only">Loading...</span>
                    </div>

                </button>
            </form>
        </div>
    )
}

export default RepPet;