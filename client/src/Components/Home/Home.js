import React from 'react';
import './Home.css';
import ProductList from '../ProductList/ProductList';

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
    const saleUrl = 'http://localhost:4001/products?limit=20';
    const bestsellers = 'http://localhost:4001/products?limit=20';
    const news = 'http://localhost:4001/products?order=data-desc&limit=20';
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
    if (!this.state.isLoaded) {
      return <span>Loading...</span>;
    }
    return (
      <main className="mainWrapper">
        <ProductList products={this.state.recommended} updateCart={this.props.updateCart} title='Polecane' />
        <ProductList products={this.state.recommended} updateCart={this.props.updateCart} title='Promocje' />
        <ProductList products={this.state.recommended} updateCart={this.props.updateCart} title='Bestsellery' />
        <ProductList products={this.state.recommended} updateCart={this.props.updateCart} title='Nowości' />
        {/* <div className="mainWrapper__container">
          <h3 className="mainWrapper__title">Polecane</h3>
          <div className="mainWrapper__products">
            <ProductList products={this.state.recommended} updateCart={this.props.updateCart} />
          </div>
        </div>
        <div className="mainWrapper__container">
          <h3 className="mainWrapper__title">Promocje</h3>
          <div className="mainWrapper__products">
            <button className="productsNav productsNav--left" onClick={this.btnOnClick.bind(this)}>Left</button>
            <ProductList products={this.state.recommended} addProduct={this.props.addProduct} updateCart={this.props.updateCart} />
            <button className="productsNav productsNav--right" onClick={this.btnOnClick.bind(this)}>Right</button>
          </div>
        </div>
        <div className="mainWrapper__container">
          <h3 className="mainWrapper__title">Bestsellery</h3>
          <div className="mainWrapper__products">
            <ProductList products={this.state.recommended} addProduct={this.props.addProduct} updateCart={this.props.updateCart} />
          </div>
        </div>
        <div className="mainWrapper__container">
          <h3 className="mainWrapper__title">Nowości</h3>
          <div className="mainWrapper__products">
            <ProductList products={this.state.recommended} addProduct={this.props.addProduct} updateCart={this.props.updateCart} />
          </div>
        </div> */}
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