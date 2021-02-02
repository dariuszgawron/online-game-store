import React from 'react';
import {Link} from 'react-router-dom';

import './HeaderTop.css';
import MiniCart from '../MiniCart/MiniCart';

const HeaderTop = (props) => {
    const hamburgerOnClick = (e) => {
        e.currentTarget.classList.toggle('active');
    }

    return (
        <div className="headerTop headerTop--dark">
            <div className="headerTop__container">
                <div className="headerTop__content">
                    <div className="logo">
                        <h2 className="logo__text">
                            <Link className="logo__link" to="/">GameShop</Link>
                        </h2>
                    </div>
                    <div className="headerTop__search">
                        {/* <Search /> */}
                    </div>
                    <div className="headerTop__right">
                        <div className="userAccount">
                            <Link className="userAccount__link" to="/login">
                                <i class="userAccount__icon fas fa-user-tie"></i>
                                <span className="userAccount__text">Konto</span>
                            </Link>
                        </div>
                        <div className="headerTop__miniCart">
                            <Link className="headerTop__link" to="/cart">
                                <MiniCart cartItems={props.cartItems} />
                            </Link>
                        </div>
                        <div className="search">
                            <i class="search__icon fas fa-search"></i>
                        </div>
                        <div className="headerTop__hamburger" onClick={hamburgerOnClick}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderTop;