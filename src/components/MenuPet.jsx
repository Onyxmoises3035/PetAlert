"use client"
import React, { useState } from "react"
import { Button, Menu, MenuItem, Typography } from "@mui/material"
import { signOut } from "next-auth/react"

const MenuPet = ({ userInfo }) => {

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
            <Button id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                className='size-fit rounded-full'>
                <img className="w-16 h-16" src="/avatar.svg" alt="avatar" />
            </Button>
            <Menu id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}>
                <div className="p-4 pb-2">
                    <p>{userInfo?.usu_name}</p>
                    <p className="pb-3 text-sm opacity-80">{userInfo?.usu_email}</p>
                    <hr />
                </div>
                <MenuItem className="sm:flex lg:hidden" onClick={handleClose}><a href="/">Mascotas</a></MenuItem>
                <MenuItem className="sm:flex lg:hidden" onClick={handleClose}><a href="/myPets">Mis Mascotas</a></MenuItem>
                {(userInfo?.usu_adm == 2) &&
                    <MenuItem onClick={handleClose}><a href="/administrador/rp">Reportes de error</a></MenuItem>
                }
                {(userInfo?.usu_adm == 2) &&
                    <MenuItem onClick={handleClose}><a href="/administrador/ct">Control de usuarios</a></MenuItem>
                }
                {(userInfo?.usu_adm == 3) &&
                    <MenuItem onClick={handleClose}><a href="/administrador/tk">Reportes</a></MenuItem>
                }
                {(userInfo?.usu_adm != 2) &&
                    <MenuItem className="sm:flex lg:hidden" onClick={handleClose}><a href="/nosostros">Nosotros</a></MenuItem>
                }
                {(userInfo?.usu_adm != 2) &&
                    <MenuItem className="sm:flex lg:hidden" onClick={handleClose}><a href="/ayuda">Ayuda</a></MenuItem>
                }
                <MenuItem onClick={handleClose}><a onClick={() => signOut()}>Cerrar Sesion</a></MenuItem>
            </Menu>
        </>
    )
}

export default MenuPet