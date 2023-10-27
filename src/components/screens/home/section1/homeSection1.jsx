import React from 'react'
import './style.css'
import homeImg from '../assets/home.png'
import Btn from '../../../btn/btn'
import { motion } from 'framer-motion'


const HomeSection1 = () => {

    return (
        <div className='HomeSection1'>
            <motion.div
                animate={{
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 270, 270, 0],
                }}
                transition={{
                    delay: 0.5,
                    duration: 2,
                    ease: 'linear'
                }}
                className='home__circle'></motion.div>
            <div className='home__container'>
                <div className='home__central'>
                    <div className='home__texts'>
                        <h1>Maximiliano Correa</h1>
                        <h2>Desarrollador FrontEnd. Diseño web interactivo y funcional. Experiencia fluida y atractiva para usuarios.</h2>
                        <Btn link={'/works'} text={'MIS PROYECTOS'} />
                    </div>
                    <div className='home__img'>
                        <img src={homeImg} alt="Home-Image" />
                        <h1 className='X'>X</h1>
                    </div>
                </div>
                <div className='home__links'>
                    <a href='https://www.linkedin.com/in/maximiliano-correa-developer/' target='__blank'>LinkedIn</a>
                    <span>/</span>
                    <a href='https://drive.google.com/file/d/1Ok8SR_QaH4HrnWiZJ5M7zfenLW9Gey-U/view?usp=sharing' target='__blank'>CV</a>
                    <span>/</span>
                    <a href='https://github.com/Correeee?tab=repositories' target='__blank'>Github</a>
                </div>
            </div>
            <h1 className='scrollDown'>SCROLL DOWN {'->'}</h1>
        </div>
    )
}

export default HomeSection1