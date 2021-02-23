import React from 'react';
import './PictureView.css';

const PictureView = (props) => {
  const images = props.images;
  const imageTitle = props.title;
  let pictureNumber = 0;
  let id = props.pictureNumber;
  let pictureIndex = 1;
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
    pictureIndex++;
    displayPicture(pictureIndex);
  }

  const prevPicture = () => {
    pictureIndex--;
    displayPicture(pictureIndex);
  }

  const displayPicture = (index) => {
    let pictures = document.getElementsByClassName('pictureView__image');
    let caption = document.getElementsByClassName('pictureView__caption');
    if (index > images.length)
      index = 1;
    else if (index < 1)
      index = images.length;
    let pictureIndex;
    for (pictureIndex = 0; pictureIndex < images.length; pictureIndex++ ) {
      pictures[pictureIndex].style.display = "none";
    }
    pictures[pictureIndex-1].style.display = "block";
  }

  const openPicture = (index) => {
    document.getElementsByClassName('pictureView')[0].style.display = "block";
    pictureIndex = index;
    displayPicture(pictureIndex);
  }

  const closePicture = () => {
    ducument.getElementsByClassName('pictureView')[0].style.display = "none";
  }

  return (
    <div className="pictureView">
      <span className="pictureView__close" onClick="closePicture()">&times;</span>
      <div className="pictureView__content">
        {images.map(image => {
          return (
            <div className="pictureView__image">
              <img src={image} alt={`${imageTitle} (${++pictureNumber})`} />
            </div>
          )
        })}
        
        

        <button className="pictureView__button pictureView__button--prev" onClick="nextPicture()">
          &#10094;
        </button>
        <button className="pictureView__button pictureView__button--next" onClick="prevPicture()">
          &#10095;
        </button>

        <div className="pictureView__caption"></div>
      </div>
    </div>
  )
}

export default PictureView;