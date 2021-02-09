// import React, {useState, useEffect} from 'react';
import React from 'react';

import './CartItem.css';

const CartItem = (props) => { 
    function increaseAmountOfProduct (e) {
        let quantityInput = e.currentTarget.previousSibling;
        let amountValue = parseInt(quantityInput.value) + 1;
        quantityInput.value = amountValue;
        let productData = {
            productId: String(e.currentTarget.getAttribute("data-productid")),
            amount: amountValue,
            price: parseFloat(e.currentTarget.getAttribute("data-price"))
        }
        console.log(productData);
        props.updateCart('update', productData);
    }

    function decreaseAmountOfProduct (e) {
        let quantityInput = e.currentTarget.nextSibling;
        let amountValue = parseInt(quantityInput.value) - 1;
        if (amountValue >= 1) {
            quantityInput.value = amountValue;
            let productData = {
                productId: String(e.currentTarget.getAttribute("data-productid")),
                amount: amountValue,
                price: parseFloat(e.currentTarget.getAttribute("data-price"))
            };
            props.updateCart('update', productData);
        }
    }

    function changeAmountOfProduct (e) {
        let quantityInput = e.currentTarget;
        if(quantityInput.value<=0)
            quantityInput.value='1';
        console.log(e.currentTarget.getAttribute("data-productid"));
        // props.changeAmountInCart();
    }

    function deleteProductFromCart (e) {
        let productData = {
            productId: String(e.currentTarget.getAttribute("data-productid"))
        };
        props.updateCart('delete', productData);
    }

    return (
        <div className="cart__item">
            <div className="cart__itemImage"><img src="https://i.redd.it/pp63ewz3bt611.jpg"/></div>
            <div className="cart__itemTitle">
                <h4 className="itemTitle">{props.item.title}</h4>
            </div>
            <div className="cart__itemPlatform">Steam</div>
            <div className="cart__itemQuantity">
                <button className="cart__button cart__button--left cart__button--light" 
                        onClick={decreaseAmountOfProduct} 
                        data-productid={props.item.productId}
                        data-price={props.item.price}>
                    <i className="fas fa-minus"></i>
                </button>
                <input className="cart__input" 
                       id="quantityNumber" 
                       defaultValue={props.item.amount}
                       data-productid={props.item.productId}
                       data-price={props.item.price}
                       onBlur={changeAmountOfProduct}
                />
                <button className="cart__button cart__button--right cart__button--light" 
                        onClick={increaseAmountOfProduct}
                        data-productid={props.item.productId}
                        data-price={props.item.price}>
                    <i className="fas fa-plus"></i>
                </button>
            </div>
            <div className="cart__itemUnitPrice">{props.item.price} zł</div>
            <div className="cart__itemTotalPrice">{(props.item.amount*props.item.price).toFixed(2)} zł</div>
            <div className="cart__itemDelete">
                <button className="cart__button cart__button--danger"
                        onClick={deleteProductFromCart}
                        data-productid={props.item.productId}>
                    <i className="far fa-trash-alt"></i>
                </button>
            </div>
        </div>
    )
}

export default CartItem;