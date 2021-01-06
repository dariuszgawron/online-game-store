import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
// todo
// 1. component dla search
// 2. component dla basketa
// 3. konto warunek w zależności od zmiennej stanu albo okno logowania albo opcje

import Cart from '../Cart/Cart';

const hamburgerOnClick = (e) => {
    e.currentTarget.classList.toggle('active');
}

const Navbar = (props) => {
    return (
        <nav className="navbar">
            <div className="navbar__top navbar__top--dark">
                <div className="navbar__container">
                    <div className="navbar__hamburger" onClick={hamburgerOnClick}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="navbar__logo">Logo</div>
                    <div className="navbar__basket">\_/</div>
                    <div className="search">
                        <input type="text" className="search__input"/> Search
                    </div>
                    <div className="navbar__account">Konto <i className="far fa-user-circle"></i></div>
                </div>
            </div>
            <div className="navbar__bottom navbar__bottom--light">
                <div className="navbar__container">
                    <ul className="menu">
                        <li className="menu__item">
                            <Link className="menu__link" to="/">Bestsellery</Link>
                            {/* <NavLink exact activeClassName="menu__link--active" className="menu__link" to="/">Bestsellery</NavLink> */}
                        </li>
                        <li className="menu__item">
                            <Link className="menu__link" to="/about">Promocje</Link>
                        </li>
                        <li className="menu__item">
                            <Link className="menu__link" to="/about">Nowości</Link>
                        </li>
                        <li className="menu__item">
                            <Link className="menu__link" to="/about">Preordery</Link>
                        </li>
                        <li className="menu__item">
                            <Link className="menu__link" to="/about">Dodatki</Link>
                        </li>
                        <li className="menu__item">
                            <Link className="menu__link" to="/login">Wszystkie gry</Link>
                        </li>
                    </ul>
                    {/* <div className="menu__basket">
                        <i className="fas fa-shopping-basket"></i><span> 12,99zł ({JSON.parse(localStorage.getItem('CartItems'))!==null ? JSON.parse(localStorage.getItem('CartItems')) : 0})</span> 
                    </div> */}
                    <Cart cartQuantity={props.cartQuantity} cartValue={props.cartValue}/>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;