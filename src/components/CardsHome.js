import React from 'react';
import style from '../styles/cardsHome.module.css'
import Card from './Card';

const CardsHome = ({productos, section}) => {
    return (
        <section className={style.container}>
            <div className={style.section_title}>
                <h3>{section}</h3>
            </div>
            <div className={style.cards_container}>
                {productos.map(producto => <Card producto={producto} key={producto.id} />)}
            </div>
        </section>
    );
};

export default CardsHome;