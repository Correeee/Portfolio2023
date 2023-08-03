import React from 'react'
import './style.css'
import developer from '../assets/developer.png'
import { motion } from 'framer-motion'


const AboutSection1 = () => {

    
    return (
        <div className='AboutSection1'>
            <h1 className='AboutSection1__title'>I am a passionate front-end developer and ux/ui designer with a keen eye for details.</h1>
            <div className='AboutSection1__img'>
                <img src={developer} alt="Photo" />
                <h2 className='AboutSection1__description'>Highly skilled developer and UX/UI designer with a passion for creating seamless digital experiences. Proficient in diverse programming languages and design tools, adept at crafting intuitive interfaces that elevate user engagement and satisfaction.</h2>
            </div>
        </div>
    )
}

export default AboutSection1