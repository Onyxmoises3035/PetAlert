'use client'
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    {
        field: 'id',
        headerName: 'ID',
        renderCell: (params) => (
            <a href={`/administrador/rp/${params.id}`}>
                <button className='bg-BF w-full h-full rounded-md'>
                    {params.id}
                </button>
            </a>
        )
    },
    {
        field: 'rep_usu',
        headerName: 'Correo',
    },
    {
        field: 'rep_pro',
        headerName: 'Descripción',
    },
    {
        field: 'rep_fec',
        headerName: 'Fecha',
    },
    {
        field: 'rep_hor',
        headerName: 'Hora',
    },
    {
        field: 'rep_sta',
        headerName: 'Estado',
        renderCell: (params) => (
            prio(params.value)
        )
    },
];

const prio = (value) => {
    return(
        <div className='flex justify-center items-center text-center'>
            {value == 'Completado' && <div className='bg-VR rounded-lg size-full'>{value}</div>}
            {value == 'En proceso' && <div className='bg-AM rounded-lg size-full'>{value}</div>}
            {value == 'En espera' && <div className='bg-GR rounded-lg size-full'>{value}</div>}
        </div>
    )
}

const TabPet = ({ rows }) => {

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

export default TabPet; 