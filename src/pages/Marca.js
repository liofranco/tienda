import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../components/Card';
import Ordenar from '../components/Ordenar';
import data from '../data/data.json'

const Marca = () => {

    const {marcaId} = useParams()
    const [productos, setProductos] = useState([])

    useEffect(()=> {
        if(marcaId === 'all'){
            setProductos(data.sort((a,b)=> a.relevancia - b.relevancia))
        } else{
            setProductos(data.filter(d => d.marca.toLowerCase() === marcaId.toLowerCase()).sort((a,b)=> a.relevancia - b.relevancia))
        }
    }, [marcaId])

    return (
        <main className='main'>
            <div className='page-container'>
                <h2>{marcaId === 'all' ? 'Todos los productos' : marcaId}</h2>
                <section className='resultados-container'>
                    <p>{productos.length} resultados</p>
                    <Ordenar productos={productos} setProductos={setProductos} />
                    <div className='cards-container'>
                        {productos.map(producto => <Card producto={producto} key={producto.id} />)}
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Marca;