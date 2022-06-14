import React, { useContext, useEffect, useState } from 'react';
import { CarritoContext } from '../context/CarritoContext';

const ImagenDetalles = ({style, producto, setModal}) => {

    const {setCarrito} = useContext(CarritoContext)
    const [buttonDisabled, setButtonDisabled] = useState(true)

    if(producto.length < 1) return null;
    const {precio, descuento, talles} = producto;
    let id = producto.id
    let precioArs = precio.toLocaleString('es-ar', {style: 'currency', currency: 'ARS'})
    let precioOferta = (precio-descuento).toLocaleString('es-ar', {style: 'currency', currency: 'ARS'})

    const handleTalle = numero => {
        producto.talle = numero
        producto.idCarrito = `${id}-${numero}`
        setButtonDisabled(false)
    }

    const agregarAlCarrito = () => {
        let productosCarrito = JSON.parse(localStorage.getItem('carrito')) || []
        if(producto.talle > 0){
            const yaExiste = productosCarrito.some(p => p.idCarrito === producto.idCarrito)
            if(!yaExiste){
                producto.cantidad = 1
                productosCarrito = [...productosCarrito, producto]
            } else {
                productosCarrito.forEach(p => {
                    if(p.idCarrito === producto.idCarrito) p.cantidad ++
                })
            }
            localStorage.setItem('carrito', JSON.stringify(productosCarrito))
            setCarrito(productosCarrito)
            setModal(true)
        }
    }

    return (
        <section className={style.product_container}>
            <img className={style.product_img} src={producto.imagen} alt={producto.nombre}/>
            <div className={style.product_info}>
                <h2>{producto.nombre}</h2>
                {descuento > 0 ?
                (<p className={style.oferta}><span className={style.precio_descuento}>{precioArs}</span> {precioOferta}</p>)
                 : <p className={style.precio}>{precioArs}</p>}
                <div className={style.talles_container}>
                    <p>Elegí tu talle</p>
                    <form className={style.talles}>
                        {talles.map(talle =>{
                            return(
                                <div key={talle.numero} style={{margin: '10px 0'}}>
                                <input onChange={()=> handleTalle(talle.numero)} type="radio" name="talles" value={talle.numero} id={talle.numero} disabled={!talle.stock}></input>
                                <label className={`${style.label_talles} ${!talle.stock ? style.sin_stock : ''}`} htmlFor={talle.numero}>{talle.numero}</label>
                                </div>
                            )})}
                    </form>
                </div>
                <button onClick={agregarAlCarrito} className={`btn-black ${buttonDisabled ? 'disabled' : ''}`} type="button">Agregar al carrito</button>
            </div>
        </section>
    );
};

export default ImagenDetalles;