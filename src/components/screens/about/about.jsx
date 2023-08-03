import React from 'react'
import './style.css'
import AboutSection1 from './aboutSection1/aboutSection1'
import AboutSection2 from './aboutSection2/aboutSection2'
import AboutSection3 from './aboutSection3/aboutSection3'
import AboutSection4 from './aboutSection4/aboutSection4'
import { motion } from 'framer-motion'


const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
                delay: 0.2
            }}
            className='About'>
            <AboutSection1 />
            <AboutSection2 />
            <AboutSection3 />
            <AboutSection4 />
        </motion.div>
    )
}

export default About