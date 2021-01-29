import React from 'react';
import './ProductGallery.css';

class ProductGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false
    };
    // this.btnOnClick = this.btnOnClick.bind(this);
  }

  // btnOnClick (e) {
  //   const productsList = document.getElementsByClassName('productsList');
  //   (e.target.classList[1]==='productsNav--left') 
  //   ? productsList[1].scrollLeft -= (window.innerWidth/2)
  //   : productsList[1].scrollLeft += (window.innerWidth/2);
  //   // console.log(productsList[1].scrollWidth - productsList[1].clientWidth);
  //   console.log(productsList[1].scrollWidth - productsList[1].scrollLeft);
  //   // this.props.addProduct({'title':'adaf','price': 12,'amount':1,'productId':1});
  // }

  render() {
    const grafiki = this.props.grafiki.filter(photo=>photo.typ_grafiki!==0);
    const zwiastuny = this.props.zwiastuny;
    return (
      <div className="productGallery tab" id="Gallery">
        {/* <div className="gallery"> */}
          {grafiki.map(photo=>{
            return <img src={photo.sciezka_do_pliku} />
          })}
          {zwiastuny.map(zwiastun => {
            return <iframe width="100%" height="200px" src="https://www.youtube.com/embed/LXK905yxHQg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe>
          })}
        {/* </div> */}
      </div>
    );
  }
}

export default ProductGallery;