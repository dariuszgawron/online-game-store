// import React, {useState, useEffect} from 'react';
import React from 'react';

import './CartItem.css';

const CartItem = (props) => {
    // function increaseAmountOfProduct (e) {

    // }

    function decreaseAmountOfProduct (e) {
        console.log(e.currentTarget.getAttribute("data-id"));
    }

    // function deleteProductFromCart (e) {
    
    // }

    return (
        <div className="cart__item">
            <div className="cart__itemImage"><img src="https://i.redd.it/pp63ewz3bt611.jpg"/></div>
            <div className="cart__itemTitle">
                <h4 className="itemTitle">{props.item.title}</h4>
            </div>
            <div className="cart__itemPlatform">Steam</div>
            <div className="cart__itemQuantity">
                <button className="cart__button cart__button--left cart__button--light" onClick={decreaseAmountOfProduct} data-id="1"><i className="fas fa-minus"></i></button>
                <input className="cart__input" defaultValue={props.item.amount}/>
                <button className="cart__button cart__button--right cart__button--light"><i className="fas fa-plus"></i></button>
            </div>
            <div className="cart__itemUnitPrice">{props.item.price} zł</div>
            <div className="cart__itemTotalPrice">{props.item.amount*props.item.price} zł</div>
            <div className="cart__itemDelete">
                <button className="cart__button cart__button--danger"><i className="far fa-trash-alt"></i></button>
            </div>
        </div>
    )
}

export default CartItem;