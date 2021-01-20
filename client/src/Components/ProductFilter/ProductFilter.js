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

  componentDidUpdate(prevProps) {
    if(prevProps.queryValues !== this.props.queryValues){
      const [publisherAdd, publisherDel] = this.propsDiff(prevProps,'publisher');
      const [producerAdd, producerDel] = this.propsDiff(prevProps,'producer');
      const [genreAdd, genreDel] = this.propsDiff(prevProps,'genre');
      this.checkboxChecked(publisherAdd, 'wydawca', true);
      this.checkboxChecked(publisherDel, 'wydawca', false);
      this.checkboxChecked(producerAdd, 'wydawca', true);
      this.checkboxChecked(producerDel, 'wydawca', false);
      this.checkboxChecked(genreAdd, 'wydawca', true);
      this.checkboxChecked(genreDel, 'wydawca', false);
      // this.checkboxChecked();
    }
  }

  propsDiff(prevProps,paramName) {
    const currString = this.props.queryValues[paramName] || '';
    const currValues = currString.split(',').filter(el => el !== "");
    const prevString = prevProps.queryValues[paramName] || '';
    const prevValues = prevString.split(',').filter(el => el !== "");
    const addValues = currValues.filter(el => !prevValues.includes(el));
    const delValues = prevValues.filter(el => !currValues.includes(el));
    return [addValues, delValues];
  }

  getData() {
    const genresUrl = `http://localhost:4001/genres`;
    const producersUrl = `http://localhost:4001/producers`;
    const publishersUrl = `http://localhost:4001/publishers`;
    fetch(genresUrl)
      .then(res => res.json())
      .then(data => {
        this.setState({
          listOfGenres: data.genres
        });
        fetch(producersUrl)
          .then(res => res.json())
          .then(data => {
            this.setState({
              listOfProducers: data.producers
            });
            fetch(publishersUrl)
              .then(res => res.json())
              .then(data => {
                this.setState({
                  listOfPublishers: data.publishers,
                  isLoaded: true
                },() => {
                  const publisherQueryValue = this.props.queryValues['publisher'] || '';
                  const publisherTab = publisherQueryValue.split(',').filter(el => el !== "");
                  const producerQueryValue = this.props.queryValues['producer'] || '';
                  const producerTab = producerQueryValue.split(',').filter(el => el !== "");
                  this.checkboxChecked(publisherTab,'wydawca',true);
                  this.checkboxChecked(producerTab,'producent',true);
                  // this.checkboxChecked();
                });
              })
          })
      })
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

  // checkboxChecked() {
  //   // const producerQueryValue = this.props.queryValues['producer'] || '';
  //   const publisherQueryValue = this.props.queryValues['publisher'] || '';
  //   // const genreQueryValue = this.props.queryValues['genre'] || '';
  //   // const producerTab = producerQueryValue.split(',').filter(el => el !== "");
  //   const publisherTab = publisherQueryValue.split(',').filter(el => el !== "");
  //   // const genreTab = genreQueryValue.split(',').filter(el => el !== "");
  //   publisherTab.forEach((item,index) => {
  //     document.getElementById(`wydawca${item}`).checked = true;
  //   });
  //   // document.getElementById("checkbox").checked = true;
  // }

  checkboxChecked(arrayItems, paramName, checked) {
    arrayItems.forEach((item,index) => {
      document.getElementById(`${paramName}${item}`).checked = checked;
    });
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
                {this.state.listOfGenres.map(gatunek => {
                  return (
                    <li className="accordion__element">
                      <Link className="accordion__link" 
                          to={`/products?page=1&category=${this.props.queryValues.category || ''}&search=${this.props.queryValues.search || ''}&order=${this.props.queryValues.order || ''}&producer=${this.props.queryValues.producer || ''}&publisher=${this.props.queryValues.publisher || ''}&genre=${this.createUrlParam('genre',gatunek.id_gatunku.toString())}`}>
                        {gatunek.nazwa_gatunku} 
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
            <button className="accordion__toggle" onClick = {(e) => this.accordionContentShowHide(e)}>Producenci</button>
            <div className="accordion__content">
              <ul className="accorion__list">
                {this.state.listOfProducers.map(producent => {
                  return (
                    <li className="accordion__element">
                      <Link className="accordion__link" 
                          to={`/products?page=1&category=${this.props.queryValues.category || ''}&search=${this.props.queryValues.search || ''}&order=${this.props.queryValues.order || ''}&genre=${this.props.queryValues.genre || ''}&publisher=${this.props.queryValues.publisher || ''}&producer=${this.createUrlParam('producer',producent.id_producenta.toString())}`}>
                        {producent.nazwa_producenta} 
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>

            <button className="accordion__toggle" onClick = {(e) => this.accordionContentShowHide(e)}>Wydawcy</button>
            <div className="accordion__content">
              <ul className="accorion__list">
                {this.state.listOfPublishers.map(wydawca => {
                  return (
                    <li className="accordion__element">
                      <Link className="accordion__link" 
                          to={`/products?page=1&category=${this.props.queryValues.category || ''}&search=${this.props.queryValues.search || ''}&order=${this.props.queryValues.order || ''}&genre=${this.props.queryValues.genre || ''}&producer=${this.props.queryValues.producer || ''}&publisher=${this.createUrlParam('publisher',wydawca.id_wydawcy.toString())}`}>
                        <input type='checkbox' name={`wydawca${wydawca.id_wydawcy}`} id={`wydawca${wydawca.id_wydawcy}`}/>
                        <label for={`wydawca${wydawca.id_wydawcy}`}>{wydawca.nazwa_wydawcy}</label>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductFilter;