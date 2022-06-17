import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CarritoContext } from '../context/CarritoContext';
import style from '../styles/header.module.css';
import MenuMobile from './MenuMobile';

const Header = () => {

    const navigate = useNavigate()
    const {carrito} = useContext(CarritoContext)

    const [busqueda, setBusqueda] = useState('')
    const [displayMenu, setDisplayMenu] = useState(false)
    const [menuMobile, setMenuMobile] = useState(false)

    const mostrarMenu = () => setDisplayMenu(true)
    const ocultarMenu = () => setDisplayMenu(false)

    const handleSearch = e => {
        setBusqueda(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        if(busqueda.length > 0){
            navigate(`/search?q=${busqueda}`)
            e.target.firstChild.blur()
            setBusqueda('')
        }
    }

    return (
        <header className={style.header}>
            <nav className={style.nav}>
                <Link className={style.logo} to="/"><h1>Tienda</h1></Link>
                <div style={{display:'flex', alignItems:'center'}}>
                    <img onClick={()=>setMenuMobile(true)} className={style.btn_menu} src='https://icongr.am/material/menu.svg?size=30&color=333333' alt='' />
                    <Link className={style.logo_mobile} to="/"><h1>T</h1></Link>
                </div>
                <ul className={style.ul}>
                    <li onMouseEnter={mostrarMenu} onMouseLeave={ocultarMenu}>
                        Marcas
                    </li>
                    <li>
                        <Link to="/hombre">Hombre</Link>
                    </li>
                    <li>
                        <Link to="/mujer">Mujer</Link>
                    </li>
                    <li>
                        <Link to="/ofertas">Ofertas</Link>
                    </li>
                </ul>
                <div className={style.search_container}>
                    <form onSubmit={handleSubmit}>
                        <input onChange={handleSearch} value={busqueda} type="text" name="search" placeholder="Buscar productos..."></input>
                        <button type="submit"><img src="/img/loupe.png" alt="search-icon" width={18} height={18}/></button>
                    </form>
                    <Link className={style.cart} to="/carrito">
                        <img src="https://icongr.am/material/cart-outline.svg?size=25&color=333333" alt="cart-icon"/>
                        {carrito.length > 0 ? (
                         <p className={style.cart_number}>{carrito.length}</p>
                        ) : null}
                    </Link>
                </div>
            </nav>
            {displayMenu && (
                <ul onMouseEnter={mostrarMenu} onMouseLeave={ocultarMenu} onClick={ocultarMenu} className={style.menu_marcas}>
                    <li><Link to='/marca/adidas'>adidas</Link></li>
                    <li><Link to='/marca/Nike'>Nike</Link></li>
                    <li><Link to='/marca/Puma'>Puma</Link></li>
                    <li><Link to='/marca/all'>Todas las marcas</Link></li>
                </ul>
            )}
            <MenuMobile active={menuMobile} setMenuMobile={setMenuMobile} />
        </header>
    );
};

export default Header;