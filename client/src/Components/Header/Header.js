import React from 'react';
// import {Link} from 'react-router-dom';

import './Header.css';
import HeaderTop from '../HeaderTop/HeaderTop';
import Navbar from '../Navbar/Navbar';

const Header = (props) => {
    return (
        <header className="header">
            <HeaderTop cartItems={props.cartItems} />
            <Navbar cartItems={props.cartItems} />
        </header>
    )
}

export default Header;