import React from 'react';
import './PictureView.css';

const PictureView = (props) => {
  // const grafiki = props.grafiki.filter(photo=>photo.typ_grafiki!==0);
  let id = props.pictureNumber;
  // btnOnClick (e) {
  //   const productsList = document.getElementsByClassName('productsList');
  //   (e.target.classList[1]==='productsNav--left') 
  //   ? productsList[1].scrollLeft -= (window.innerWidth/2)
  //   : productsList[1].scrollLeft += (window.innerWidth/2);
  //   // console.log(productsList[1].scrollWidth - productsList[1].clientWidth);
  //   console.log(productsList[1].scrollWidth - productsList[1].scrollLeft);
  //   // this.props.addProduct({'title':'adaf','price': 12,'amount':1,'productId':1});
  // }

  const nextPicture = () => {

  }

  const previousPicture = () => {

  }

  const closePicture = () => {

  }

  return (
    <div className="pictureView">
      <div className="pictureView__header">
      
      </div>
      <div className="pictureView__content">
        <div className="pictureView__container">
          <button className="pictureView__button pictureView__button--left">
            <i className="fas fa-chevron-left"></i>
          </button>
          <div className="pictureView__image">
            
          </div>
          <button className="pictureView__button pictureView__button--right">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default PictureView;