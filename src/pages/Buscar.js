import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Card from '../components/Card';
import Ordenar from '../components/Ordenar';
import data from '../data/data.json'

const Buscar = () => {

    const [query] = useSearchParams()
    const [productos, setProductos] = useState([])

    useEffect(()=> {
        let q = query.get('q')
        setProductos(data.filter(d => d.nombre.toLowerCase().includes(q.toLowerCase())).sort((a,b)=> a.relevancia - b.relevancia))
    }, [query])

    return (
        <main className='main'>
            <div className='page-container'>
                <h2>Resultados de: '{query.get('q')}'</h2>
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

export default Buscar;