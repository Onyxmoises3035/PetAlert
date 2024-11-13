// import { getServerSession } from 'next-auth/next';
// import { authOptions } from '@/app/api/auth/[...nextauth]/route';
// import axios from "axios";
// import NoPet from "@/components/NoPet";
// import ComPet from '@/components/ComPet';

// async function user(name) {
//     const { data } = await axios.get(process.env.NEXTAUTH_URL + `/api/user/${name}`);
//     return data;
// }

// async function reporte(id) {
//     const { data } = await axios.get(process.env.NEXTAUTH_URL + `/api/ticket/${id}`);
//     return data;
// }

// const rep = async ({ params }) => {

//     const session = await getServerSession(authOptions)
//     const userInfo = await user(session?.user.name)
//     const { id } = params;
//     const rep = await reporte(id);

//     return (
//         <div className='pt-28'>
//             {(userInfo?.usu_adm == 3) ?
//                 <div className="flex justify-center text-center">
//                     <div className="bg-BC w-fit rounded-md">
//                         <div className="flex justify-between">
//                             <h1 className="m-2 text-xs">fecha: {rep.ticket[0].tic_fec}</h1>
//                             <h1 className="m-2 text-xs">Hora: {rep.ticket[0].tic_hor}</h1>
//                             <h1 className="m-2 text-xs">Prioridad: {rep.ticket[0].tic_pri}</h1>
//                             <h1 className="m-2 text-xs">Admin: {rep.ticket[0].tic_nom}</h1>
//                         </div>
//                         <h1 className="m-2 text-base">Tipo de problema: {rep.ticket[0].tic_tipo}</h1>
//                         <h1 className="m-2 text-base">Correo usuario: {rep.rep_usu}</h1>
//                         <h1 className="m-2 text-base">Descripcion: {rep.rep_pro}</h1>
//                         <a href="/administrador/tk">
//                             <button className="bg-BF rounded-md p-2 m-2">
//                                 Regresar
//                             </button>
//                         </a>
//                         <ComPet id={rep.rep_id} name={userInfo.usu_name}/>
//                     </div>
//                 </div>
//                 :
//                 <NoPet />
//             }
//         </div>
//     )
// };

// export default rep;