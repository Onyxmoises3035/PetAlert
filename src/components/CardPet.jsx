'use client'
import React, { useState } from 'react'
import { Button, Menu, ImageListItem } from '@mui/material';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const CardPet = ({ pet, user, key }) => {

  const router = useRouter()

  const del = async (e) => {
    await axios.delete(`/api/pets/${e.target.id}`);
    router.refresh();
  }

  const est = async (e) => {
    if (e.target.alt === 'false') {
      await axios.put(`/api/pets/${e.target.id}`, { per: false })
      handleClose();
      router.refresh();
    }
    if (e.target.alt === 'true') {
      await axios.put(`/api/pets/${e.target.id}`, { per: true })
      handleClose();
      router.refresh();
    }
  }

  const inf = (e) => {
    router.push(`/info/${e.target.id}`);
  }

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Menu id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}>
        <div className='flex justify-between h-full px-2'>
          <Button className='hover:bg-RJ' onClick={del} id={pet.mac_id}>
            <img id={pet.mac_id} className='size-10' src="/del.svg" alt="del" />
          </Button>
          {pet.mas_estatus ?
            <img className='size-10 m-2' id={pet.mac_id} onClick={est} src="/lost.svg" alt='false' />
            :
            <img className='size-10 m-2' id={pet.mac_id} onClick={est} src="/nLost.svg" alt='true' />
          }
        </div>
      </Menu>

      <ImageListItem key={key}>

        <img className='rounded-2xl' id={pet.mac_id} src={pet.mas_imgFron} alt="foto" />


        <div id={pet.mac_id} onClick={inf} className='group cursor-pointer absolute z-10 top-0 right-0 size-full bg-NG rounded-2xl bg-opacity-50 lg:bg-opacity-0 hover:bg-opacity-50 transition duration-500'>
          <div className='absolute top-0 left-0 p-5 text-lg text-BL lg:text-NG group-hover:text-BL text-left text-opacity-100 lg:text-opacity-0 transition duration-500'>
            <h1 className='text-2xl text-opacity-100 lg:text-opacity-0 group-hover:text-opacity-75 transition duration-500'>
              Hola soy:
            </h1>
            <h1 className='text-4xl text-BL lg:text-NG group-hover:text-BL text-opacity-100 lg:text-opacity-0 group-hover:text-opacity-100 transition duration-500'>
              {pet.mas_nombre}
            </h1>
          </div>
        </div>

        {user &&
          <Button id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            className='size-fit rounded-full absolute top-0 right-0 p-5 z-20'>
            <img className="size-6" src="/menu.svg" alt="avatar" />
          </Button>
        }

      </ImageListItem>
    </>
  );
}

export default CardPet;