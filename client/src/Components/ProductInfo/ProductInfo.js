import React from 'react';
import './ProductInfo.css';
// import '../ProductDescription/ProductDescription';

import ProductDescription from '../ProductDescription/ProductDescription';

class ProductInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false
    };
  }

  addToBasket(e) {
    const productData = {
      productId: String(this.props.product.id_gry),
      title: this.props.product.tytul,
      price: parseFloat(this.props.product.cena_podstawowa),
      amount: 1
    }
    this.props.updateCart('insert',productData);
  }

  render() {
    return (
      <div className="productPage__main">
        <div className="productPage__title">
          <h3>{this.props.product.tytul}</h3>
        </div>
        <ProductDescription product={this.props.product} />
        <div className="productPage__price">
          <div className="productPrice">
            <p className="productPrice__base">
              {this.props.product.cena_podstawowa.toFixed(2)} zł
            </p>
          </div>
          <button className="productPage__basket" onClick={(e) => this.addToBasket(e)} >
          <i class="fas fa-cart-plus"></i><span>Dodaj do koszyka</span>
          </button>
          <button className="productPage__wishlist">
          <i class="fas fa-heart"></i><span>Lista życzeń</span>
          </button>  
        </div>
      </div>  
    );
  }
}

export default ProductInfo;