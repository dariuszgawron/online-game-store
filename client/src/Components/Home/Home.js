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
    // this.btnOnClick = this.btnOnClick.bind(this);
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

  render() {
    if (!this.state.isLoaded) {
      return <span>Loading...</span>;
    }
    return (
      <main className="homeWrapper">
        <ProductList 
          products = {this.state.recommended} 
          updateCart = {this.props.updateCart} 
          title = 'Polecane' 
        />
        <ProductList 
          products = {this.state.recommended} 
          updateCart = {this.props.updateCart} 
          title = 'Promocje' 
        />
        <ProductList 
          products = {this.state.recommended} 
          updateCart = {this.props.updateCart} 
          title = 'Bestsellery' 
        />
        <ProductList 
          products = {this.state.recommended} 
          updateCart = {this.props.updateCart} 
          title = 'Nowości' 
        />
      </main>
    );
  }
}

export default Home;