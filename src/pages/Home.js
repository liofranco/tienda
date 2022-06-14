import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel';
import CardsHome from '../components/CardsHome';
import PublicidadMarcas from '../components/PublicidadMarcas';
import data from '../data/data.json'

const Home = () => {

    const [destacados, setDestacados] = useState([])
    const [ofertas, setOfertas] = useState([])

    useEffect(()=> {
        setDestacados(data.filter(d => d.destacado === true).slice(0,4))
        setOfertas(data.filter(d => d.descuento > 0).slice(0,4))
    }, [])

    return (
        <main className="main">
            <div className="banner-envios flex-center">
                <img src='/img/delivery.png' alt=''/>
                <h3>Envio gratis en compras superiores a $15000</h3>
            </div>
            <Carousel />
            <PublicidadMarcas />
            <CardsHome productos={destacados} section={'Productos destacados'} />
            <CardsHome productos={ofertas} section={'Ofertas'} />
            <Link className='banner-puma' to='/marca/Puma'>
                <img src='/img/puma2.jpg' alt='' />
            </Link>
        </main>
    );
};

export default Home;