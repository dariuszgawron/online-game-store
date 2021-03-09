import React from 'react';
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

  componentDidUpdate(prevProps) {
    if(prevProps.numberOfProducts!==this.props.numberOfProducts)
      this.createPagination();
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
            <Link 
              className="pagination__link" 
              to={`/products?page=${parseInt(this.props.currentPage)-1}&category=${this.props.queryValues.category || ''}&search=${this.props.queryValues.search || ''}&order=${this.props.queryValues.order || ''}`}>
              {`<`}
            </Link>
          </li>
          {this.state.pages.map((page) => {
              return (
                <li className={`pagination__button ${this.props.currentPage === page.toString() ? "pagination__button--active" : ""}`} id={`page${page}`} key={page}>
                  <Link className="pagination__link" to={`/products?page=${page}&category=${this.props.queryValues.category || ''}&search=${this.props.queryValues.search || ''}&order=${this.props.queryValues.order || ''}`}>
                    {page}
                  </Link>
                </li>
              )
            })
          }
          <li className="pagination__button">
            <Link className="pagination__link" to={`/products?page=${parseInt(this.props.currentPage)+1}&category=${this.props.queryValues.category || ''}&search=${this.props.queryValues.search || ''}&order=${this.props.queryValues.order || ''}`}>
              {`>`}
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default ProductPagination;