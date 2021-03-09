import React from 'react';

import './Product.css';
import ProductInfo from '../ProductInfo/ProductInfo';
import ProductFeatures from '../ProductFeatures/ProductFeatures';
// import ProductsList from '../ProductList/ProductsList';

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      isLoaded: false
    };
    this.btnOnClick = this.btnOnClick.bind(this);
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    const productsUrl = `http://localhost:4001/products/${id}`;
    fetch(productsUrl)
      .then(res => res.json())
      .then(data=>{
        this.setState({
          isLoaded: true,
          product: data.product
        },()=>{
          console.log(this.state.product)
        })
      })
      .catch(console.log('Zakończono pobieranie'))
  }

  btnOnClick (e) {
    const productsList = document.getElementsByClassName('productsList');
    (e.target.classList[1]==='productsNav--left') 
    ? productsList[1].scrollLeft -= (window.innerWidth/2)
    : productsList[1].scrollLeft += (window.innerWidth/2);
    // console.log(productsList[1].scrollWidth - productsList[1].clientWidth);
    console.log(productsList[1].scrollWidth - productsList[1].scrollLeft);
    // this.props.addProduct({'title':'adaf','price': 12,'amount':1,'productId':1});
  }

  render() {
    if (!this.state.isLoaded) {
      console.log("Loading");
      return <span>Loading...</span>;
    }
    return (
      <main className="productWrapper">
        <div className="productWrapper__container">
          <div className="productWrapper__content">
            <ProductInfo product={this.state.product} updateCart={this.props.updateCart} />
            <ProductFeatures product={this.state.product} />
            <div className="productPage__recommended">
              {/* <ProductsList products={this.state.products} addProduct={this.props.addProduct}/> */}
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Product;