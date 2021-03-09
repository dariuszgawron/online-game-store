import React from 'react';
import {Link} from 'react-router-dom';

import './SidenavMenu.css';

const SidenavMenu = (props) => {
    const linkOnClick = (e) => {
        let hamburger = document.getElementById('hamburgerIcon');
        hamburger.classList.toggle('active');
        let sidenav = document.getElementById('sidenav');
        sidenav.classList.toggle('sidenav--visible');
    }
    return (
        <ul className="sidenavMenu">
            <li className="sidenavMenu__item">
                <Link className="sidenavMenu__link" to="/products?order=popularnosc-desc" onClick={linkOnClick}>
                    Bestsellery
                </Link>
            </li>
            <hr className="sidenavMenu__line"/>
            <li className="sidenavMenu__item">
                <Link className="sidenavMenu__link" to="/products" onClick={linkOnClick}>
                    Promocje
                </Link>
            </li>
            <hr className="sidenavMenu__line"/>
            <li className="sidenavMenu__item">
                <Link className="sidenavMenu__link" to="/products?category=nowosci&order=data-desc" onClick={linkOnClick}>
                    Nowości
                </Link>
            </li>
            <hr className="sidenavMenu__line"/>
            <li className="sidenavMenu__item">
                <Link className="sidenavMenu__link" to="/products" onClick={linkOnClick}>
                    Preordery
                </Link>
            </li>
            <hr className="sidenavMenu__line"/>
            <li className="sidenavMenu__item">
                <Link className="sidenavMenu__link" to="/products?category=dodatki" onClick={linkOnClick}>
                    Dodatki
                </Link>
            </li>
            <hr className="sidenavMenu__line"/>
            <li className="sidenavMenu__item">
                <Link className="sidenavMenu__link" to="/products" onClick={linkOnClick}>
                    Wszystkie gry
                </Link>
            </li>
        </ul>
    )
}

export default SidenavMenu;