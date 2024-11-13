'use client'
import { Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import axios from "axios";
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';

const InfoPet = ({ info, com, session }) => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const router = useRouter();

    const enviar = handleSubmit(async (data) => {

        data.id = info.mac_id;
        data.name = session.user.name;

        await axios.post('/api/com', data)
        router.refresh();
        reset();
    });

    return (
        <div className="flex lg:h-96 flex-col lg:flex-row">
            <div className="bg-BF rounded-3xl bg-opacity-50 p-2 m-2 h-full shadow-lg">

                <div className="w-full h-fit flex justify-start items-center">
                    <Button href="/"><KeyboardBackspaceIcon></KeyboardBackspaceIcon></Button>
                </div>

                <div className="flex lg:items-center lg:flex-grow flex-col lg:flex-row mb-4">
                    <div className="lg:mx-5 flex justify-center items-center flex-col">
                        <img className="size-48 m-1 rounded-3xl shadow-lg" src={info.mas_imgFron} />

                        <div className="flex flex-row justify-center items-center ml-4">
                            <h1 className="text-lg">{info.mas_nombre}</h1>
                            <div className="bg-opacity-10 rounded-full bg-NG size-fit mx-2 shadow-lg">
                                {(info.mas_sexo == 'Macho') ?
                                    <MaleIcon className="fill-BM size-6 m-1"></MaleIcon>
                                    :
                                    <FemaleIcon className="fill-RF size-6 m-1"></FemaleIcon>}
                            </div>
                        </div>
                    </div>

                    <div className="text-center lg:mr-4">
                        <br className="lg:hidden" />
                        <p className="mx-2">
                            Hola soy {info.mas_nombre} un {info.mas_especie} de raza <br />
                            {info.mas_raza} con ojos de color {info.mas_colorOjos}, <br />
                            pelaje de color {info.mas_colorP} y {info.mas_pelaje}, <br />
                            tengo {info.mas_edad} y {info.mas_actitud} soy agresivo
                        </p>
                        <br />
                        <div className="w-full justify-center items-center my-2 text-center">
                            {info.mas_particular}
                        </div>
                    </div>
                </div>

                <div className="w-full flex items-center justify-center">
                    <a
                        href={`/contactar/${info.mac_id}`}
                        className="py-2 px-4 flex items-center justify-between rounded bg-BF border border-NG
                            hover:bg-GR transition shadow-lg
                        "
                    >
                        <ConnectWithoutContactIcon></ConnectWithoutContactIcon>
                        <h1 className="mx-2">Contactar Dueño</h1>
                    </a>
                </div>

            </div>
            <div className="text-center bg-BF rounded-3xl bg-opacity-50 p-8 m-2 max-w-96 overflow-scroll h-full shadow-lg">
                {session ?
                    <form onSubmit={enviar} className="h-8 flex justify-between" >
                        <input type="text" className="h-full mr-2 rounded-md text-center" placeholder="Agregar comentario"
                            {...register("coment", {
                                required: {
                                    value: true,
                                    message: "Escribe algo"
                                },
                                pattern: {
                                    value: /^[A-Za-z0-9\s]+$/,
                                    message: "Solo puede tener numero y letras"
                                },
                                maxLength: {
                                    value: 100,
                                    message: "Maximo de 100 caracteres"
                                }
                            })}
                        />
                        <button className="bg-BF rounded px-5 shadow-lg">
                            <SendIcon />
                        </button>
                    </form>
                    :
                    <h1><a href="/auth/login" className='text-VR'>Inicia sesion</a> para comentar</h1>
                }
                {errors.coment && (<span className='block text-RJ text-xs w-full text-center'>{errors.coment.message}</span>)}
                {com && com.map(tex => (
                    <div key={tex.com_id} className="bg-BL rounded-md text-left m-2 p-2">
                        <div className="flex justify-between bg-GR rounded-md p-1">
                            <p className="text-xs">{tex.com_usu}</p>
                            <p className="text-xs">{tex.com_fec} {tex.com_hor}</p>
                        </div>
                        <h1>{tex.com_text}</h1>
                    </div>
                )).reverse()}
            </div>
        </div>
    )
};

export default InfoPet;