import React from 'react';

const nos = () => {

    return (
        <div className='text-center'>

            <div className='w-full h-screen flex flex-col items-center lg:justify-center'>
                <img className='lg:hidden h-1/4' src="/ban8+.png" alt="banner" />

                <div className='bg-BC bg-opacity-60 shadow-lg rounded-3xl mb-4 w-11/12 lg:w-1/2 z-10 p-4'>
                    <h1 className='text-2xl'>¿Quiénes somos?</h1>
                    <p>
                        Somos una empresa dedicada a la búsqueda y rescate de animales perdidos. En el proyecto de PetAlert,
                        entendemos la angustia que conlleva perder a una mascota, y es por eso que nos hemos dedicado
                        a proporcionar una solución efectiva para rescatar a las mascotas perdidas y llevarlas de nuevo
                        con sus familias. Estamos comprometidos a brindar un servicio que ayude en la búsqueda de estos.
                    </p>
                </div>


                <div className='bg-BC bg-opacity-60 shadow-lg rounded-3xl w-11/12 lg:w-1/2 z-10 p-4'>
                    <h2 className='text-2xl'>Datos de contacto</h2>
                    <p>
                        Correo:
                        <br />
                        bautista.vega.alberto12@gmail.com
                        <br />
                        ramirez.hernandez.priscila2105@gmail.com
                        <br />
                        marin.romero.abigail@gmail.com
                        <br />
                        mendez.reyes.jan.esteban@gmail.com
                    </p>
                </div>
            </div>

            <img className='fixed bottom-0' src="/ban.png" alt="banner" />
        </div>
    )
}

export default nos;