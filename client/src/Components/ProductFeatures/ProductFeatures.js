import React from 'react';

import './ProductFeatures.css';
import ProductRequirements from '../ProductRequirements/ProductRequirements';
import ProductGallery from '../ProductGallery/ProductGallery';

class ProductFeatures extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false
    };
    // this.openTab = this.openTab.bind(this);
  }

  openTab (e, tabName) {
    let i, tabsItems, barItems;
    tabsItems = document.getElementsByClassName('tab');
    for(i = 0; i < tabsItems.length; i++)
      tabsItems[i].style.display = "none";
    barItems = document.getElementsByClassName('bar')[0].childNodes;
    for( i = 0; i < barItems.length; i++)
      barItems[i].className = barItems[i].className.replace(" bar__item--active", "");
    document.getElementById(tabName).style.display = "grid";
    e.target.className += " bar__item--active";
  }

  openAccordion (e, id) {
    let accordionSections = document.getElementsByClassName('bar--accordion')[0].getElementsByClassName('bar__item');
    console.log(e.currentTarget.nextSibling);
    let section = e.currentTarget.nextSibling;
    for( let i = 0; i < accordionSections.length; i++) {
      accordionSections[i].nextSibling.style.display = "none";
    }
    section.style.display = "grid";
  }

  render() {
    return (
      <div className="productPage__features">
        <ul className="bar bar--tab">
          <li className="bar__item bar__item--active" id="barDefault" onClick={(e) => this.openTab(e,'Description')}>Opis</li>
          <li className="bar__item" onClick={(e) => this.openTab(e,'Gallery')}>Galeria</li>
          <li className="bar__item" onClick={(e) => this.openTab(e,'Requirements')}>Wymagania</li>
        </ul>
        <div className="accordionContent">
          <div className="productDescription tab" id="Description">
            <p>{this.props.product.opis}</p>
          </div>
          <ProductRequirements 
            wymagania={this.props.product.wymagania} 
          />
          <ProductGallery 
            grafiki = {this.props.product.grafiki} 
            zwiastuny = {this.props.product.zwiastuny} 
            tytul = {this.props.product.tytul}
          />
        </div>

        <div className="bar bar--accordion">
          <button className="bar__item bar__item--active" id="berDefault" onClick={(e) => this.openAccordion(e,'Description')}>
            <i className="fas fa-angle-right"></i><span>Opis</span>
          </button>
          <div className="productDescription tab" id="Description">
            <p>{this.props.product.opis}</p>
          </div>
          <button className="bar__item" onClick={(e) => this.openAccordion(e,'Gallery')}>
            <i className="fas fa-angle-right"></i><span>Galeria</span>
          </button>
          <ProductGallery 
            grafiki = {this.props.product.grafiki} 
            zwiastuny = {this.props.product.zwiastuny} 
            tytul = {this.props.product.tytul}
          />
          <button className="bar__item" onClick={(e) => this.openAccordion(e,'Requirements')}>
            <i className="fas fa-angle-right"></i><span>Wymagania</span>
          </button>
          <ProductRequirements 
            wymagania={this.props.product.wymagania} 
          />
        </div>
      </div>
    );
  }
}

export default ProductFeatures;