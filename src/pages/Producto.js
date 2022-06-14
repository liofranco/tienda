import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import CardsHome from '../components/CardsHome';
import ImagenDetalles from '../components/ImagenDetalles';
import Modal from '../components/Modal';
import data from '../data/data.json';
import style from '../styles/producto.module.css'

const Producto = () => {

    const {id} = useParams()
    const [producto, setProducto] = useState([])
    const [relacionados, setRelacionados] = useState([])
    const [modal, setModal] = useState(false)

    useEffect(()=>{
        let productoActual = data.find(d => d.id === id)
        setProducto(productoActual)
        setRelacionados(data.filter(d => d.marca === productoActual.marca && d.id !== id).slice(0,4))
    }, [id])

    return (
        <main className={style.container}>
            <nav className={style.navigation}>
                <Link to="/">Home</Link>
                <span>{`>`}</span>
                <Link to={`/marca/${producto.marca}`}>{producto.marca}</Link>
                <span>{`>`}</span>
                <p>{producto.nombre}</p>
            </nav>
            <section className={style.product}>
                <ImagenDetalles style={style} producto={producto} setModal={setModal} />
                <section className={style.descripcion}>
                    <h3>Detalles</h3>
                    <p>Marca: {producto.marca}</p>
                    <p>Genero: {producto.genero}</p>
                    <p>Origen: {producto.origen}</p>
                    <p>Descripcion: {producto.descripcion}</p>
                </section>
            </section>
            <CardsHome productos={relacionados} section={'Productos relacionados'} />
            {modal && <Modal setModal={setModal}/> }
        </main>
    );
};

export default Producto;