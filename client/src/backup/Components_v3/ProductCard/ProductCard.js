import React from 'react';
import './ProductCard.css';
import {Link} from 'react-router-dom';

class ProductCard extends React.Component {
    constructor(props){
        super(props);
        this.addToBasket = this.addToBasket.bind(this);
        this.findCover = this.findCover.bind(this);
    }

    addToBasket(e) {
        // const newProduct = {
        //     productid: e.target.getAttribute('data-productid'),
        //     title: e.target.getAttribute('data-title'),
        //     price: parseFloat(e.target.getAttribute('data-price')),
        //     amount: 1
        // }
        // this.props.addProduct(newProduct);
        const productData = {
            productId: String(e.target.getAttribute('data-productid')),
            title: e.target.getAttribute('data-title'),
            price: parseFloat(e.target.getAttribute('data-price')),
            amount: 1
        }
        this.props.updateCart('insert',productData);
    }

    findCover(image){
        return image.typ_grafiki === 0;
    }

    render() {
        return (
            <div className="productCard">
                <Link to={{pathname: `/product/${this.props.product.id_gry}`}}>
                    <div className="productCard__image">
                        <img 
                            src={this.props.product.grafiki
                                    .filter(this.findCover.bind(this))[0].sciezka_do_pliku
                                }
                            alt={this.props.tytul}
                        />
                    </div>
                    <h5 className="productCard__title">
                        {this.props.product.tytul}
                    </h5>
                    <p className="productCard__studio">
                        {this.props.product.producenci
                            .map((product)=>{
                                return product.nazwa_producenta
                            })
                            .join(", ")
                        }
                    </p>
                    <div className="productCard__price">
                        {this.props.product.cena_podstawowa.toFixed(2)}
                    </div>
                </Link>
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

export default ProductCard;