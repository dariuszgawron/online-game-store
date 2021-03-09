import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recommended: [],
      sale: [],
      bestsellers: [],
      news: []
    };
    // var arr = []; 
    // var cartItems = 0;
    this.btnOnClick = this.btnOnClick.bind(this);
  }

  btnOnClick () {
    // arr.push({'a': 1, 'b':2});
    // localStorage.setItem('CartItems', JSON.stringify(++cartItems));
    // localStorage.setItem('Cart', JSON.stringify(arr));
    // var storage = localStorage.getItem('Cart');
    // console.log(storage);
    this.props.addProduct({'product':'adaf','price': 12,'amount':1,'productId':1});
    // console.log(localStorage.getItem('CartItems'));
  }

  render() {
    return (
      <div className="container">
        <h1>Home!!</h1><br/><br/><br/>
        <button onClick={this.btnOnClick.bind(this)} value="Click me">Click me</button>
      </div>
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