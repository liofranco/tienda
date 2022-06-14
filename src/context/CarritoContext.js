import React, { createContext, useState } from 'react';

export const CarritoContext = createContext()

const CarritoProvider = (props) => {

    const [carrito, setCarrito] = useState(JSON.parse(localStorage.getItem('carrito')) || [])
    const [checkout, setCheckout] = useState(false)

    return(
        <CarritoContext.Provider
            value={{
                carrito,
                setCarrito,
                checkout,
                setCheckout
            }}
        >
            {props.children}
        </CarritoContext.Provider>
    )
}

export default CarritoProvider