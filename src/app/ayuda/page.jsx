import React from 'react';

const ayuda = () => {

    return (
        <div className='pt-14 lg:pt-32 text-center'>

            <img className='lg:hidden h-1/4' src="/ban6.png" alt="banner" />
            <div className='w-full h-screen flex flex-col items-center lg:justify-center'>

                <div className='lg:mt-44 bg-BC bg-opacity-60 shadow-lg rounded-3xl mb-4 w-11/12 lg:w-1/2 z-10 p-4 text-left'>
                    <h2 className='text-2xl'>Preguntas frecuentes:</h2> <br />
                    <p>
                        ¿Cómo funciona el sistema de reconocimiento de razas de animales extraviados?<br />
                        Nuestro sistema funciona por medio de identificación de patrones entres las razas de los perros y gatos para así poder presentar el perfil de los que tengan la misma raza.
                    </p> <br />
                    <p>
                        ¿Qué información necesito proporcionar para que el sistema pueda identificar la raza de mi mascota extraviada?<br />
                        La foto de el perro o el gato a identificar en formato jpg o png para así poder subirla al sistema de reconocimiento.
                    </p> <br />
                    <p>
                        ¿Cuál es el proceso para contactar a los dueños de mascotas que han sido reconocidas por el sistema?<br />
                        Para poder ayudar a los usuarios a contactarse con los que puedan tener a su perro o gato proporcionamos un formulario en el cual podrán proporcionar el nombre de la persona que quiere ponerse en contacto, un teléfono y correo de contacto para que de esta manera se pueda enviar una notificación al usuario al que le pertenece su mascota.
                    </p> <br />
                    <p>
                        ¿Ofrecen algún tipo de asistencia adicional para ayudar a reunir a las mascotas extraviadas con sus dueños?<br />
                        Por el momento tenemos un medio de comunicación en el que se pueden proporcionar datos de la persona que encontró al perro o gato extraviado para proporcionarlo al dueño de esta misma.
                    </p> <br />
                    <p>
                        ¿El sistema de reconocimiento de razas de animales extraviados funciona para todas las especies de mascotas, o está limitado a ciertos tipos de animales?<br />
                        Este sistema de reconocimiento de razas funciona únicamente para las razas de perros y gatos.
                    </p> <br />
                    <p>
                        ¿Cuál es el alcance geográfico del servicio? ¿Está disponible en todas las regiones, o hay áreas específicas donde no se ofrece?<br />
                        Por el momento está limitado únicamente para la ciudad de México, en un futuro se planea ampliar su alcance a todas las regiones de México que cuenten con acceso a internet.
                    </p> <br />
                </div>

                <div className='bg-BC bg-opacity-60 shadow-lg rounded-3xl w-11/12 lg:w-1/2 z-10 p-4'>
                    <h2 className='text-2xl'>¿Tienes algún problema con el sistema?</h2>
                    <p>
                        Reportalo presionando el siguiente botón:
                        <br />
                        <button className='font-normal bg-RJ text-NG rounded p-2'><a href="/subirreporte">Enviar Reporte</a></button>
                    </p>
                </div>
            </div>

            <img className='fixed bottom-0 w-full' src="/ban7.png" alt="banner" />
        </div>
    )
}

export default ayuda;