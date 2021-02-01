import React from 'react';
// import {Link} from 'react-router-dom';

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
                    <div className="headerTop__hamburger" onClick={hamburgerOnClick}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="headerTop__logo">
                        <h2>GameShop</h2>
                    </div>
                    <div className="headerTop__miniCart">
                        <MiniCart cartItems={props.cartItems}/>
                    </div>
                    <div className="headerTop__search">
                        {/* <Search /> */}
                    </div>
                    <div className="headerTop__user">
                        Konto <i className="far fa-user-circle"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderTop;