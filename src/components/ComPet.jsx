'use client'
import { useForm } from 'react-hook-form';
import axios from "axios";
import { useRouter } from 'next/navigation';

const ComPet = ({ id, name }) => {

    const router = useRouter();
    const { register, handleSubmit } = useForm();

    const enviar = handleSubmit(async (data) => {

        await axios.put(`/api/reporte/${data.id}`, data)

        router.push('/administrador/tk');
        router.refresh();

    })

    return (
        <form onSubmit={enviar}>
            <input className='hidden' value={id} {...register('id')} />
            <input className='hidden' value={name} {...register('name')} />
            <button className="bg-BF rounded-md p-2 m-2" >
                Marcar como completado
            </button>
        </form>
    )
}

export default ComPet;