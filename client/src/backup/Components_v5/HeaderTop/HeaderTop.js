import React from 'react';
import {Link} from 'react-router-dom';
import { useHistory, useLocation } from "react-router";

import './HeaderTop.css';
import Search from '../Search/Search';
import MiniCart from '../MiniCart/MiniCart';

const HeaderTop = (props) => {
    const hamburgerOnClick = (e) => {
        e.currentTarget.classList.toggle('active');
        let sidenav = document.getElementById('sidenav');
        sidenav.classList.toggle('sidenav--visible');
        // console.log(e.currentTarget.classList);
        // e.currentTarget.classList.contains("active")
        // ? sidenav.style.display = "block" 
        // : sidenav.style.display = "none";
    }

    return (
        <div className="headerTop headerTop--dark">
            <div className="headerTop__container">
                <div className="headerTop__content">
                    <div className="headerTop__line">
                        <div className="logo">
                            <h2 className="logo__text">
                                <Link className="logo__link" to="/">GameShop</Link>
                            </h2>
                        </div>
                        <div className="headerTop__search">
                            <Search location={useLocation()} history={useHistory()} />
                        </div>
                        <div className="headerTop__right">
                            <Link className="headerTop__link userAccount__link" to="/login">
                                <div className="userAccount">
                                    <i class="userAccount__icon fas fa-user-tie"></i>
                                    <span className="userAccount__text">Konto</span>
                                </div>
                            </Link>
                            <Link className="headerTop__link miniCart__link" to="/cart">
                                <MiniCart cartItems={props.cartItems} />
                            </Link>
                            {/* <div className="headerTop__link menuSearch__link">
                                <i class="searchLink__icon fas fa-search"></i>
                            </div> */}
                            <div className="headerTop__hamburger" id="hamburgerIcon" onClick={hamburgerOnClick}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                    {/* <div className="headerTop__line">
                        <div className="search">
                            <input className="search__input" />
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default HeaderTop;