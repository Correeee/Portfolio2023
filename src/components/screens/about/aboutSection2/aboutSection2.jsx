import React from 'react'
import './style.css'
import { motion } from 'framer-motion'

const AboutSection2 = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{
                delay: 0.5,
            }}
            className='AboutSection2'>
            <div className='AboutSection2__texts'>
                <h2>DEVELOPER</h2>
                <h2>INTERFACE DESIGN</h2>
                <h2>UX/UI</h2>
                <h2>ART DIRECTION</h2>
                <h2>USER RESEARCH</h2>
            </div>
        </motion.div>
    )
}

export default AboutSection2