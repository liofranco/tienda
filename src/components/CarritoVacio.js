import React from 'react';
import { Link } from 'react-router-dom';
import style from '../styles/carrito.module.css'

const CarritoVacio = () => {
    return (
        <section className={style.vacio_container}>
            <img src='https://icongr.am/material/cart-remove.svg?size=128&color=333333' alt='' />
            <p>Tu carrito está vacio</p>
            <Link to='/' className='btn-black'>Seguir comprando</Link>
        </section>
    );
};

export default CarritoVacio;