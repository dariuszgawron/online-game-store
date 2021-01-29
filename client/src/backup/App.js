import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import './App.css';
// import Users from './Components/users';

import Navbar from './Components/Navbar/Navbar';
// import Footer from './Components/Footer/Footer';

import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import Product from './Components/Product/Product';
import About from './Components/about';
import LoginForm from './Components/LoginForm/LoginForm';
import Cart from './Components/Cart/Cart';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartQuantity: 0,
      cartValue: 0.00,
      cartItems: [],
      activeUser: '',
      activePage: '',
      previousPage: ''
    };
    this.addProduct=this.addProduct.bind(this);
    // this.changeAmountInCart=this.changeAmountInCart.bind(this);
    // this.deleteProductFromCart=this.deleteProductFromCart.bind(this);
    this.updateCart = this.updateCart.bind(this);
  }

  componentDidMount() {
    // const cartQuantity = JSON.parse(localStorage.getItem('cartQuantity'));
    // const cartValue = JSON.parse(localStorage.getItem('cartValue'));
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));
    // (cartQuantity===null) 
    //   ? localStorage.setItem('cartQuantity', JSON.stringify(this.state.cartQuantity))
    //   : this.setState({cartQuantity: cartQuantity});
    (cartItems===null) 
      ? localStorage.setItem('cartItems', JSON.stringify(this.state.cartItems))
      : this.setState({cartItems: cartItems});
    // (cartValue===null) 
    //   ? localStorage.setItem('cartValue', JSON.stringify(this.state.cartValue))
    //   : this.setState({cartValue: cartValue});
    // console.log(this.state.cartItems);
  }

  updateCart(operation, productData) {
    this.setState(prevState => {
      console.log(productData);
      const index = prevState.cartItems.map(function(product) {return product.productId}).indexOf(productData.productId);
      let cartItemsNew = prevState.cartItems;
      console.log(index);
      if (operation === 'insert' && index === -1) {
        cartItemsNew = [...prevState.cartItems, productData];
      } else if (operation === 'update' && index !== -1) {
        cartItemsNew[index].amount = productData.amount;
        cartItemsNew[index].price = productData.price;
      } else if (operation === 'delete' && index !== -1) {
        cartItemsNew.splice(index, 1);
      }
      return {
        cartItems: cartItemsNew
      };
    },() => {
      localStorage.setItem('cartItems', JSON.stringify(this.state.cartItems));
    })
  }

  addProduct(product) {
    console.log(product);
    this.setState(state=>{
      const index = state.cartItems.map(function(product) {return product.productid}).indexOf(product.productid);
      let cartItemsNew;
      if(index===-1)
        cartItemsNew = [...state.cartItems, product];
      else {
        cartItemsNew = Object.assign({},state.cartItems[index]);
        cartItemsNew.amount+=product.amount;
        cartItemsNew.price+=product.price;
        state.cartItems[index]=cartItemsNew;
        cartItemsNew = [...state.cartItems];
        // cartItemsNew[index].amount+=product.amount;
        // cartItemsNew[index].price+=product.price;
      };
      return {
        cartItems: cartItemsNew,
        // cartQuantity: state.cartQuantity+product.amount,
        // cartValue: +(state.cartValue+product.price).toFixed(2)
      };
    }, () => {
      localStorage.setItem('cartItems', JSON.stringify(this.state.cartItems));
      // localStorage.setItem('cartValue', JSON.stringify(this.state.cartValue));
      // localStorage.setItem('cartQuantity', JSON.stringify(this.state.cartQuantity));
      console.log(localStorage.getItem('cartItems'));
    });
  }

  render() {
    return (
      <Router>
        {/* <div className="container"> */}
          {/* <header className="app__header">
            <Navbar />
          </header> */}
          <Navbar 
            // cartQuantity={this.state.cartQuantity} 
            // cartValue={this.state.cartValue} 
            cartItems = {this.state.cartItems} 
          />

          <Switch>

            {/* <Route exact path="/" component={Home} /> */}
            <Route exact path="/" render={(props) => <Home {...props} addProduct={this.addProduct} updateCart={this.updateCart} />} />
            <Route path="/products" render = {(props) => <Products {...props} addProduct={this.addProduct} updateCart={this.updateCart} />} />
            {/* <Route path="/products/polecane" component={Products} />
            <Route path="/products/promocje" component={Products} />
            <Route path="/products/bestsellery" component={Products} />
            <Route path="/products/nowosci" component={Products} />
            <Route path="/products/preordery" component={Products} />
            <Route path="/products/dodatki" component={Products} /> */}
            {/* <Route path="/product/:id" component={Product} /> */}
            <Route exact path="/product/:id" render={(props) => <Product {...props} addProduct={this.addProduct} updateCart={this.updateCart} />} />
            <Route path="/orders" component={About} />
            <Route path="/order/:id" component={About} />
            <Route path="/cart" render={(props) => <Cart 
              cartItems={this.state.cartItems} 
              updateCart = {this.updateCart} />} 
            />
            <Route path="/login" component={LoginForm} />
            {/* <Route path="/register" component={LoginForm} /> */}
            
            {/* <Route path="/about" component={About} /> */}

            {/* <Route component={NoMatch}/> */}
          </Switch>

          
          {/* <p>User id: {this.props.match.params.id}</p> */}

          {/* <Footer /> */}
        {/* </div> */}
      </Router>
    );
  }
}

// const App = () => {
//   return (
//     <div className="app">
//       <header className="app__header">
//         <Navbar />
//       </header>
//       <main className="app__main">
//         <p>
//           My first React website!
//         </p>
//       </main>
//       <footer className="app__footer">

//       </footer>
//     </div>
//   )
// }

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {contacts: []};
//   }

//   componentDidMount() {
//     const url = 'http://jsonplaceholder.typicode.com/users';
//     fetch(url)
//       .then(res => res.json())
//       .then(data=>{
//         this.setState({contacts: data})
//       })
//       .catch(console.log)
//   }
  
//   render() {
//     return (
//       <Users users={this.state.contacts} />
//     )
//   }
// }

export default App;