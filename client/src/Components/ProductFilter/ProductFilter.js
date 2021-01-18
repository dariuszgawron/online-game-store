import React from 'react';
import {Link} from 'react-router-dom';

import './ProductFilter.css';

class ProductFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      listOfGenres: [],
      listOfProducers: [],
      listOfPublishers: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    // const genresUrl = `http://localhost:4001/genres`;
    // const producersUrl = `http://localhost:4001/producers`;
    // const publishersUrl = `http://localhost:4001/publishers`;
    // fetch(genresUrl)
    //   .then(res => res.json())
    //   .then(data => {
    //     this.setState({
    //       listOfGenres: ['akcja','dramat']
    //     });
    //     fetch(producersUrl)
    //       .then(res => res.json())
    //       .then(data => {
    //         this.setState({
    //           listOfProducers: ['ubisoft','ea']
    //         });
    //         fetch(publishersUrl)
    //           .then(res => res.json())
    //           .then(data => {
    //             this.setState({
    //               listOfPublishers: ['ubisoft'],
    //               isLoaded: true
    //             });
    //           })
    //       })
    //   })
  }

  accordionContentShowHide(e) {
    // console.log(e.target.classList);
    e.currentTarget.classList.toggle('active');
    let accordionContent = e.currentTarget.nextElementSibling;
    console.log(accordionContent.style.display);
    accordionContent.style.display = accordionContent.style.display !== 'block' ? 'block' : 'none';
  }

  createUrlParam(param, value) {
    const queryValue = this.props.queryValues[param] || '';
    const queryTab = queryValue.split(',').filter(el => el !== "");
    const index = queryTab.indexOf(value);
    index>=0 ? queryTab.splice(index,1) : queryTab.push(value);
    queryTab.sort();
    return queryTab.join(',');
  }

  render() {
    // if (!this.state.isLoaded) {
    //   return <span>Loading...</span>;
    // }
    return (
      <div className="productFilter">
        <div className="filter">
          <h2 className="filter__title">Filter</h2>
          <div className="accordion">
            <button className="accordion__toggle" onClick = {(e) => this.accordionContentShowHide(e)}>Gatunki</button>
            <div className="accordion__content">
              <ul className="accorion__list">
                <li className="accordion__element">
                  <Link className="accordion__link" 
                      to={`/products?page=1&category=${this.props.queryValues.category || ''}&search=${this.props.queryValues.search || ''}&order=${this.props.queryValues.order || ''}&producer=${this.createUrlParam('producer','1')}`}>
                    1 <br/>
                  </Link>
                  <Link className="accordion__link" 
                      to={`/products?page=1&category=${this.props.queryValues.category || ''}&search=${this.props.queryValues.search || ''}&order=${this.props.queryValues.order || ''}&producer=${this.createUrlParam('producer','2')}`}>
                    2 
                  </Link>
                </li>
              </ul>
            </div>
            <button className="accordion__toggle" onClick = {(e) => this.accordionContentShowHide(e)}>Producenci</button>
            <div className="accordion__content">
              <ul className="accorion__list">
                <li className="accordion__element">
                  Coś 2
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductFilter;