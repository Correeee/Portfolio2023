import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

const Btn = ({ link, text, color, onClick}) => {
    return (
        <div className='btn__div'>
            <div className='btn__circle'></div>
            <Link to={link} className='Btn' style={{color: color}} onClick={onClick}>
                {text}
            </Link>
        </div>

    )
}

export default Btn