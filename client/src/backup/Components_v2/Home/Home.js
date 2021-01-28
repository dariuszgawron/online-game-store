import React from 'react';
import './Home.css';
import ProductsList from '../ProductList/ProductsList';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recommended: [],
      sale: [],
      bestsellers: [],
      news: [],
      isLoaded: false
    };
    this.btnOnClick = this.btnOnClick.bind(this);
  }

  componentDidMount() {
    const recommendedUrl = 'http://localhost:4001/products?limit=20'
    fetch(recommendedUrl)
      .then(res => res.json())
      .then(data=>{
        this.setState({
          isLoaded: true,
          recommended: data.products
        },()=>{
          console.log(this.state.recommended)
        })
      })
      .catch(console.log('Zakończono pobieranie'))
  }

  btnOnClick (e) {
    // arr.push({'a': 1, 'b':2});
    
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
          <div className="mainWrapper__products">
            <ProductsList products={this.state.recommended} addProduct={this.props.addProduct} updateCart={this.props.updateCart} />
          </div>
        </div>
        <div className="mainWrapper__container">
          <h3 className="mainWrapper__title">Promocje</h3>
          <div className="mainWrapper__products">
            <button className="productsNav productsNav--left" onClick={this.btnOnClick.bind(this)}>Left</button>
            <ProductsList products={this.state.recommended} addProduct={this.props.addProduct} updateCart={this.props.updateCart} />
            <button className="productsNav productsNav--right" onClick={this.btnOnClick.bind(this)}>Right</button>
          </div>
        </div>
        <div className="mainWrapper__container">
          <h3 className="mainWrapper__title">Bestsellery</h3>
          <div className="mainWrapper__products">
            <ProductsList products={this.state.recommended} addProduct={this.props.addProduct} updateCart={this.props.updateCart} />
          </div>
        </div>
        <div className="mainWrapper__container">
          <h3 className="mainWrapper__title">Nowości</h3>
          <div className="mainWrapper__products">
            <ProductsList products={this.state.recommended} addProduct={this.props.addProduct} updateCart={this.props.updateCart} />
          </div>
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

export default Home;