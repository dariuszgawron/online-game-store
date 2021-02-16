import React from 'react';
import './ProductDescription.css';

const ProductDescription = (props) => {
  const gatunki = props.product.gatunki.map((gatunek)=>{
    return gatunek.nazwa_gatunku
  }).join(", ");
  const wydawcy = props.product.wydawcy.map((product)=>{
    return product.nazwa_wydawcy
  }).join(", ");
  const producenci = props.product.producenci.map((product)=>{
      return product.nazwa_producenta
    }).join(", ");
  const jezyki =  props.product.jezyki.map((product)=>{
    return product.nazwa_skrocona
  }).join(", ");
  // const liczbaOcen = props.product.oceny_gier.map((product) => product.ocena).length;
  // const liczbaOcen = 5;
  // const sredniaOcen = (props.product.oceny_gier.reduce((x, y) => x + y, 0) / liczbaOcen).toFixed(2);
  
  return (
    <div className="productPage__description">
      <div className="productPage__cover">
        <img src = { props.product.grafiki.filter((image) => image.typ_grafiki === 0)[0].sciezka_do_pliku} alt='jakiś tekst'  
        />
      </div>
      <div className="productPage__details">
        <div className="productDetails">
          <span className="productDetails__label">Ocena:</span>
          <p className="productDetails__content">***** (4.25) / 19 głosów</p>
        </div>
        <div className="productDetails">
          <span className="productDetails__label">Data wydania:</span>
          <p className="productDetails__content">21.12.2020</p>
        </div>
        <div className="productDetails">
          <span className="productDetails__label">Kategoria wiekowa:</span>
          <p className="productDetails__content">{props.product.kategoria_wiekowa}</p>
        </div>
        <div className="productDetails">
          <span className="productDetails__label">Wydawca:</span>
          <p className="productDetails__content">{wydawcy}</p>
        </div>
        <div className="productDetails">
          <span className="productDetails__label">Producent:</span>
          <p className="productDetails__content">{producenci}</p>
        </div>
        <div className="productDetails">
          <span className="productDetails__label">Języki:</span>
          <p className="productDetails__content">{jezyki}</p>
        </div>
        <div className="productDetails">
          <span className="productDetails__label">Platforma:</span>
          <p className="productDetails__content">{props.product.platformy[0].nazwa}</p>
        </div>
        <div className="productDetails">
          <span className="productDetails__label">Gatunek:</span>
          <p className="productDetails__content">{gatunki}</p>
        </div>
      </div>
    </div>
  );
}


export default ProductDescription;