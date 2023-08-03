import React from 'react'
import './style.css'
import { motion } from 'framer-motion'

const AboutSection3 = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{
                delay: 0.5,
            }}
            className='AboutSection3'>
            <h1>How I work.</h1>
            <div className='AboutSection3__texts'>
                <h2>As a developer and UX/UI designer, I specialize in creating seamless digital experiences that blend technical expertise with user-centric design principles. I collaborate with cross-functional teams to understand project requirements, implement scalable solutions, and optimize performance. My continuous learning approach allows me to adapt to dynamic project demands and deliver cutting-edge solutions.</h2>
                <h2>In my role as a UX/UI developer, I conduct in-depth user research, visualize user journeys, and design intuitive interfaces that resonate with the target audience. I conduct usability testing to validate design decisions, ensuring a seamless flow and engaging interactions while maintaining accessibility and responsiveness.</h2>
                <h2>I believe in the power of iterative design and effective communication, advocating for user-centered principles and delivering innovative solutions. My passion for technology and user experience drives me to embrace challenges and positively impact users and businesses alike.</h2>
            </div>
        </motion.div>
    )
}

export default AboutSection3