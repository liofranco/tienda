import React from 'react';
import style from '../styles/cardsHome.module.css'
import Card from './Card';
import Carousel from 'react-elastic-carousel'

const CardsHome = ({productos, section}) => {

    const breakpoints = [
        { width: 420, itemsToShow: 2, itemsToScroll: 2},
        { width: 640, itemsToShow: 3},
        { width: 1080, itemsToShow: 4, pagination: false}
      ]

    return (
        <section className={style.container}>
            <div className={style.section_title}>
                <h3>{section}</h3>
            </div>
            <Carousel breakPoints={breakpoints} className={style.cards_container} itemsToShow={4}>
                {productos.map(producto => <Card producto={producto} key={producto.id} /> )}
            </Carousel>
        </section>
    );
};

export default CardsHome;