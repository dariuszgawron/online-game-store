import React from 'react';
import {Link} from 'react-router-dom';

import './SidenavMenu.css';

const SidenavMenu = (props) => {
    return (
        <ul className="sidenavMenu">
            <li className="sidenavMenu__item">
                <Link className="sidenavMenu__link">Bestsellery</Link>
            </li>
            <hr className="sidenavMenu__line"/>
            <li className="sidenavMenu__item">
                <Link className="sidenavMenu__link">Promocje</Link>
            </li>
            <hr className="sidenavMenu__line"/>
            <li className="sidenavMenu__item">
                <Link className="sidenavMenu__link">Nowości</Link>
            </li>
            <hr className="sidenavMenu__line"/>
            <li className="sidenavMenu__item">
                <Link className="sidenavMenu__link">Preordery</Link>
            </li>
            <hr className="sidenavMenu__line"/>
            <li className="sidenavMenu__item">
                <Link className="sidenavMenu__link">Dodatki</Link>
            </li>
            <hr className="sidenavMenu__line"/>
            <li className="sidenavMenu__item">
                <Link className="sidenavMenu__link">Wszystkie gry</Link>
            </li>
        </ul>
    )
}

export default SidenavMenu;