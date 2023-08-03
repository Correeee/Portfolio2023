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
                <h1>Crafted with love. </h1>
                <div className='line'></div>
            </div>
            <h2>There are a selection of my recent works.</h2>
        </motion.div>
    )
}

export default HomeSection2