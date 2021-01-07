import React from 'react';
import queryString from 'query-string';
import './Products.css';

import ProductsList from '../ProductList/ProductsList';
import ProductPagination from '../ProductPagination/ProductPagination';

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      isLoaded: false
    };
    this.btnOnClick = this.btnOnClick.bind(this);
  }

  componentDidMount() {
    this.getProductData();
    // const queryValues = queryString.parse(this.props.location.search);
    // const currentPage = queryValues.page || 1;
    // console.log(this.props.match.params.page);
    // const limit = 22;
    // const offset = (currentPage-1)*20;
    // const productsUrl = `http://localhost:4001/products?limit=${limit}&offset=${offset}`;
    // // const productsUrl = 'http://localhost:4001/products?limit=20'
    // fetch(productsUrl)
    //   .then(res => res.json())
    //   .then(data=>{
    //     this.setState({
    //       isLoaded: true,
    //       products: data.products
    //     },()=>{
    //       console.log(this.state.products)
    //     })
    //   })
    //   .catch(console.log('Zakończono pobieranie'))
  }

  getProductData() {
    const queryValues = queryString.parse(this.props.location.search);
    const currentPage = queryValues.page || 1;
    console.log(this.props.match.params.page);
    const limit = 22;
    const offset = (currentPage-1)*20;
    const productsUrl = `http://localhost:4001/products?limit=${limit}&offset=${offset}`;
    fetch(productsUrl)
      .then(res => res.json())
      .then(data=>{
        this.setState({
          isLoaded: true,
          products: data.products
        })
      })
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
    return (
      <main className="mainWrapper">
        <div className="mainWrapper__container">
          <h3 className="mainWrapper__title">Polecane</h3>
          {/* <button onClick={this.btnOnClick.bind(this)} value="Click me">Click me </button> */}
          <div className="mainWrapper__products">
            <ProductsList products={this.state.products} addProduct={this.props.addProduct}/>
          </div>
          <ProductPagination getProductData={this.getProductData} />
        </div>
      </main>
    );
  }
}

// const Home = () => {
//   return (
//     <div className="container">
//       <h1>Home!!</h1><br/><br/><br/>
//       <button onClick={BtnOnClick} value="Click me">Click me</button>
//     </div>
//   );
// }
// var arr = [];
// var cartItems = 0;

// const BtnOnClick = () => {
//   arr.push({'a': 1, 'b':2});
//   localStorage.setItem('CartItems', JSON.stringify(++cartItems));
//   localStorage.setItem('Cart', JSON.stringify(arr));
//   // var storage = localStorage.getItem('Cart');
//   // console.log(storage);
//   console.log(localStorage.getItem('CartItems'));
// }

export default Products;