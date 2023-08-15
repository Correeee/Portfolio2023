import React from 'react'
import './style.css'
import { motion } from 'framer-motion'

const HomeSection2 = () => {
    
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{
                delay: 0.5,
            }}
            className='HomeSection2'>
            <div className='homeSection2__title'>
                <h1>Creado con amor. </h1>
                <div className='line'></div>
            </div>
            <h2>Una selección de mis trabajos más recientes.</h2>
        </motion.div>
    )
}

export default HomeSection2