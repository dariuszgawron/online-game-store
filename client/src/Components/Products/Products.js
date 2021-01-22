import React from 'react';
import queryString from 'query-string';
import './Products.css';

import ProductsList from '../ProductList/ProductsList';
import ProductFilter from '../ProductFilter/ProductFilter';
import ProductPagination from '../ProductPagination/ProductPagination';
import ProductSort from '../ProductSort/ProductSort';

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      numberOfProducts: 0,
      limit: 20,
      currentPage: 1,
      queryValues: '',
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
    fetch(productsUrl)
      .then(res => res.json())
      .then(data=>{
        this.setState({
          isLoaded: true,
          products: data.products,
          numberOfProducts: data.rowCount,
          currentPage: currentPage,
          queryValues: queryValues
        });
      })
      .catch(console.log(`Zaktualizowano dane`));
  }

  // componentDidMount() {
  //   const queryValues = queryString.parse(this.props.location.search);
  //   const currentPage = queryValues.page || 1;
  //   this.setState({
  //     currentPage: currentPage
  //   });
  //   this.getProductData();
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   const prevQueryValues = queryString.parse(prevProps.location.search);
  //   const queryValues = queryString.parse(this.props.location.search);
  //   const queryParams = Object.keys(this.props.location.search).length ? '&'+this.props.location.search.substring(1) : '';
  //   // const productsUrl = `http://localhost:4001/products?limit=${this.state.limit}${queryParams}`;
  //   // const numberOfProductsUrl = 'http://localhost:4001/products/count';
  //   const prevPage = prevQueryValues.page ? prevQueryValues.page : '1';
  //   const currPage = queryValues.page ? queryValues.page : '1';
  //   // const currentPage = queryValues.page || 1;
  //   // const offset = (currentPage-1)*20;
  //   if(prevPage !== currPage || prevQueryValues.search !== queryValues.search ||prevQueryValues.sort !== queryValues.sort || prevQueryValues.genre !== queryValues.genre || prevQueryValues.producer !== queryValues.producer || prevQueryValues.publisher !== queryValues.publisher || prevQueryValues.category !== queryValues.category) {
      
  //     this.getProductsData(queryParams);
  //   };
  // }

  // getProductsData(queryParams='') {
  //   const productsUrl = `http://localhost:4001/products?limit=${this.state.limit}${queryParams}`;
  //   // const numberOfProductsUrl = 'http://localhost:4001/products/count';
  //   fetch(productsUrl)
  //     .then(res => res.json())
  //     .then(data=>{
  //       this.setState({
  //         isLoaded: true,
  //         products: data.products,
  //         numberOfProducts: data.pagination.rowCount
  //       });
  //       // fetch(numberOfProductsUrl)
  //       //   .then(res => res.json())
  //       //   .then(data => {
  //       //     this.setState({
  //       //       isLoaded: true,
  //       //       // numberOfProducts: data.products[0].totalNumber,

  //       //     });
  //       //   });
  //     })
  //     .catch(console.log('Zaktualizowano dane'));
  // }

  // getProductData() {
  //   const queryValues = queryString.parse(this.props.location.search);
  //   const currentPage = queryValues.page || 1;
  //   const offset = (currentPage-1)*20;
  //   const productsUrl = `http://localhost:4001/products?limit=${this.state.limit}&offset=${offset}`;
  //   const numberOfProductsUrl = 'http://localhost:4001/products/count';
  //   fetch(productsUrl)
  //     .then(res => res.json())
  //     .then(data=>{
  //       this.setState({
  //         products: data.products
  //       });
  //       fetch(numberOfProductsUrl)
  //         .then(res => res.json())
  //         .then(data => {
  //           this.setState({
  //             isLoaded: true,
  //             numberOfProducts: data.products[0].totalNumber
  //           });
  //         });
  //     })
  //     .catch(console.log('Załadowano dane'));
  // }

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
    // console.log(productsList[1].scrollWidth - productsList[1].clientWidth);
    console.log(productsList[1].scrollWidth - productsList[1].scrollLeft);
    // this.props.addProduct({'title':'adaf','price': 12,'amount':1,'productId':1});
  }

  onSelectionChange = (e) => {
    this.props.history.push(`/products?page=1&category=${this.state.queryValues.category || ''}&search=${this.state.queryValues.search || ''}&order=${e.target.value || ''}&producer=${this.state.queryValues.producer || ''}&publisher=${this.state.queryValues.publisher || ''}&genre=${this.state.queryValues.genre || ''}`);
    // this.props.history.push(`/products?order=${e.target.value}`);
  }

  render() {
    if (!this.state.isLoaded) {
      return <span>Loading...</span>;
    }
    return (
      <main className="mainWrapper">
        <div className="mainWrapper__container">
          <h3 className="mainWrapper__title">Polecane</h3>
          <ProductSort value={this.state.queryValues.order || ''} queryValues={this.state.queryValues} onSelectionChange={this.onSelectionChange} />
          {/* <div className="productSort">
            <label className="productSort__label" for="order" id="order">Sortuj: </label> 
            <select className="productSort__select" name="order" onChange={this.onChange}>
              <option value="">Wybierz</option>
              <option value="tytul-asc">Od A do Z</option>
              <option value="tytul-desc">Od Z do A</option>
              <option value="tytul-asc">Od najnowszych</option>
              <option value="tytul-desc">Od najstarszych</option>
            </select>
          </div> */}
          <div className="gridPanel">
            <div className="gridPanel__left">
              <ProductFilter queryValues={this.state.queryValues} />
            </div>
            <div className="gridPanel__right">
              <div className="mainWrapper__products">
                <ProductsList 
                  products={this.state.products} 
                  addProduct={this.props.addProduct}
                />
              </div>
              <ProductPagination 
                numberOfProducts={this.state.numberOfProducts}
                limit={this.state.limit} 
                currentPage={this.state.currentPage} 
                getProductData={this.changePage} 
                queryValues={this.state.queryValues}
              />
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