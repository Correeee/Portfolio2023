import React from 'react'
import './style.css'
import { motion } from 'framer-motion'


const Works = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
                delay: 0.2
            }}
            className='Works'>

        </motion.div>
    )
}

export default Works