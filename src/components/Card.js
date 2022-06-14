import React from 'react';
import { Link } from 'react-router-dom';
import style from '../styles/card.module.css'

const Card = ({producto}) => {

    const {precio, descuento} = producto

    let precioArs = precio.toLocaleString('es-ar', {style: 'currency', currency: 'ARS'})
    let precioOferta = (precio-descuento).toLocaleString('es-ar', {style: 'currency', currency: 'ARS'})

    return (
        <Link to={`/producto/${producto.id}`} className={style.container}>
            <div className={style.img_container}>
                <img src={producto.imagen} alt={producto.nombre} width={250} height={250} />
            </div>
            <h3>{producto.nombre}</h3>
            {descuento > 0 ?
                (<p className={style.oferta}><span className={style.precio_descuento}>{precioArs}</span> {precioOferta}</p>)
                 : <p className={style.precio}>{precioArs}</p>}
            {precio > 15000 ? <p className={style.envio_gratis}>Envío gratis</p> : null }
            
        </Link>
    );
};

export default Card;