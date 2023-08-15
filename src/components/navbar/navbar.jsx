import React, { useEffect, useState } from 'react'
import './style.css'
import { NavLink } from 'react-router-dom'
import logo from './assets/logo.png'

const Navbar = ({ scrollTop }) => {
    return (
        <div className='Navbar' style={{ opacity: scrollTop == 0 ? '100%' : '50%' }}>
            <img src={logo} alt="Logo" className='logo' />
            <ul className='navBarHidden'>
                <NavLink to={'/'} className='navbar__links' >INICIO</NavLink>
                <NavLink to={'/about'} className='navbar__links' >SOBRE MI</NavLink>
                <NavLink to={'/works'} className='navbar__links' >PROYECTOS</NavLink>
                <NavLink to={'/contact'} className='navbar__links' >CONTACTO</NavLink>
            </ul>
        </div>
    )
}

export default Navbar