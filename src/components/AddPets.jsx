// 'use client'
// import { Button, Typography } from '@mui/material';
// import { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import axios from "axios";
// import { useRouter } from 'next/navigation';

// function filRazaG(item) {
//     if (item.raza_tipo == 'Gato') {
//         return true;
//     }
//     return false;
// }

// function filRazaP(item) {
//     if (item.raza_tipo == 'Perro') {
//         return true;
//     }
//     return false;
// }

// const AddPets = ({ id, edad, raza, colorP, patron, colorO, pelaje }) => {

//     const { register, handleSubmit, formState: { errors }, setValue, setError, clearErrors } = useForm();

//     const [razaF, setRazaF] = useState(raza.filter(filRazaP));

//     const [cheEsp, setCheEsp] = useState(true)
//     const camEsp = (e) => {
//         if (e.target.checked == true) {
//             setCheEsp(!cheEsp);
//             setValue('esp', e.target.value);
//         }
//         if (e.target.value == 'Gato') {
//             setRazaF(raza.filter(filRazaG));
//         } else {
//             setRazaF(raza.filter(filRazaP));
//         }
//     }

//     const [cheSex, setCheSex] = useState(true)
//     const camSex = (e) => {
//         if (e.target.checked == true) {
//             setCheSex(!cheSex);
//             setValue('sex', e.target.value);
//         }
//     }

//     const [chePer, setChePer] = useState(true)
//     const camPer = (e) => {
//         if (e.target.checked == true) {
//             setChePer(!chePer);
//             setValue('per', e.target.value);
//         }
//     }

//     const [cheAgr, setCheAgr] = useState(true)
//     const camAgr = (e) => {
//         if (e.target.checked == true) {
//             setCheAgr(!cheAgr);
//             setValue('agr', e.target.value);
//         }
//     }

//     const [cheEst, setCheEst] = useState(true)
//     const camEst = (e) => {
//         if (e.target.checked == true) {
//             setCheEst(!cheEst);
//             setValue('est', e.target.value);
//         }
//     }

//     const [cheVac, setCheVac] = useState(true)
//     const camVac = (e) => {
//         if (e.target.checked == true) {
//             setCheVac(!cheVac);
//             setValue('vac', e.target.value);
//         }
//     }

//     const [cheEnf, setCheEnf] = useState(true)
//     const camEnf = (e) => {
//         if (e.target.checked == true) {
//             setCheEnf(!cheEnf);
//             setValue('enf', e.target.value);
//         }
//     }

//     const [imgFron, setImgFron] = useState(null);
//     const camimgFron = (e) => {
//         const files = ["image/png", "image/jpeg", "image/jpg"];
//         const found = files.find((element) => element == e.target.files[0].type)
//         if (found == undefined) {
//             setError("imgFron", {
//                 type: "manual",
//                 message: "Archivo invalido",
//             })
//             return;
//         }
//         setImgFron(e.target.files[0]);
//         setValue('imgFron', e.target.files[0]);
//         clearErrors("imgFron");
//     }

//     const [imgTras, setImgTras] = useState(null);
//     const camimgTras = (e) => {
//         const files = ["image/png", "image/jpeg", "image/jpg"];
//         const found = files.find((element) => element == e.target.files[0].type)
//         if (found == undefined) {
//             setError("imgTras", {
//                 type: "manual",
//                 message: "Archivo invalido",
//             })
//             return;
//         }
//         setImgTras(e.target.files[0]);
//         setValue('imgTras', e.target.files[0]);
//         clearErrors("imgTras");
//     }

//     const [imgSup, setImgSup] = useState(null);
//     const camimgSup = (e) => {
//         const files = ["image/png", "image/jpeg", "image/jpg"];
//         const found = files.find((element) => element == e.target.files[0].type)
//         if (found == undefined) {
//             setError("imgSup", {
//                 type: "manual",
//                 message: "Archivo invalido",
//             })
//             return;
//         }
//         setImgSup(e.target.files[0]);
//         setValue('imgSup', e.target.files[0]);
//         clearErrors("imgSup");
//     }

//     const [imgCoIz, setImgCoIz] = useState(null);
//     const camimgCoIz = (e) => {
//         const files = ["image/png", "image/jpeg", "image/jpg"];
//         const found = files.find((element) => element == e.target.files[0].type)
//         if (found == undefined) {
//             setError("imgCoIz", {
//                 type: "manual",
//                 message: "Archivo invalido",
//             })
//             return;
//         }
//         setImgCoIz(e.target.files[0]);
//         setValue('imgCoIz', e.target.files[0]);
//         clearErrors("imgCoIz");
//     }

//     const [imgCoDe, setImgCoDe] = useState(null);
//     const camimgCoDe = (e) => {
//         const files = ["image/png", "image/jpeg", "image/jpg"];
//         const found = files.find((element) => element == e.target.files[0].type)
//         if (found == undefined) {
//             setError("imgCoDe", {
//                 type: "manual",
//                 message: "Archivo invalido",
//             })
//             return;
//         }
//         setImgCoDe(e.target.files[0]);
//         setValue('imgCoDe', e.target.files[0]);
//         clearErrors("imgCoDe");
//     }

//     const step = (e) => {
//         const stepAct = document.getElementById(e.target.attributes.stepact.value);
//         const stepNext = document.getElementById(e.target.attributes.stepnext.value);
//         stepAct.classList.remove('z-20');
//         stepAct.classList.add('opacity-0');
//         stepNext.classList.remove('opacity-0');
//         stepNext.classList.add('z-20')
//     }

//     const router = useRouter()

//     const enviar = handleSubmit(async data => {

//         const tex = document.getElementById('tex');
//         const spin = document.getElementById('spin');
//         const but = document.getElementById('but');

//         tex.classList.add('hidden');
//         spin.classList.remove('hidden');
//         but.disabled = true;

//         const newPat = data.pat.toString()
//         data.pat = newPat;

//         await axios.post('/api/pets', data, {
//             headers: {
//                 'Content-Type': 'multipart/form-data'
//             }
//         });

//         router.push('/myPets');
//         router.refresh();
//     })

//     return (
//         <form onSubmit={enviar} className='flex justify-center'>
//             <div className='w-full h-5/6 lg:h-4/6 absolute z-10 bg-transparent'>
//             </div>
//             <div id='step1' className="px-8 pt-6 pb-8 mb-4 shadow-2xl rounded-xl bg-BF bg-opacity-50 absolute z-20">

//                 <h1 className='text-center mb-4'>Datos Generales</h1>
//                 <input className='hidden' value={id.usu_id} {...register('id')} />
//                 <div className='block'>
//                     <label htmlFor="nom" className='font-normal text-NG mr-2'>Nombre:</label>
//                     <input className='py-1 px-2 block w-full rounded bg-transparent font-normal border border-NG'
//                         {...register("nom", {
//                             required: {
//                                 value: true,
//                                 message: "Escriba el nombre de su mascota"
//                             },
//                             pattern: {
//                                 value: /^[A-Za-z]+$/,
//                                 message: "Solo letras"
//                             },
//                             maxLength: {
//                                 value: 15,
//                                 message: "Maximo de 15 caracteres"
//                             }
//                         })}
//                         maxLength={15}
//                     />
//                     {errors.nom && (
//                         <span
//                             className='block text-RJ text-xs w-full text-center'>
//                             {errors.nom.message}
//                         </span>
//                     )}
//                 </div>

//                 <div className='flex justify-between mt-4'>
//                     <label className='font-normal text-NG mr-2'>Especie:</label>
//                     <input className='hidden' value={'Perro'} {...register('esp')} />
//                     <label className='font-normal text-NG mr-2'>Perro</label>
//                     <input type="checkbox" value={'Perro'} checked={cheEsp} onChange={camEsp} />
//                     <label className='font-normal text-NG mr-2'>Gato</label>
//                     <input type="checkbox" value={'Gato'} checked={!cheEsp} onChange={camEsp} />
//                 </div>

//                 <div className='flex justify-between mt-4'>
//                     <label className='font-normal text-NG mr-2'>Sexo:</label>
//                     <input className='hidden' value={'Macho'} {...register('sex')} />
//                     <label className='font-normal text-NG mr-2'>Macho</label>
//                     <input type="checkbox" value={'Macho'} checked={cheSex} onChange={camSex} />
//                     <label className='font-normal text-NG mr-2'>Hembra</label>
//                     <input type="checkbox" value={'Hembra'} checked={!cheSex} onChange={camSex} />
//                 </div>

//                 <div className='flex justify-between mt-4'>
//                     <label className='font-normal text-NG mr-2'>Edad:</label>
//                     <select {...register('edad')} className='py-1 px-2 block lg:w-1/2 w-full rounded bg-transparent font-normal border border-NG'>
//                         {edad.map(opcion => (<option key={opcion.edad_id} value={opcion.edad_tiempo}>{opcion.edad_tiempo}</option>))}
//                     </select>
//                 </div>

//                 <div className='flex justify-between mt-4'>
//                     <label className='font-normal text-NG mr-2'>¿Esta perdido?</label>
//                     <input className='hidden' value={'Si'} {...register('per')} />
//                     <label className='font-normal text-NG mr-2'>Si</label>
//                     <input type="checkbox" value={'Si'} checked={chePer} onChange={camPer} />
//                     <label className='font-normal text-NG mr-2'>No</label>
//                     <input type="checkbox" value={'No'} checked={!chePer} onChange={camPer} />
//                 </div>

//                 <div className='w-full flex justify-between mt-4'>
//                     <Button className='bg-RJ text-NG' href='/myPets'>
//                         <Typography textTransform="none">
//                             Cancelar
//                         </Typography>
//                     </Button>
//                     <Button stepact='step1' stepnext='step2' onClick={step} className='bg-BF text-NG'>
//                         <Typography stepact='step1' stepnext='step2' textTransform="none">
//                             Siguiente
//                         </Typography>
//                     </Button>
//                 </div>

//             </div>
//             <div id='step2' className="lg:px-8 pt-6 pb-8 mb-4 shadow-2xl rounded-xl bg-BF bg-opacity-50 absolute opacity-0">
//                 <h1 className='text-center mb-4'>Aspecto</h1>

//                 <div className='flex flex-col lg:flex-row justify-between'>

//                     <div>
//                         <div className='flex justify-center lg:justify-between mt-4'>
//                             <label className='font-normal text-NG mr-2'>Raza:</label>
//                             <select {...register('raza')} className='py-1 px-2 block rounded bg-transparent font-normal border border-NG'>
//                                 {razaF.map(opcion => (<option key={opcion.raza_id} value={opcion.raza_nombre}>{opcion.raza_nombre}</option>))}
//                             </select>
//                         </div>

//                         <div className='flex justify-center lg:justify-between mt-4'>
//                             <label className='font-normal text-NG mr-2'>Color de Ojos:</label>
//                             <select {...register('colorO')} className='py-1 px-2 block rounded bg-transparent font-normal border border-NG'>
//                                 {colorO.map(opcion => (<option key={opcion.colorOjos_id} value={opcion.colorOjos_Ojos}>{opcion.colorOjos_Ojos}</option>))}
//                             </select>
//                         </div>

//                         <div className='flex justify-center lg:justify-between mt-4'>
//                             <label className='font-normal text-NG mr-2'>Color Principal:</label>
//                             <select {...register('colorP')} className='py-1 px-2 block rounded bg-transparent font-normal border border-NG'>
//                                 {colorP.map(opcion => (<option key={opcion.colorP_id} value={opcion.colorP_colores}>{opcion.colorP_colores}</option>))}
//                             </select>
//                         </div>
//                     </div>

//                     <div>
//                         <div className='flex flex-col items-center justify-center text-center my-4 lg:my-0'>
//                             <label className='font-normal text-NG mr-2 block'>Señas particulares:</label>
//                             <textarea className='resize-none mx-8 lg:mx-0 rounded bg-transparent font-normal border border-NG' cols="30" rows="4" {...register('par', {
//                                 required: {
//                                     value: true,
//                                     message: "Escriba particularidades de su mascota"
//                                 },
//                                 pattern: {
//                                     value: /^[A-Za-z0-9\s]+$/,
//                                     message: "Solo letras y numeros"
//                                 },
//                                 maxLength: {
//                                     value: 200,
//                                     message: "Maximo de 200 caracteres"
//                                 }

//                             })} maxLength={200} >
//                             </textarea>
//                             {errors.par && (
//                                 <span
//                                     className='block text-RJ text-xs w-full text-center'>
//                                     {errors.par.message}
//                                 </span>
//                             )}
//                         </div>
//                     </div>

//                 </div>

//                 <div className='lg:my-4 flex items-center flex-col'>
//                     <label className='font-normal text-NG mr-2'>Patron:</label>
//                     <div className='grid grid-cols-3 lg:grid-cols-5 w-fit'>
//                         {
//                             patron.map(opcion => (
//                                 <div key={opcion.patron_id} className='flex justify-between mr-5 mb-1 p-1 rounded bg-transparent font-normal border border-NG'>
//                                     <label className='font-normal text-NG mr-2'>{opcion.patron_combinacion}</label>
//                                     <input type="checkbox" value={opcion.patron_combinacion} {...register('pat')} />
//                                 </div>
//                             ))
//                         }
//                     </div>
//                 </div>

//                 <div className='flex flex-col lg:flex-row justify-around'>

//                     <div className='flex justify-center lg:justify-between mt-4'>
//                         <label className='font-normal text-NG mr-2'>Pelaje:</label>
//                         <select {...register('pelaje')} className='py-1 px-2 block rounded bg-transparent font-normal border border-NG'>
//                             {pelaje.map(opcion => (<option key={opcion.pelaje_id} value={opcion.pelaje_patron}>{opcion.pelaje_patron}</option>))}
//                         </select>
//                     </div>

//                     <div className='flex justify-center lg:justify-between mt-4'>
//                         <label className='font-normal text-NG mr-2'>¿Es agresivo?</label>
//                         <input className='hidden' value={'Si'} {...register('agr')} />
//                         <label className='font-normal text-NG mr-2'>Si</label>
//                         <input className='mr-2' type="checkbox" value={'Si'} checked={cheAgr} onChange={camAgr} />
//                         <label className='font-normal text-NG mr-2'>No</label>
//                         <input className='mr-2' type="checkbox" value={'No'} checked={!cheAgr} onChange={camAgr} />
//                     </div>

//                 </div>

//                 <div className='flex justify-around lg:justify-between mt-4'>
//                     <Button stepact='step2' stepnext='step1' onClick={step} className='bg-BF text-NG'>
//                         <Typography stepact='step2' stepnext='step1' textTransform="none">
//                             Anterior
//                         </Typography>
//                     </Button>
//                     <Button stepact='step2' stepnext='step3' onClick={step} className='bg-BF text-NG'>
//                         <Typography stepact='step2' stepnext='step3' textTransform="none">
//                             Siguiente
//                         </Typography>
//                     </Button>
//                 </div>

//             </div>
//             <div id='step3' className="w-3/4 lg:w-fit px-8 pt-6 pb-8 mb-4 shadow-2xl rounded-xl bg-BF bg-opacity-50 absolute opacity-0">
//                 <h1 className='text-center mb-4'>Salud</h1>

//                 <div className='flex justify-between mt-4 w-full'>
//                     <div className='mr-2'>
//                         <label className='font-normal text-NG mr-2'>¿Esterilizado?</label>
//                         <input className='hidden' value={'Si'} {...register('est')} />
//                     </div>
//                     <div className='flex justify-center items-center'>
//                         <label className='font-normal text-NG mr-2'>Si</label>
//                         <input className='mr-2' type="checkbox" value={'Si'} checked={cheEst} onChange={camEst} />
//                         <label className='font-normal text-NG mr-2'>No</label>
//                         <input className='mr-2' type="checkbox" value={'No'} checked={!cheEst} onChange={camEst} />
//                     </div>
//                 </div>

//                 <div className='flex justify-between mt-4'>
//                     <div className='mr-2'>
//                         <label className='font-normal text-NG mr-2'>¿Vacuna <br /> antirrabica?</label>
//                         <input className='hidden' value={'Si'} {...register('vac')} />
//                     </div>
//                     <div className='flex justify-center items-center'>
//                         <label className='font-normal text-NG mr-2'>Si</label>
//                         <input className='mr-2' type="checkbox" value={'Si'} checked={cheVac} onChange={camVac} />
//                         <label className='font-normal text-NG mr-2'>No</label>
//                         <input className='mr-2' type="checkbox" value={'No'} checked={!cheVac} onChange={camVac} />
//                     </div>
//                 </div>

//                 <div className='flex justify-between mt-4 w-full'>
//                     <div className='mr-2'>
//                         <label className='font-normal text-NG mr-2'>¿Presenta alguna <br /> enfermedad?</label>
//                         <input className='hidden' value={'Si'} {...register('enf')} />
//                     </div>
//                     <div className='flex justify-center items-center'>
//                         <label className='font-normal text-NG mr-2'>Si</label>
//                         <input className='mr-2' type="checkbox" value={'Si'} checked={cheEnf} onChange={camEnf} />
//                         <label className='font-normal text-NG mr-2'>No</label>
//                         <input className='mr-2' type="checkbox" value={'No'} checked={!cheEnf} onChange={camEnf} />
//                     </div>
//                 </div>

//                 <div className='flex justify-between mt-4'>
//                     <Button stepact='step3' stepnext='step2' onClick={step} className='bg-BF text-NG'>
//                         <Typography stepact='step3' stepnext='step2' textTransform="none">
//                             Anterior
//                         </Typography>
//                     </Button>
//                     <Button stepact='step3' stepnext='step4' onClick={step} className='bg-BF text-NG'>
//                         <Typography stepact='step3' stepnext='step4' textTransform="none">
//                             Siguiente
//                         </Typography>
//                     </Button>
//                 </div>
//             </div>
//             <div id='step4' className="px-8 pt-6 pb-8 mb-4 shadow-2xl rounded-xl bg-BF bg-opacity-50 absolute opacity-0">

//                 <div className='flex flex-col justify-center items-center z-30 pb-2'>
//                     {errors.nom && (
//                         <span
//                             className='block text-RJ text-xs w-full text-center'>
//                             {errors.nom.message}
//                         </span>
//                     )}
//                     {errors.par && (
//                         <span
//                             className='block text-RJ text-xs w-full text-center'>
//                             {errors.par.message}
//                         </span>
//                     )}
//                 </div>

//                 <h1 className='text-center mb-4'>Fotografias</h1>

//                 <div className='flex flex-col lg:flex-row justify-center text-center'>

//                     <input className='hidden' {...register('imgFron', {
//                         required: {
//                             value: true,
//                             message: "Falta Imagen"
//                         }
//                     })} />
//                     <input className='hidden' {...register('imgTras', {
//                         required: {
//                             value: true,
//                             message: "Falta Imagen"
//                         }
//                     })} />
//                     <input className='hidden' {...register('imgSup', {
//                         required: {
//                             value: true,
//                             message: "Falta Imagen"
//                         }
//                     })} />
//                     <input className='hidden' {...register('imgCoIz', {
//                         required: {
//                             value: true,
//                             message: "Falta Imagen"
//                         }
//                     })} />
//                     <input className='hidden' {...register('imgCoDe', {
//                         required: {
//                             value: true,
//                             message: "Falta Imagen"
//                         }
//                     })} />

//                     <div className='flex flex-col justify-center items-center'>
//                         <label className='bg-transparent size-32 m-2 border rounded-3xl cursor-pointer grid content-center justify-center'>
//                             <input type="file" accept='image/*' className='hidden' onChange={camimgFron} />
//                             {(imgFron != null) ? <img className='size-32 rounded-3xl' src={URL.createObjectURL(imgFron)} /> : <img className='size-10' src='/add.png' />}
//                         </label>
//                         <h1>
//                             Frontal
//                             {errors.imgFron && (<span className='block text-RJ text-xs text-center'>{errors.imgFron.message}</span>)}
//                         </h1>
//                     </div>

//                     <div className='flex justify-center'>

//                         <div className='flex flex-col justify-center items-center'>
//                             <label className='bg-transparent size-32 m-2 border rounded-3xl cursor-pointer grid content-center justify-center'>
//                                 <input type="file" accept='image/*' className='hidden' onChange={camimgTras} />
//                                 {(imgTras != null) ? <img className='size-32 rounded-3xl' src={URL.createObjectURL(imgTras)} /> : <img className='size-10' src='/add.png' />}
//                             </label>
//                             <h1>
//                                 Trasera
//                                 {errors.imgTras && (<span className='block text-RJ text-xs text-center'>{errors.imgTras.message}</span>)}
//                             </h1>
//                         </div>

//                         <div className='flex flex-col justify-center items-center'>
//                             <label className='bg-transparent size-32 m-2 border rounded-3xl cursor-pointer grid content-center justify-center'>
//                                 <input type="file" accept='image/*' className='hidden' onChange={camimgSup} />
//                                 {(imgSup != null) ? <img className='size-32 rounded-3xl' src={URL.createObjectURL(imgSup)} /> : <img className='size-10' src='/add.png' />}
//                             </label>
//                             <h1>
//                                 Superior
//                                 {errors.imgSup && (<span className='block text-RJ text-xs text-center'>{errors.imgSup.message}</span>)}
//                             </h1>
//                         </div>
//                     </div>
//                 </div>

//                 <div className='flex justify-center'>

//                     <div className='flex flex-col justify-center items-center'>
//                         <label className='bg-transparent size-32 m-2 border rounded-3xl cursor-pointer grid content-center justify-center'>
//                             <input type="file" accept='image/*' className='hidden' onChange={camimgCoIz} />
//                             {(imgCoIz != null) ? <img className='size-32 rounded-3xl' src={URL.createObjectURL(imgCoIz)} /> : <img className='size-10' src='/add.png' />}
//                         </label>
//                         <h1>
//                             Costado Izquierdo
//                             {errors.imgCoIz && (<span className='block text-RJ text-xs text-center'>{errors.imgCoIz.message}</span>)}
//                         </h1>
//                     </div>

//                     <div className='flex flex-col items-center justify-center'>
//                         <label className='bg-transparent size-32 m-2 border rounded-3xl cursor-pointer grid content-center justify-center'>
//                             <input type="file" accept='image/*' className='hidden' onChange={camimgCoDe} />
//                             {(imgCoDe != null) ? <img className='size-32 rounded-3xl' src={URL.createObjectURL(imgCoDe)} /> : <img className='size-10' src='/add.png' />}
//                         </label>
//                         <h1>
//                             Costado Derecho
//                             {errors.imgCoDe && (<span className='block text-RJ text-xs text-center'>{errors.imgCoDe.message}</span>)}
//                         </h1>
//                     </div>
//                 </div>

//                 <div className='flex justify-between mt-5'>
//                     <Button stepact='step4' stepnext='step3' onClick={step} className='bg-BF text-NG'>
//                         <Typography stepact='step4' stepnext='step3' textTransform="none">
//                             Anterior
//                         </Typography>
//                     </Button>
//                     <button id='but' className='block font-normal bg-VR text-NG rounded p-2'>
//                         <span id='tex'>Guardar</span>

//                         <div id='spin' role="status" className='hidden'>
//                             <svg aria-hidden="true" className="size-6 text-GR animate-spin dark:text-NG fill-BC" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                 <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
//                                 <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
//                             </svg>
//                             <span className="sr-only">Loading...</span>
//                         </div>
//                     </button>
//                 </div>
//             </div>
//         </form>
//     )
// };

// export default AddPets;