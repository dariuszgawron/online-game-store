import React from 'react';
import { useHistory, useLocation } from "react-router";
import queryString from 'query-string';

import './Sidenav.css';
import SidenavMenu from '../SidenavMenu/SidenavMenu';
import Search from '../Search/Search';

const Sidenav = (props) => {
    // const history = useHistory();
    // const location = useLocation();
    // const urlParams = queryString.parse(location.search);
    // const onSubmitSearch = (e) => {
    //     if(e.key === "Enter" || e.key === 13)
    //         history.push(`/products?search=${e.target.value}`);
    // }
    return (
        <div className="sidenav" id="sidenav">
            <div className="sidenav__container">
                <div className="sidenav__content">
                    {/* <input className="sidenav__input" placeholder="Wyszukaj produkt" onKeyUp={onSubmitSearch} value={urlParams.search}/> */}
                    <Search location={useLocation()} history={useHistory()} />
                    <SidenavMenu />
                </div>
            </div>
        </div>
    )
}

export default Sidenav;