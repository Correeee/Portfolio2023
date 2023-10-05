import React from 'react'
import './style.css'
import { motion } from 'framer-motion'


const AboutSection4 = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{
                delay: 0.5,
            }}
            className='AboutSection4'>
            <h1>Mis Skills.</h1>
            {/* <div className='aboutSection4__tools'>
                <h2>Softwares / Tools</h2>
                <ul>
                    <li>Figma</li>
                    <li>Adobe Photoshop</li>
                    <li>Adobe Illustrator</li>
                    <li>Adobe inDesign</li>
                    <li>Adobe XD</li>
                    <li>Adobe After Effects</li>
                </ul>
            </div> */}
            <div className='aboutSection4__web'>
                <h2>Web Development</h2>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>ReactJS</li>
                    <li>Firebase</li>
                    <li>MongoDB</li>
                    <li>Express</li>
                    <li>NodeJS</li>
                </ul>
            </div>
        </motion.div>
    )
}

export default AboutSection4