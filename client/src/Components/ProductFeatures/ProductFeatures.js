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

  render() {
    return (
      <div className="productPage__features">
        <ul className="bar">
          <li className="bar__item bar__item--active" onClick={(e) => this.openTab(e,'Description')}>Opis</li>
          <li className="bar__item" onClick={(e) => this.openTab(e,'Gallery')}>Galeria</li>
          <li className="bar__item" onClick={(e) => this.openTab(e,'Requirements')}>Wymagania</li>
        </ul>
        {/* <div className="bar">
          <button className="bar__item bar__item--active" onClick={(e) => this.openTab(e,'Description')}>Opis</button>
          <button className="bar__item" onClick={(e) => this.openTab(e,'Gallery')}>Galeria</button>
          <button className="bar__item" onClick={(e) => this.openTab(e,'Requirements')}>Wymagania</button>
        </div> */}

        <ProductRequirements 
          wymagania={this.props.product.wymagania} 
        />
        
        <ProductGallery 
          grafiki={this.props.product.grafiki} 
          zwiastuny={this.props.product.zwiastuny} 
        />
        
      </div>
    );
  }
}

export default ProductFeatures;