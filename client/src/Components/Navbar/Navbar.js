import React from 'react';
import {Link} from 'react-router-dom';

import './Navbar.css';
import Menu from '../Menu/Menu';
import MiniCart from '../MiniCart/MiniCart';

const Navbar = (props) => {
    return (
        <nav className="navbar navbar--light">
            <div className="navbar__container">
                <div className="navbar__content">
                    <Menu />
                    <Link className="navbar__link" to="/cart">
                        <MiniCart cartItems={props.cartItems} />
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;