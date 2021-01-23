// import React, {useState, useEffect} from 'react';
import React from 'react';

import './CartItem.css';

const CartItem = (props) => {
    return (
        <div className="cart__item">
            <div className="cart__itemImage"></div>
            <div className="cart__itemTitle">{props.item.title}</div>
            <div className="cart__itemPlatform">{props.item.title}</div>
            <div className="cart__itemQuantity">{props.item.amount}</div>
            <div className="cart__itemUnitPrice">{props.item.price}</div>
            <div className="cart__itemTotalPrice">{props.item.amount*props.item.price}</div>
            <div className="cart__itemDelete">Usuń</div>
        </div>
    )
}

export default CartItem;