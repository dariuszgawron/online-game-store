// import React, {useState, useEffect} from 'react';
import React from 'react';
import './MiniCart.css';

const MiniCart = (props) => {
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

    let cartValue = props.cartItems.reduce((acc, item) => {
        return acc + (item.amount*item.price); 
    }, 0);

    let cartQuantity = props.cartItems.reduce((acc, item) => {
        return acc + item.amount;
    }, 0)

    console.log(cartValue + ' ' + cartQuantity);

    return (
        <div className="menu__basket">
            <i className="fas fa-shopping-basket"></i> - <span> {cartValue.toFixed(2)} zł ({cartQuantity})</span> 
        </div>
    )
};

export default MiniCart;