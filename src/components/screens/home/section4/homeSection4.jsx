import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'


const HomeSection4 = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{
                delay: 0.5,
            }}
            className='HomeSection4'>
            <div className='homeSection4__texts'>
                <h2>AQUI HAY MAS</h2>
                <Link to={'/works'} className='homesection4__link'>VER TODOS LOS PROYECTOS {'->'}</Link>
            </div>
        </motion.div>
    )
}

export default HomeSection4