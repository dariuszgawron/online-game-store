import React from 'react';

import './Cart.css';
import CartItem from '../CartItem/CartItem';

class Cart extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }
           
    //  }, []);

    // if(JSON.parse(localStorage.getItem('CartItems'))===null)
    //     localStorage.setItem('CartItems', JSON.stringify(0));
    // if(JSON.parse(localStorage.getItem('CartValue'))===null)
    //     localStorage.setItem('CartValue', JSON.stringify(0));

    // let cartItems = JSON.parse(localStorage.getItem('CartItems'))!==null ? JSON.parse(localStorage.getItem('CartItems')) : 0;
    // let cartValue = JSON.parse(localStorage.getItem('CartItems'))!==null ? JSON.parse(localStorage.getItem('CartItems')) : 0;

    render() {
        return (
            <main className="cart">
                <div className="cart__container">
                    <h3 className="cart__title">Koszyk</h3>
                    <div className="cart__head">
                        <div className="cart__colTitle cart__colTitle--1">LP</div>
                        <div className="cart__colTitle cart__colTitle--2"></div>
                        <div className="cart__colTitle cart__colTitle--4">NAZWA</div>
                        <div className="cart__colTitle cart__colTitle--2">PLATFORMA</div>
                        <div className="cart__colTitle cart__colTitle--3">ILOŚĆ</div>
                        <div className="cart__colTitle cart__colTitle--2">CENA/SZT</div>
                        <div className="cart__colTitle cart__colTitle--2">SUMA</div>
                        <div className="cart__colTitle cart__colTitle--2">USUŃ</div>
                    </div>
                    <div className="cart__items">{ 
                        this.props.cartItems.map(item => {
                            return <CartItem item={item} changeAmountInCart={this.props.changeAmountInCart} deleteProductFromCart={this.props.deleteProductFromCart} key={item.title}/>
                        })}
                        {this.props.cartValue}
                    </div>
                </div>
            </main>
        )
    }
    
};

export default Cart;