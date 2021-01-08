import React from 'react';
import queryString from 'query-string';
import {Link} from 'react-router-dom';

import './ProductPagination.css';

class ProductPagination extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      currentPage: 1
      // numberOfProducts: 0,
      // isLoaded: false
    };
  }

  componentDidMount() {
    // const numberOfProductsUrl = 'http://localhost:4001/products/count';
    // fetch(numberOfProductsUrl)
    //   .then(res => res.json())
    //   .then(data => {
    //     this.setState({
    //       isLoaded: true,
    //       numberOfProducts: data.products[0].totalNumber
    //     })
    //   });
    
      // console.log(queryString.parse(this.props.location))
      // const queryValues = queryString.parse(this.props.location.search);
    // const pageNumber = queryValues.page || 1;
    // this.setState({
    //   currentPage: pageNumber
    // });
  }

  render() {
    // if (!this.state.isLoaded) {
    //   return <span>Loading...</span>;
    // }
    return (
      <div className="productPagination">
        {this.props.count}
        <Link className="abc" to="/products?page=12" onClick={this.props.getProductData}>Bestsellery</Link>
        <Link className="abc" to={`/products?page=${this.props.count}`}>{this.props.count}</Link>
        <Link className="abc" to={`/products?page=1`} onClick={() => this.props.getProductData(1)}> @1@ </Link>
        <Link className="abc" to={`/products?page=2`} onClick={() => this.props.getProductData(2)}> @2@ </Link>
      </div>
    )
  }
}

export default ProductPagination;