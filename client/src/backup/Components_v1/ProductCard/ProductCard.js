import React from 'react';
import './ProductCard.css';

class ProductCard extends React.Component {
    constructor(props){
        super(props);
        this.addToBasket = this.addToBasket.bind(this);
    }

    addToBasket(e) {
        const newProduct = {
            productid: e.target.getAttribute('data-productid'),
            title: e.target.getAttribute('data-title'),
            price: parseFloat(e.target.getAttribute('data-price')),
            amount: 1
        }
        this.props.addProduct(newProduct);
        // console.log(newProduct);
    }

    render() {
        return (
            <div className="productCard2">
                <div className="productCard__image">
                    <img src="https://gamepreorders.com/wp-content/uploads/2019/06/cover-art-6.jpg"/>
                </div>
                <h5 className="productCard__title">
                    {this.props.product.tytul}
                </h5>
                <p className="productCard__studio">
                    {this.props.product.tytul_angielski}
                </p>
                <div className="productCard__price">
                    {this.props.product.cena_podstawowa.toFixed(2)}
                </div>
                <button className="productCard__button"
                        data-productid={this.props.product.id_gry} 
                        data-title={this.props.product.tytul}
                        data-price={this.props.product.cena_podstawowa}
                        onClick={this.addToBasket.bind(this)} 
                        key={this.props.product.id_gry}
                >
                    Do koszyka
                </button>
                {/* <button 
                    data-productid={this.props.product.id_gry} 
                    data-title={this.props.product.tytul}
                    data-price={this.props.product.cena_podstawowa}
                    onClick={this.addToBasket.bind(this)} 
                    key={this.props.product.id_gry}
                >{this.props.product.tytul}Dodaj do koszyka</button> */}
            </div>
        )
    }
}

// const ProductCard = (props) => {
//     return (
//         <div className="productCard">
//             <div className="productCard__image">
            
//             </div>
//             <div className="productCard__title">
            
//             </div>
//             <div className="productCard__studio">
            
//             </div>
//             <div className="productCard__price">
            
//             </div>
//             <div className="productCard__button">
            
//             </div>
//             <button 
//                 data-id={props.product.id_gry} 
//                 data-title={props.product.tytul}
//                 data-price={props.product.cena}
//                 // onClick={addToBasket} 
//                 key={props.product.id_gry}
//             >{props.product.tytul}Dodaj do koszyka</button>
//         </div>
       
//     )
// }

// const addToBasket = (e) => {
//     // this.props.add
//     console.log(e.target.getAttribute('data-id'));
// }

export default ProductCard;