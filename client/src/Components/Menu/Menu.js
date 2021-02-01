import React from 'react';
import {Link} from 'react-router-dom';

import './Menu.css';

const Menu = (props) => {
    return (
        <ul className="menu">
            <li className="menu__item">
                <Link className="menu__link" to="/products?order=popularnosc-desc">Bestsellery</Link>
                {/* <NavLink exact activeClassName="menu__link--active" className="menu__link" to="/">Bestsellery</NavLink> */}
            </li>
            <li className="menu__item">
                <Link className="menu__link" to="/about">Promocje</Link>
            </li>
            <li className="menu__item">
                <Link className="menu__link" to="/products?category=nowosci&order=data-desc">Nowości</Link>
            </li>
            <li className="menu__item">
                <Link className="menu__link" to="/login">Preordery</Link>
            </li>
            <li className="menu__item">
                <Link className="menu__link" to="/products?category=dodatki">Dodatki</Link>
            </li>
            <li className="menu__item">
                <Link className="menu__link" to="/products">Wszystkie gry</Link>
            </li>
        </ul>
    )
}

export default Menu;