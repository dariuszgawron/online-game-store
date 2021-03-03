import React from 'react';

import './Cart.css';
import CartItem from '../CartItem/CartItem';

class Cart extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    // componentDidMount() {

    // }
           
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
                    <h3 className="cart__title">Koszyk</h3>{
                    this.props.cartItems.length>0
                    ?   <div className="cart__head">
                            <div className="cart__colTitle"></div>
                            <div className="cart__colTitle cart__colTitle--left">NAZWA</div>
                            <div className="cart__colTitle cart__colTitle--left">PLATFORMA</div>
                            <div className="cart__colTitle">ILOŚĆ</div>
                            <div className="cart__colTitle cart__colTitle--right">CENA/SZT.</div>
                            <div className="cart__colTitle cart__colTitle--right">SUMA</div>
                            <div className="cart__colTitle">USUŃ</div>
                        </div>
                    :   <div className="cart__info">
                            <i className="far fa-sad-cry"></i>
                            <h4>Twój koszyk jest pusty.</h4>
                        </div>}
                    <div className="cart__items">{ 
                        this.props.cartItems.map(item => {
                            return <CartItem item={item} 
                                updateCart = {this.props.updateCart} 
                                key={item.productId} />
                        })}
                    </div>
                    <div className="cartSummary">
                        <div className="cartSummary__col"></div>
                        <div className="cartSummary__col cartSummary__col--right">Do zapłaty: </div>
                        <div className="cartSummary__col cartSummary__col--right">
                            {this.props.cartItems.reduce((total, item) => {
                                return total + (item.price * item.amount)
                            }, 0).toFixed(2)} zł
                        </div>
                        <div className="cartSummary__col"></div>
                    </div>
                    <div className="cart__footer">
                        <button className="cart__buttons">Zrealizuj zamówienie</button>
                    </div>
                </div>
            </main>
        )
    }
    
};

export default Cart;