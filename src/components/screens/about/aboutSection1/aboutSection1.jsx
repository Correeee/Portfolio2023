import React from 'react'
import './style.css'
import developer from '../assets/developer.png'


const AboutSection1 = () => {

    
    return (
        <div className='AboutSection1'>
            <h1 className='AboutSection1__title'>Soy un apasionado desarrollador front-end en búsqueda de superarse diariamente.</h1>
            <div className='AboutSection1__img'>
                <img src={developer} alt="Photo" />
                <h2 className='AboutSection1__description'>Desarrollador altamente calificado con pasión por crear experiencias digitales perfectas. Competente en programación orientada a objetos. Experto en la creación de interfaces intuitivas que elevan el compromiso y la satisfacción del usuario.</h2>
            </div>
        </div>
    )
}

export default AboutSection1