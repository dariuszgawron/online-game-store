import React from 'react';
import './ProductDetails.css';

const ProductDetails = (props) => {
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

  const dateFormat = (date) => {
    // const dateParts = date.split('T')[0].split('-');
    const dateFormat = new Date(date).toLocaleDateString('pl-PL',{year: 'numeric', month: 'long', day: 'numeric'});
    return dateFormat;
  }

  const generateStars = (average) => {
    let stars = [];
    for(let i = 1; i<= 5; i++) {
      if(i <= average)
        stars.push(<i className="star__icon star__icon--full fas fa-star"></i>)
      else if (0.25 <= (i - average) & (i - average) <= 0.75)
        stars.push(<i className="star__icon star__icon--half fas fa-star-half-alt"></i>)
      else 
        stars.push(<i className="star__icon star__icon--empty fas fa-star"></i>)
    }
    return stars;
  };
  
  return (
    <div className="productPage__description">
      <div className="productPage__cover">
        <img src = { props.product.grafiki.filter((image) => image.typ_grafiki === 0)[0].sciezka_do_pliku} alt='jakiś tekst'  
        />
      </div>
      <div className="productPage__details">
        <div className="productDetails">
          <span className="productDetails__label">Ocena:</span>
          <p className="productDetails__content">
            {generateStars(3.25)} (4.25) / 19 głosów
          </p>
        </div>
        <div className="productDetails">
          <span className="productDetails__label">Data wydania:</span>
          <p className="productDetails__content">{dateFormat(props.product.data_wydania)}</p>
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


export default ProductDetails;