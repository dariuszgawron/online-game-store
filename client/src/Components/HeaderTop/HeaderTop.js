import React from 'react';
// import {Link} from 'react-router-dom';

import './HeaderTop.css';

const HeaderTop = (props) => {
    return (
        <div className="headerTop headerTop--dark">
            <div className="headerTop__container">
                <div className="headerTop__hamburger" onClick={hamburgerOnClick}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="headerTop__logo">Logo</div>
                <div className="headerTop__miniCart">
                    <MiniCart />
                </div>
                <div className="headerTop__search">
                    <Search />
                </div>
                <div className="headerTop__user">
                    Konto <i className="far fa-user-circle"></i>
                </div>
            </div>
        </div>
    )
}

export default HeaderTop;