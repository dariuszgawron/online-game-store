import React from 'react';
import {Link} from 'react-router-dom';

import './Sidenav.css';
import SidenavMenu from '../SidenavMenu/SidenavMenu';

const Sidenav = (props) => {
    return (
        <div className="sidenav" id="sidenav">
            <div className="sidenav__container">
                <div className="sidenav__content">
                    <input className="sidenav__input" placeholder="Wyszukaj produkt" />
                    <SidenavMenu />
                </div>
            </div>
        </div>
    )
}

export default Sidenav;