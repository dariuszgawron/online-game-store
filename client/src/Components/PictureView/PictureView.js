import React from 'react';
import './PictureView.css';

const PictureView = (props) => {
  const images = props.images;
  const imageTitle = props.title;
  let pictureNumber = 0;
  // let id = props.pictureNumber;
  // let pictureIndex = 1;
  // displayPicture(pictureIndex);

  const nextPicture = () => {
    // pictureIndex++;
    props.displayPicture(1);
  }

  const prevPicture = () => {
    // pictureIndex--;
    props.displayPicture(-1);
  }

  // const displayPicture = (index) => {
  //   if (document.getElementsByClassName('pictureView__image')[0] && 
  //       document.getElementsByClassName('pictureView__caption')[0])
  //   {
  //     let pictures = document.getElementsByClassName('pictureView__image');
  //     let caption = document.getElementsByClassName('pictureView__caption');
  //     if (index > images.length)
  //       index = 1;
  //     else if (index < 1)
  //       index = images.length;
  //     let pictureIndex;
  //     for (pictureIndex = 0; pictureIndex < images.length; pictureIndex++ ) {
  //       pictures[pictureIndex].style.display = "none";
  //     }
  //     pictures[pictureIndex-1].style.display = "block";
  //     caption.innerHTML = `${imageTitle} +(${pictureIndex})`;
  //   }
  // }

  // const openPicture = (index) => {
  //   document.getElementsByClassName('pictureView')[0].style.display = "block";
  //   pictureIndex = index;
  //   displayPicture(pictureIndex);
  // }

  const closePicture = () => {
    if(document.getElementById('pictureView'))
      document.getElementById('pictureView').style.display = "none";
  }

  return (
    <div className = "pictureView" id = "pictureView">
      <span className = "pictureView__close" onClick = {() => closePicture()}>&times;</span>
      <div className = "pictureView__content">
        {images.map((image,index) => {
          return (
            <div className = "pictureView__image" key = {`picture${index}`}>
              <img src = {image.sciezka_do_pliku} alt = {`${imageTitle} (${++pictureNumber})`} />
            </div>
          )
        })}

        <button className = "pictureView__button pictureView__button--prev" 
                onClick = {() => nextPicture()}>
          &#10094;
        </button>
        <button className = "pictureView__button pictureView__button--next" 
                onClick = {() => prevPicture()}>
          &#10095;
        </button>

        <div className = "pictureView__caption"></div>
      </div>
    </div>
  )
}

export default PictureView;