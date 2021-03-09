import React from 'react';

import './MiniCart.css';

const MiniCart = (props) => {
    // if(JSON.parse(localStorage.getItem('CartItems'))===null)
    //     localStorage.setItem('CartItems', JSON.stringify(0));
    // if(JSON.parse(localStorage.getItem('CartValue'))===null)
    //     localStorage.setItem('CartValue', JSON.stringify(0));

    // let cartItems = JSON.parse(localStorage.getItem('CartItems'))!==null ? JSON.parse(localStorage.getItem('CartItems')) : 0;
    // let cartValue = JSON.parse(localStorage.getItem('CartItems'))!==null ? JSON.parse(localStorage.getItem('CartItems')) : 0;

    let cartValue = props.cartItems.reduce((acc, item) => {
        return acc + (item.amount*item.price); 
    }, 0);

    let cartQuantity = props.cartItems.reduce((acc, item) => {
        return acc + item.amount;
    }, 0);

    return (
        <div className="miniCart">
            <i className="miniCart__icon fas fa-shopping-basket"></i>
            <span>
                <span className="miniCart__text"> Koszyk </span> 
                <span className="miniCart__quantity">({cartQuantity})</span>
            </span>
        </div>
    )
};

export default MiniCart;