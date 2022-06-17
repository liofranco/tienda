import React, { useContext } from 'react';
import { CarritoContext } from '../context/CarritoContext';
import style from '../styles/carrito.module.css';

const ModalDelete = ({setModalDelete, productDelete}) => {

    const {carrito, setCarrito} = useContext(CarritoContext)
    const handleModal = e => e.target === e.currentTarget && setModalDelete(false)

    const deleteP = id => {
        let carritoActual = [...carrito]
        let actualizarCarrito = carritoActual.filter(producto => producto.idCarrito !== id)
        setCarrito(actualizarCarrito)
        localStorage.setItem('carrito', JSON.stringify(actualizarCarrito))
        setModalDelete(false)
    }

    return (
        <div onClick={(e)=> handleModal(e)} className={style.modal_container}>
            <div className={style.modal}>
                <h4>¿Estás seguro de eliminar este producto?</h4>
                <div className={style.modal_buttons}>
                    <button onClick={()=>deleteP(productDelete)} className='btn-black' to='/carrito'>Eliminar</button>
                    <button type='button' onClick={()=> setModalDelete(false)} className='btn-white'>Cancelar</button>
                </div>
            </div>
        </div>
    );
};

export default ModalDelete;