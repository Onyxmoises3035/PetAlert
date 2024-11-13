'use client'
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { useRouter } from 'next/navigation';
import { Button, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const ContactPet = ({ infor, inforUser }) => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const router = useRouter();

    const enviar = handleSubmit(async (data) => {

        data.user_email = inforUser.usu_email;
        data.user_name = inforUser.usu_name;
        data.masc_name = infor.mas_nombre;

        // emailjs
        //     .send('service_eirlw2h', 'template_a4833s4', data, {
        //         publicKey: 'ybFr19oiQqqy6Opt6',
        //     })
        //     .then(
        //         () => {
        //             console.log('SUCCESS!');
        //         },
        //         (error) => {
        //             console.log('FAILED...', error.text);
        //         },
        //     );

        router.push(`/info/${infor.mac_id}`);
        router.refresh();
    });

    return (
        <div className='flex justify-center w-full'>
            <form onSubmit={enviar} className='pt-24 flex flex-col w-fit'>
                <h1 className='text-NG text-2xl pb-4 text-center'>Contactar con dueño</h1>

                <p className='text-xs opacity-50'>Nombre con el que te pueden contactar</p>
                <div className='flex'>
                    <AccountCircleIcon className='absolute m-2'></AccountCircleIcon>
                    <input type="text" placeholder='Nombre'
                        className='py-2 px-4 pl-10 block w-full rounded bg-transparent font-normal border border-NG'
                        {...register("contact_name", {
                            required: {
                                value: true,
                                message: "Se requiere un nombre"
                            },
                        })} />
                </div>

                {errors.contact_name && (
                    <span className='block text-RJ text-xs'>{errors.contact_name.message}</span>
                )}

                <p className={`text-xs opacity-50 ${errors.contact_name ? "mt-1" : "mt-5"}`}>Agrega un telefon para poder contactarte</p>
                <div className='flex'>
                    <LocalPhoneIcon className='absolute m-2'></LocalPhoneIcon>
                    <input type="text" placeholder='Telefono'
                        className='py-2 px-4 pl-10 block w-full rounded bg-transparent font-normal border border-NG'
                        {...register("contact_tel", {
                            required: {
                                value: true,
                                message: "Se requiere un telefono"
                            },
                        })} />
                </div>

                {errors.contact_tel && (
                    <span className='block text-RJ text-xs'>{errors.contact_tel.message}</span>
                )}

                <p className={`text-xs opacity-50 ${errors.contact_tel ? "mt-1" : "mt-5"}`}>Agrega un correo para poder contactarte</p>
                <div className='flex'>
                    <EmailIcon className='absolute m-2'></EmailIcon>
                    <input type="email" placeholder='Correo'
                        className='py-2 px-4 pl-10 block w-full rounded bg-transparent font-normal border border-NG'
                        {...register("contact_email", {
                            required: {
                                value: true,
                                message: "Se requiere un correo"
                            },
                        })} />
                </div>

                {errors.contact_email && (
                    <span className='block text-RJ text-xs'>{errors.contact_email.message}</span>
                )}

                <div className={`flex justify-between ${errors.contact_email ? "mt-1" : "mt-5"}`}>
                    <Button className='block font-normal bg-BF text-NG rounded p-2' href={`/info/${infor.mac_id}`}>
                        <Typography textTransform="none">
                            Regresar
                        </Typography>
                    </Button>
                    <button className='block font-normal bg-BF text-NG rounded p-2'>Enviar</button>
                </div>
            </form>
        </div>
    );
};

export default ContactPet;