import React from 'react';
import queryString from 'query-string';

import './Products.css';
// import ProductsList from '../ProductList/ProductsList';
import ProductFilter from '../ProductFilter/ProductFilter';
import ProductPagination from '../ProductPagination/ProductPagination';
import ProductSort from '../ProductSort/ProductSort';
import ProductMobileSort from '../ProductMobileSort/ProductMobileSort';
import SearchContent from '../SearchContent/SearchContent';

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      numberOfProducts: 0,
      limit: 20,
      currentPage: 1,
      queryValues: '',
      pageTitle: '',
      isLoaded: false
    };
    this.btnOnClick = this.btnOnClick.bind(this);
    this.changePage = this.changePage.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  componentDidUpdate(prevProps) {
    const prevQueryValues = queryString.parse(prevProps.location.search);
    const queryValues = queryString.parse(this.props.location.search);
    const prevPage = prevQueryValues.page ? prevQueryValues.page : '1';
    const currPage = queryValues.page ? queryValues.page : '1';
    if(prevPage !== currPage || prevQueryValues.search !== queryValues.search ||prevQueryValues.order !== queryValues.order || prevQueryValues.genre !== queryValues.genre || prevQueryValues.producer !== queryValues.producer || prevQueryValues.publisher !== queryValues.publisher || prevQueryValues.category !== queryValues.category) {
      this.getData();
    };
  }

  getData() {
    const urlParams = this.props.location.search;
    const queryParams = Object.keys(urlParams).length ? '&'+urlParams.substring(1) : '';
    const productsUrl = `http://localhost:4001/products?limit=${this.state.limit}${queryParams}`;
    const queryValues = queryString.parse(urlParams);
    const currentPage = queryValues.page || 1;
    const pageTitle = 
      (queryValues.category === 'nowosci') ? 'Nowości' :
      (queryValues.category === 'promocje' ? 'Promocje' : 
      (queryValues.category === 'preordery' ? 'Preordery' : 
      (queryValues.category === 'dodatki' ? 'Dodatki' :
      (queryValues.category === 'bestsellery' ? 'Bestsellery' :
      (queryValues.search ? ('Szukasz: "'+queryValues.search+'"') : 'Wszystkie gry')))));
    fetch(productsUrl)
      .then(res => res.json())
      .then(data=>{
        this.setState({
          products: data.products,
          numberOfProducts: data.rowCount,
          currentPage: currentPage,
          queryValues: queryValues,
          pageTitle: pageTitle,
          isLoaded: true
        });
      })
      .catch(console.log(`Zaktualizowano dane`));
  }

  changePage(nextPage) {
    // console.log(nextPage);
    // const offset = (nextPage-1)*20;
    // const productsUrl = `http://localhost:4001/products?limit=${this.state.limit}&offset=${offset}`;
    // fetch(productsUrl)
    //   .then(res => res.json())
    //   .then(data=>{
    //     this.setState({
    //       isLoaded: true,
    //       products: data.products
    //     })
    //   })
  }

  btnOnClick (e) {
    const productsList = document.getElementsByClassName('productsList');
    (e.target.classList[1]==='productsNav--left') 
    ? productsList[1].scrollLeft -= (window.innerWidth/2)
    : productsList[1].scrollLeft += (window.innerWidth/2);
    console.log(productsList[1].scrollWidth - productsList[1].scrollLeft);
  }

  onSelectionChange = (e) => {
    this.props.history.push(`/products?page=1&category=${this.state.queryValues.category || ''}&search=${this.state.queryValues.search || ''}&order=${e.target.value || ''}&producer=${this.state.queryValues.producer || ''}&publisher=${this.state.queryValues.publisher || ''}&genre=${this.state.queryValues.genre || ''}`);
    // this.props.history.push(`/products?order=${e.target.value}`);
  }

  onSelectionChange = (e) => {
    this.props.history.push(`/products?page=1&category=${this.state.queryValues.category || ''}&search=${this.state.queryValues.search || ''}&order=${e.target.value || ''}&producer=${this.state.queryValues.producer || ''}&publisher=${this.state.queryValues.publisher || ''}&genre=${this.state.queryValues.genre || ''}`);
    // this.props.history.push(`/products?order=${e.target.value}`);
  }

  openSortWindow = () => {
    document.getElementsByClassName('productMobileSort')[0].style.display = "block";
  }

  openFilterWindow = () => {
    // document.getElementsByClassName('productsContent__filter')[0].style.display = "block";
    document.getElementsByClassName('productsContent__filter')[0].classList.remove('productsContent__filter--hidden');
  }

  render() {
    if (!this.state.isLoaded) {
      return <span>Loading...</span>;
    }
    return (
      <main className="productsWrapper">
        <div className="productsWrapper__container">
          <div className="productsWrapper__content">
            <h3 className="productsWrapper__title">{this.state.pageTitle}</h3>
            <div className="productsFilter">
              <button className="productsFilter__button" onClick={this.openFilterWindow}>
                <i className="fas fa-sliders-h"></i><span>Filtry</span>
              </button>
              <button className="productsFilter__button" onClick={this.openSortWindow}>
                <i className="fas fa-sort-amount-down"></i><span>Sortuj według</span>
              </button>
              <ProductMobileSort 
                value = {this.state.queryValues.order || ''} 
                onSelectionChange = {this.onSelectionChange} 
              />
            </div>
            <hr className="productsWrapper__line" />
            <div className="productsWrapper__sort">
              <span>Znaleziono {this.state.numberOfProducts} produktów</span>
              <ProductSort 
                value = {this.state.queryValues.order || ''} 
                queryValues = {this.state.queryValues} 
                onSelectionChange = {this.onSelectionChange} 
                key="pc" 
              />
            </div>
            <hr className="productsWrapper__line" />
            <div className="productsContent">
              <div className="productsContent__filter productsContent__filter--hidden">
                <ProductFilter queryValues = {this.state.queryValues} />
              </div>
              <div className="productsContent__results">
                <SearchContent 
                  products = {this.state.products} 
                  updateCart = {this.props.updateCart}
                />
                <ProductPagination 
                  numberOfProducts = {this.state.numberOfProducts}
                  limit = {this.state.limit} 
                  currentPage = {this.state.currentPage} 
                  getProductData = {this.changePage} 
                  queryValues = {this.state.queryValues}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

// const BtnOnClick = () => {
//   arr.push({'a': 1, 'b':2});
//   localStorage.setItem('CartItems', JSON.stringify(++cartItems));
//   localStorage.setItem('Cart', JSON.stringify(arr));
//   // var storage = localStorage.getItem('Cart');
//   // console.log(storage);
//   console.log(localStorage.getItem('CartItems'));
// }

export default Products;