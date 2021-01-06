import React, {useState, useEffect} from 'react';
import './Cart.css';

const Cart = (props) => {
    // const [cart, setCart] = React.useState(0);
    // // React.useEffect(() => {
    // //     setCart(JSON.parse(localStorage.getItem('myCart')) || [])
    // // }, [])

    // useEffect(() => {
    
    //     window.addEventListener('storage', () => {
    //       // When local storage changes, dump the list to
    //       // the console.
    //        setCart(JSON.parse(localStorage.getItem('CartItems')) || 0);
    //        console.log('ok');
    //     });
        
           
    //  }, []);

    // if(JSON.parse(localStorage.getItem('CartItems'))===null)
    //     localStorage.setItem('CartItems', JSON.stringify(0));
    // if(JSON.parse(localStorage.getItem('CartValue'))===null)
    //     localStorage.setItem('CartValue', JSON.stringify(0));

    // let cartItems = JSON.parse(localStorage.getItem('CartItems'))!==null ? JSON.parse(localStorage.getItem('CartItems')) : 0;
    // let cartValue = JSON.parse(localStorage.getItem('CartItems'))!==null ? JSON.parse(localStorage.getItem('CartItems')) : 0;

    return (
        <div className="menu__basket">
            <i className="fas fa-shopping-basket"></i> - <span> {props.cartValue} zł ({props.cartQuantity})</span> 
        </div>
    )
};

export default Cart;