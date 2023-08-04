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
                        <h1>CREATIVE DESIGNER & DEVELOPER.</h1>
                        <h2>Versatile creative: fusing design and development. Innovative solutions for digital experiences. Crafting engaging visuals with seamless functionality.</h2>
                        <Btn link={'/works'} text={'SEE MY WORKS'} />
                    </div>
                    <div className='home__img'>
                        <img src={homeImg} alt="Home-Image" />
                        <h1 className='X'>X</h1>
                    </div>
                </div>
                <div className='home__links'>
                    <a href='https://www.dribble.com' target='__blank'>Dribble</a>
                    <span>/</span>
                    <a href='https://www.behance.com' target='__blank'>Behance</a>
                    <span>/</span>
                    <a href='https://www.github.com' target='__blank'>Github</a>
                </div>
            </div>
            <h1 className='scrollDown'>SCROLL DOWN {'->'}</h1>
        </div>
    )
}

export default HomeSection1