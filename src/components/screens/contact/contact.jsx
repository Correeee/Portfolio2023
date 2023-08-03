import React, { useState } from 'react'
import './style.css'
import Btn from '../../btn/btn'
import { motion } from 'framer-motion'


const Contact = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const handlerSubmit = (e) => {
        e.preventDefault()
        console.log(name, email, subject, message)
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
                delay: 0.2
            }}
            className='Contact'>
            <div className='Contact__container'>
                <h1>Get in touch.</h1>
                <h2>Feel free to reach out to me anytime. Contact me.</h2>
                <form action="" id='contactForm' onSubmit={(e) => e.preventDefault()}>
                    <input type="text" placeholder='Name' onChange={(e) => setName(e.target.value)} />
                    <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                    <input type="text" placeholder='Subject' onChange={(e) => setSubject(e.target.value)} />
                    <textarea rows="4" cols="10" placeholder='Message' onChange={(e) => setMessage(e.target.value)} />
                </form>
            </div>
            <Btn text={'SEND MESSAGE'} onClick={handlerSubmit} />
        </motion.div>
    )
}

export default Contact