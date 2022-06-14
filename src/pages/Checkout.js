import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CarritoContext } from '../context/CarritoContext';
import style from '../styles/checkout.module.css';

const Checkout = () => {

    const {checkout} = useContext(CarritoContext)
    const navigate = useNavigate()

    useEffect(()=>{
        if(!checkout) navigate('/')
        // eslint-disable-next-line
    }, [])

    return (
        <main className='main'>
            <section className={style.container}>
                <img src='https://icongr.am/material/check-circle.svg?size=100&color=00a650' />
                <p>Pago confirmado</p>
                <h2>Gracias por tu compra</h2>
                <Link className='btn-black' to='/'>Volver a inicio</Link>
            </section>
        </main>
    );
};

export default Checkout;