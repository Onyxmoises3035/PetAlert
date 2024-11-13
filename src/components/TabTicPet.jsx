'use client'
import { DataGrid } from '@mui/x-data-grid';
import { useState } from "react";

const columns = [
    {
        field: 'id',
        headerName: 'ID',
        renderCell: (params) => (
            <a href={`/administrador/tk/${params.id}`}>
                <button className='bg-BF w-full h-full rounded-md'>
                    {params.id}
                </button>
            </a>
        )
    },
    {
        field: 'tic_tipo',
        headerName: 'Tipo',
    },
    {
        field: 'tic_fec',
        headerName: 'Fecha',
    },
    {
        field: 'tic_hor',
        headerName: 'Hora',
    },
    {
        field: 'tic_nom',
        headerName: 'Admin',
    },
    {
        field: 'tic_pri',
        headerName: 'Prioridad',
        renderCell: (params) => (
            prio(params.value)
        )
    },
];

const prio = (value) => {
    return (
        <div className='flex justify-center items-center text-center'>
            {value == 'Baja' && <div className='bg-AM rounded-lg size-full'>{value}</div>}
            {value == 'Media' && <div className='bg-NA rounded-lg size-full'>{value}</div>}
            {value == 'Alta' && <div className='bg-RJ rounded-lg size-full'>{value}</div>}
        </div>
    )
}

const TabTicPet = ({ rows }) => {

    const [sortModel, setSortModel] = useState([
        {
            field: 'tic_pri',
            sort: 'asc',
        },
    ]);

    return (
        <DataGrid
            disableRowSelectionOnClick
            disableColumnMenu
            disableColumnResize
            hideFooter
            sortModel={sortModel}
            onSortModelChange={(newSortModel) => setSortModel(newSortModel)}
            columns={columns}
            rows={rows}
        />
    )
}

export default TabTicPet;