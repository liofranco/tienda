import React from 'react';
import { Link } from 'react-router-dom';
import style from '../styles/publicidad.module.css'

const PublicidadMarcas = () => {
    return (
        <section className={style.container}>
            <div className={style.img}>
                <Link to='/search?q=nike%20air%20force%201%20shadow'>
                    <img src='/img/nike2.jpg' alt='' />
                </Link>
            </div>
            <div className={style.img}>
                <Link to='/search?q=forum'>
                    <img src='/img/adidas2.jpg' alt='' />
                </Link>
            </div>
        </section>
    );
};

export default PublicidadMarcas;