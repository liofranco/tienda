import React, { useCallback, useEffect, useState } from 'react';
import style from '../styles/header.module.css';
import { Link, useLocation } from 'react-router-dom';

const MenuMobile = ({active, setMenuMobile}) => {

    const { pathname } = useLocation();
    const [showMarcas, setShowMarcas] = useState(false)

    const setMenuFalse = useCallback(()=>{
        setMenuMobile(false)
    }, [setMenuMobile])

    useEffect(()=>{
        setMenuFalse()
        setShowMarcas(false)
    }, [pathname, setMenuFalse])

    return (
        <aside className={`${active ? style.active : ''} ${style.menu_mobile_container}` }>
            <img onClick={()=>setMenuMobile(false)} className={style.btn_close} 
                 src='https://icongr.am/material/close-thick.svg?size=30&color=333333' alt='' width={30} height={30} />
            <ul>
                <li onClick={()=>setShowMarcas(!showMarcas)}>
                    Marcas
                </li>
                {showMarcas && (
                    <ul className={style.marcas_mobile}>
                        <li><Link to='/marca/adidas'>adidas</Link></li>
                        <li><Link to='/marca/Nike'>Nike</Link></li>
                        <li><Link to='/marca/Puma'>Puma</Link></li>
                        <li><Link to='/marca/all'>Todas las marcas</Link></li>
                    </ul>
                )}
                <li>
                    <Link to="/hombre">Hombre</Link>
                </li>
                <li>
                    <Link to="/mujer">Mujer</Link>
                </li>
                <li>
                    <Link to="/ofertas">Ofertas</Link>
                </li>
                <li>
                    <Link to="/carrito">Carrito</Link>
                </li>
            </ul>
        </aside>
    );
};

export default MenuMobile;