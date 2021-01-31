import React from 'react';
// import {Link} from 'react-router-dom';

import './Header.css';

const Header = (props) => {
    return (
        <header className="header">
            <div className="header__top">
                <HeaderTop />
            </div>
            <div className="header__nav">
                <Navbar />
            </div>
        </header>
    )
}

export default Header;