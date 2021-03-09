import React from 'react';

import './Header.css';
import HeaderTop from '../HeaderTop/HeaderTop';
import Navbar from '../Navbar/Navbar';
import Sidenav from '../Sidenav/Sidenav';

const Header = (props) => {
    return (
        <header className="header">
            <HeaderTop cartItems={props.cartItems} />
            <Navbar cartItems={props.cartItems} />
            <Sidenav />
        </header>
    )
}

export default Header;