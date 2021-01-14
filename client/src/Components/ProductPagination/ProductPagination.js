import React from 'react';
// import queryString from 'query-string';
// import {RouteComponentProps, withRouter} from "react-router";
import {Link} from 'react-router-dom';

import './ProductPagination.css';

class ProductPagination extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      pages: []
      // currentPage: 1
      // numberOfProducts: 0,
      // isLoaded: false
    };
  }

  componentDidMount() {
    this.createPagination();
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

  createPagination() {
    const totalItems = this.props.numberOfProducts;
    const currentPage = this.props.currentPage;
    const pageSize = this.props.limit;
    let numberOfPages = Math.ceil(totalItems / pageSize);
    let arrayOfPages = [];
    if(numberOfPages <= 7) {
      let page = 1;
      while(page<=numberOfPages)
        arrayOfPages.push(page++);
    } else if (numberOfPages > 7 & currentPage - 1 <= 3) {
      let page = 1;
      while(page <= page+5)
        arrayOfPages.push(page);
      arrayOfPages.push('#');
      arrayOfPages.push(numberOfPages);
    } else if (numberOfPages > 7 & numberOfPages - currentPage <= 3) {
      let page = numberOfPages-4;
      arrayOfPages.push(1);
      arrayOfPages.push('#');
      while(page <= numberOfPages)
        arrayOfPages.push(page++);
    } else {
      let page = currentPage - 1;
      arrayOfPages.push(1);
      arrayOfPages.push('#');
      while(page<=currentPage+1)
        arrayOfPages.push(page++);
      arrayOfPages.push('#');
      arrayOfPages.push(numberOfPages);
    };
    this.setState({
      pages: arrayOfPages
    });

  }

  render() {
    // if (!this.state.isLoaded) {
    //   return <span>Loading...</span>;
    // }
    return (
      <div className="productPagination">
        <ul className="pagination">
          <li className="pagination__button">
            <Link to={`/products?page=3`}>(3)</Link>
          </li>
        </ul>
        {this.state.pages}
        {this.props.count}
        {this.props.numberOfProducts}
        <Link className="abc" to="/products?page=12" onClick={this.props.getProductData}>Bestsellery</Link>
        <Link className="abc" to={`/products?page=${this.props.count}`}>{this.props.numberOfProducts}</Link>
        <Link className="abc" to={`/products?page=1`} onClick={() => this.props.getProductData(1)}> @1@ </Link>
        <Link className="abc" to={`/products?page=2`} onClick={() => this.props.getProductData(2)}> @2@ </Link>
        <Link className="abc" to={`/products?page=1`}> @1@ </Link>
        <Link className="abc" to={`/products?page=2`}> @2@ </Link>
      </div>
    )
  }
}

export default ProductPagination;