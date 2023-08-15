import React, { useState } from 'react'
import './style.css'
import Btn from '../../btn/btn'
import { motion } from 'framer-motion'

const Contact = () => {

    const [name, setName] = useState('')
    // const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const [sendMail, setSendMail] = useState(false)

    const handlerSubmit = (e) => {
        e.preventDefault()
        if (name && subject && message) {
            setSendMail(true)
            const mailtoLink = `mailto:correa755@hotmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
            window.location.href = mailtoLink;
        }

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
                {
                    !sendMail ?
                        <>
                            <h1>Ponte en contacto.</h1>
                            <h2>No dude en ponerse en contacto conmigo en cualquier momento.</h2>
                            <form action="" id='contactForm' onSubmit={(e) => e.preventDefault()}>
                                <input type="text" placeholder='Nombre' onChange={(e) => setName(e.target.value)} required />
                                {/* <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} /> */}
                                <input type="text" placeholder='Motivo' onChange={(e) => setSubject(e.target.value)} required />
                                <textarea rows="4" cols="10" placeholder='Mensaje' onChange={(e) => setMessage(e.target.value)} required />
                            </form>
                        </>
                        :
                        <h1 id='sendingMessage'>Se abrirá su servicio de mensajería.</h1>
                }
            </div>
            <Btn text={'ENVIAR MENSAJE'} onClick={handlerSubmit} />
        </motion.div>
    )
}

export default Contact