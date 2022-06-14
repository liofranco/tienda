import React, { useContext, useEffect, useState } from 'react';
import CarritoVacio from '../components/CarritoVacio';
import { CarritoContext } from '../context/CarritoContext';
import style from '../styles/carrito.module.css';
import { useNavigate } from 'react-router-dom';
import ModalDelete from '../components/ModalDelete';

const Carrito = () => {

    const {carrito, setCarrito, setCheckout} = useContext(CarritoContext)
    const [subtotal, setSubtotal] = useState(0)
    const [total, setTotal] = useState(0)
    const [envio, setEnvio] = useState(300)
    const [modalDelete, setModalDelete] = useState(false)
    const [productDelete, setProductDelete] = useState('')

    const navigate = useNavigate()

    useEffect(()=>{
        if(carrito.length > 0){
            const sub = (carrito.reduce((acc, producto) => {
                let precioFinal = producto.precio - producto.descuento
                return acc + (precioFinal*producto.cantidad)
            }, 0))
            let calcularEnvio
            if(sub > 15000){
                calcularEnvio = 0
            } else calcularEnvio = 300
            setEnvio(calcularEnvio)
            setTotal((sub+calcularEnvio).toLocaleString('es-ar', {style: 'currency', currency: 'ARS'}))
            setSubtotal(sub.toLocaleString('es-ar', {style: 'currency', currency: 'ARS'}))
        }
    }, [carrito])

    const deleteProduct = id => {
        setModalDelete(true)
        setProductDelete(id)
    }

    const add = id => {
        let carritoActual = [...carrito]
        let actualizarCarrito = carritoActual.map(producto => {
            if(producto.idCarrito === id) producto.cantidad++
            return producto
        })
        setCarrito(actualizarCarrito)
        localStorage.setItem('carrito', JSON.stringify(actualizarCarrito))
    }

    const decrease = id => {
        let carritoActual = [...carrito]
        let actualizarCarrito = carritoActual.map(producto => {
            if(producto.idCarrito === id && producto.cantidad > 1) producto.cantidad--
            return producto
        }).filter(producto => producto.cantidad > 0)
        setCarrito(actualizarCarrito)
        localStorage.setItem('carrito', JSON.stringify(actualizarCarrito))
    }

    const handleCheckout = () => {
        setCheckout(true)
        navigate('/checkout')
        setCarrito([])
        localStorage.setItem('carrito', JSON.stringify([]))
    }

    return (
        <main className='main'>
            <div className='page-container'>
                <h2>Carrito</h2>
                {carrito.length < 1 ? <CarritoVacio /> : (
                    <section className={style.container}>
                            <div className={style.lista}>
                                {carrito.map(producto => {
                                    const {precio, descuento, cantidad} = producto
                                    let precioFinal = (precio-descuento).toLocaleString('es-ar', {style: 'currency', currency: 'ARS'})
                                    let precioTotal = ((precio-descuento)*cantidad).toLocaleString('es-ar', {style: 'currency', currency: 'ARS'})
                                    return(
                                        <div className={style.product_container} key={producto.idCarrito}>
                                            <div className={style.producto}>
                                                <img src={producto.imagen} alt='' width={120} height={120}/>
                                                <div className={style.producto_detalles}>
                                                    <h4>{producto.nombre}</h4>
                                                    <p>Talle: {producto.talle}</p>
                                                    <p>{precioFinal}</p>
                                                </div>
                                                <div className={style.cantidad}>
                                                    <button onClick={()=> decrease(producto.idCarrito)} className="disminuir-cantidad">-</button>
                                                    <p>{cantidad}</p>
                                                    <button onClick={()=> add(producto.idCarrito)} className="aumentar-cantidad">+</button>
                                                </div>
                                                <div className={style.producto_total}>
                                                    <p>Total</p>
                                                    <p>{precioTotal}</p>
                                                </div>
                                                <div className={style.delete}>
                                                    <img onClick={()=> deleteProduct(producto.idCarrito)} src='https://icongr.am/material/delete-forever.svg?size=30&color=333333' alt="" />
                                                </div>
                                            </div>
                                            <button onClick={()=> deleteProduct(producto.idCarrito)} className={`${style.delete_mobile} btn-black`}>
                                                Eliminar
                                                <img src='https://icongr.am/material/delete-forever.svg?size=20&color=ffffff' alt="" />    
                                            </button>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className={style.resumen}>
                                <h3>Resumen de compra</h3>
                                <p>Subtotal: {subtotal}</p>
                                <p>Envio: {envio > 0 ? envio.toLocaleString('es-ar', {style: 'currency', currency: 'ARS'}) : 
                                    <span className={style.envio_gratis}>Gratis!</span> }</p>
                                <h4>Total: {total}</h4>
                                <button type='button' onClick={handleCheckout} className='btn-black'>Comprar</button>
                            </div>
                    </section>
                )}
            </div>
            {modalDelete && 
                <ModalDelete
                    setModalDelete={setModalDelete}
                    productDelete={productDelete}
                />}
        </main>
    );
};

export default Carrito;