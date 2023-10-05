import React, { useEffect, useState } from 'react'
import './style.css'
import logo from '../../navbar/assets/logo.png'

export const TIME_LOADING_SECONDS = 2
const WIDTH_LOADER = TIME_LOADING_SECONDS * 10
const TIME_CLEAR = TIME_LOADING_SECONDS * 1000

const Loader = () => {

    const [widthLoader, setWidthLoader] = useState(0)

    useEffect(() => {
        const widthInterval = setInterval(() => {
            const newCount = widthLoader + 1;
            setWidthLoader(newCount);
        }, WIDTH_LOADER);

        setTimeout(() => {
            clearInterval(widthInterval);
        }, TIME_CLEAR);

        return () => {
            clearInterval(widthInterval);
        }
    }, [widthLoader]);


    return (
        <div className='Loader'>
            <img src={logo} alt="Logo" />
            <div className='loader__container'>
                <div className="loader__bar" style={{ width: `${widthLoader}%` }}></div>
            </div>
        </div>
    )
}

export default Loader