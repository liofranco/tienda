import React from 'react';
import { Link } from 'react-router-dom';
import style from '../styles/carrito.module.css';

const Modal = ({setModal}) => {

    const handleModal = e => e.target === e.currentTarget && setModal(false)

    return (
        <div onClick={(e)=> handleModal(e)} className={style.modal_container}>
            <div className={style.modal}>
                <img src='https://icongr.am/material/check-circle.svg?size=100&color=00a650' />
                <p>Producto agregado al carrito</p>
                <div className={style.modal_buttons}>
                    <Link className='btn-black' to='/carrito'>Ver carrito</Link>
                    <button type='button' onClick={()=> setModal(false)} className='btn-white'>Seguir comprando</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;