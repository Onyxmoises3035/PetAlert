"use client"
import * as tf from '@tensorflow/tfjs'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

const gatos = [
    'Americano_de_pelo_corto',
    'Angora',
    'Azul_ruso',
    'Bengali',
    'Bombay',
    'Maine_coon',
    'Persa',
    'Ragdoll',
    'Siames',
    'Siberiano'
]

const perros = [
    'Bulldog_Frances',
    'Chihuahua',
    'Golden',
    'Labrador',
    'Pastor_Aleman',
    'Pitbull',
    'Pug',
    'Schnauzer',
    'Siberiano',
    'Yorkshire'
]

const IaPet = () => {

    const [model, setModel] = useState(null);
    const [modelG, setModelG] = useState(null);
    const [modelP, setModelP] = useState(null);
    const [imgIn, setImgIn] = useState(null);

    const router = useRouter()

    const { register, handleSubmit, formState: { errors }, setValue, setError, clearErrors } = useForm();

    useEffect(() => {
        async function loadModel() {
            console.log("cargando modelos......");
            const loadedModel = await tf.loadLayersModel("/models/pvgV2/model.json");
            setModel(loadedModel);
            const loadedModelG = await tf.loadLayersModel("/models/egV2/model.json");
            setModelG(loadedModelG);
            const loadedModelP = await tf.loadLayersModel("/models/epV2/model.json");
            setModelP(loadedModelP);
            console.log("modelos cargados");
        }

        loadModel()
    }, []);

    const imgFile = (e) => {
        const files = ["image/png", "image/jpeg", "image/jpg"];
        const found = files.find((element) => element == e.target.files[0].type)
        if (found == undefined) {
            setError("imgIA", {
                type: "manual",
                message: "Solo se acepta archivos .png, .jpeg y .jpg",
            })
            return;
        }
        setImgIn(e.target.files[0]);
        setValue('imgIA', e.target.files[0]);
        clearErrors("imgIA");
    }

    const imgCanvas = handleSubmit(() => {

        const tex = document.getElementById('tex');
        const spin = document.getElementById('spin');
        const but = document.getElementById('b2');

        tex.classList.add('hidden');
        spin.classList.remove('hidden');
        but.disabled = true;

        var ctx = document.getElementById('myCanvas').getContext('2d');
        var img = new Image;
        img.onload = function () {
            ctx.clearRect(0, 0, 224, 224);
            ctx.drawImage(img, 0, 0, 224, 224);
            var imgData = ctx.getImageData(0, 0, 224, 224);

            var arr = [];
            var arr224 = [];

            for (var p = 0; p < imgData.data.length; p += 4) {
                var rojo = imgData.data[p] / 255;
                var verde = imgData.data[p + 1] / 255;
                var azul = imgData.data[p + 2] / 255;

                arr224.push([rojo, verde, azul]);
                if (arr224.length == 224) {
                    arr.push(arr224);
                    arr224 = [];
                }
            }

            arr = [arr];

            var tensor = tf.tensor4d(arr);
            var resultado = model.predict(tensor).dataSync();
            
            var valores = [];

            for (let i = 0; i < resultado.length; i++) {
                valores.push(resultado[i])
            }

            const index = valores.indexOf(Math.max(...valores));

            if (index == 0) {

                valores = [];

                const res = modelG.predict(tensor).dataSync();

                for (let i = 0; i < res.length; i++) {
                    valores.push(res[i])
                }
                
                const indexGato = valores.indexOf(Math.max(...valores));
                router.push(`/petalert/${gatos[indexGato]}=${(Math.max(...valores) * 100).toFixed(2)}`)

            } else {

                valores = [];

                const res = modelP.predict(tensor).dataSync();

                for (let i = 0; i < res.length; i++) {
                    valores.push(res[i])
                }
                
                const indexPerro = valores.indexOf(Math.max(...valores));
                router.push(`/petalert/${perros[indexPerro]}=${(Math.max(...valores) * 100).toFixed(2)}`)

            }

        }
        img.src = URL.createObjectURL(imgIn);
    })

    const change = () => {
        const b1 = document.getElementById("b1");
        const b2 = document.getElementById("b2");
        const ia = document.getElementById("IA");

        b1.classList.add("hidden");
        b2.classList.remove('hidden');
        ia.classList.remove('hidden');
    }

    return (
        <div>
            <button id='b1' onClick={change} className="relative px-5 py-2 font-medium text-white group">
                <span className="border absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-BC group-hover:bg-BF group-hover:skew-x-12"></span>
                <span className="border absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-BF group-hover:bg-BC group-hover:-skew-x-12"></span>
                <span className="relative">Buscar con IA</span>
            </button>
            <canvas id='myCanvas' width="224" height="224" className='hidden'></canvas>
            <form onSubmit={imgCanvas} className='flex justify-center'>
                <input className='hidden' {...register('imgIA', {
                    required: {
                        value: true,
                        message: "Falta Imagen"
                    }
                })} />
                <input id='IA' className='hidden p-2' type="file" onChange={imgFile} />
                <button id='b2' className="relative px-5 py-2 font-medium text-white group hidden">
                    <span className="border absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-BC group-hover:bg-BF group-hover:skew-x-12"></span>
                    <span className="border absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-BF group-hover:bg-BC group-hover:-skew-x-12"></span>
                    <span id='tex' className="relative ">Buscar</span>

                    <div id='spin' role="status" className='hidden'>
                        <svg aria-hidden="true" className="size-6 text-GR animate-spin dark:text-NG fill-BC" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                        </svg>
                        <span className="sr-only">Loading...</span>
                    </div>

                </button>
            </form>
            {errors.imgIA && (<span className='block text-RJ text-xs text-center'>{errors.imgIA.message}</span>)}
        </div>
    )
}

export default IaPet;