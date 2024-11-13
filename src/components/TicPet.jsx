'use client'
import { useForm } from 'react-hook-form';
import axios from "axios";
import { useRouter } from 'next/navigation';

const TicPet = ({ id, sta, name }) => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const router = useRouter();

    const enviar = handleSubmit(async (data) => {

        await axios.post('/api/ticket', data)

        router.push('/administrador/rp');
        router.refresh();

    })

    return (
        <form onSubmit={enviar}>
            {(sta == "En espera") ?
                <div>
                    <input className='hidden' value={id} {...register('id')} />
                    <input className='hidden' value={name} {...register('name')} />
                    <div className='flex flex-col justify-center items-center'>
                        <label>Prioridad:</label>
                        <select className='m-2 p-2 text-center rounded-md' {...register('pri')}>
                            <option value="Baja">Baja</option>
                            <option value="Media">Media</option>
                            <option value="Alta">Alta</option>
                        </select>
                        <label>Tipo de error:</label>
                        <select className='m-2 p-2 text-center rounded-md' {...register('tipo')}>
                            <option value="Error Bug">Error Bug</option>
                            <option value="Pantalla no encontrada">Pantalla no encontrada</option>
                            <option value="Sin datos">Sin datos</option>
                            <option value="No vuelve el estado">No vuelve el estado</option>
                        </select>
                    </div>

                    <div className='flex justify-between w-full'>
                        <a className="bg-BF rounded-md p-2 m-2" href="/administrador/rp">
                            Regresar
                        </a>
                        <button className="bg-BF rounded-md p-2 m-2">iniciar proceso</button>
                    </div>

                </div>
                :
                <div className='flex justify-between w-full'>
                    <a className="bg-BF rounded-md p-2 m-2" href="/administrador/rp">
                        Regresar
                    </a>
                    {(sta == "Completado") ?
                        <p className="bg-BF opacity-80 rounded-md p-2 m-2">Proceso completado</p>
                        :
                        <p className="bg-BF opacity-80 rounded-md p-2 m-2">Proceso iniciado</p>
                    }
                </div>
            }
        </form>
    )
}

export default TicPet;