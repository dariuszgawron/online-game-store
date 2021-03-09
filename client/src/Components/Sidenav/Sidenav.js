import React from 'react';
import { useHistory, useLocation } from "react-router";

import './Sidenav.css';
import SidenavMenu from '../SidenavMenu/SidenavMenu';
import Search from '../Search/Search';

const Sidenav = (props) => {
    return (
        <div className = "sidenav" id="sidenav">
            <div className = "sidenav__container">
                <div className = "sidenav__content">
                    <Search location = {useLocation()} history = {useHistory()} />
                    <SidenavMenu />
                </div>
            </div>
        </div>
    )
}

export default Sidenav;