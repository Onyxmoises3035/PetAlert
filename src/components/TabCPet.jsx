'use client'
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    {
        field: 'id',
        headerName: 'ID',
        // renderCell: (params) => (
        //     <a href={`/administrador/rp/${params.id}`}>
        //         <button className='bg-BF w-full h-full rounded-md'>
        //             {params.id}
        //         </button>
        //     </a>
        // )
    },
    {
        field: 'usu_adm',
        headerName: 'Tipo de Usuario',
    },
    {
        field: 'usu_name',
        headerName: 'Nombre',
    },
    {
        field: 'usu_email',
        headerName: 'Correo',
    },
    {
        field: 'usu_password',
        headerName: 'Contraseña',
    },
    {
        field: 'usu_telefono',
        headerName: 'Telefono 1',
    },
    {
        field: 'usu_telrepuesto',
        headerName: 'Telefono 2',
    },
];

const TabCPet = ({ rows }) => {

    return (
        <DataGrid
            disableRowSelectionOnClick
            disableColumnMenu
            disableColumnResize
            columns={columns}
            rows={rows}
        />
    )
}

export default TabCPet;