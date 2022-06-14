import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import Ordenar from '../components/Ordenar';
import data from '../data/data.json'

const Hombre = () => {

    const [productos, setProductos] = useState([])

    useEffect(()=> {
        setProductos(data.filter(d => d.genero === 'hombre' ).sort((a,b)=> a.relevancia - b.relevancia))
    }, [])

    return (
        <main className='main'>
            <div className='page-container'>
                <h2>Hombre</h2>
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

export default Hombre;