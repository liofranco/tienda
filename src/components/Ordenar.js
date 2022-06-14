import React from 'react';

const Ordenar = ({productos, setProductos}) => {

    const ordenar = e => {
        let ordenarProductos = [...productos]
        if(e.target.value === '0'){
            ordenarProductos.sort((a,b) => a.relevancia - b.relevancia)
        } else if(e.target.value === '1'){
            ordenarProductos.sort((a,b) => (a.precio - a.descuento) - (b.precio - b.descuento))
        } else if(e.target.value === '2'){
            ordenarProductos.sort((a,b) => (b.precio - b.descuento) - (a.precio - a.descuento))
        }
        setProductos(ordenarProductos)
    }

    return (
        <div className='ordenar'>
            <p>Ordenar por:</p>
            <select className='select-ordenar' onChange={e=> ordenar(e)}>
                <option value={0}>Destacados</option>
                <option value={1}>Menor precio</option>
                <option value={2}>Mayor precio</option>
            </select>
        </div>
    );
};

export default Ordenar;