import React from 'react';
import './ProductPagination.css';

import {Link} from 'react-router-dom';

class ProductPagination extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      numberOfProducts: 0,
      isLoaded: false
    };
  }

  componentDidMount() {
    const numberOfProductsUrl = 'http://localhost:4001/products/count';
    fetch(numberOfProductsUrl)
      .then(res => res.json())
      .then(data => {
        this.setState({
          isLoaded: true,
          numberOfProducts: data.products[0].totalNumber
        })
      });
  }

  render() {
    if (!this.state.isLoaded) {
      return <span>Loading...</span>;
    }
    return (
      <div className="productPagination">
        {this.state.numberOfProducts}
        <Link className="abc" to="/products?page=12">Bestsellery</Link>
        <Link className="abc" to={`/products?page=${this.state.numberOfProducts}`}>{this.state.numberOfProducts}</Link>
      </div>
    )
  }
}

export default ProductPagination;