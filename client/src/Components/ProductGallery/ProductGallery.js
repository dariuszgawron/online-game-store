import React from 'react';
import './ProductGallery.css';
import PictureView from '../PictureView/PictureView';

class ProductGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false
    };
    this.images = this.props.grafiki.filter(photo=>photo.typ_grafiki!==0);
    this.productTitle = this.props.tytul;
    this.pictureIndex = 1;
    // this.openPicture = this.openPicture.bind(this);
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
  

  nextPicture = () => {
    this.pictureIndex++;
    this.displayPicture(this.pictureIndex);
  }

  prevPicture = () => {
    this.pictureIndex--;
    this.displayPicture(this.pictureIndex);
  }

  displayPicture (index) {
    console.log(index);
    if (document.getElementsByClassName('pictureView__image')[0] && 
        document.getElementsByClassName('pictureView__caption')[0])
    {
      let pictures = document.getElementsByClassName('pictureView__image');
      let caption = document.getElementsByClassName('pictureView__caption')[0];
      if (index >= this.images.length)
        index = 0;
      else if (index < 0)
        index = this.images.length-1;
      this.pictureIndex = index;
      for (let index = 0; index < this.images.length; index++ ) {
        pictures[index].style.display = "none";
      }
      pictures[this.pictureIndex].style.display = "block";
      caption.innerHTML = `${this.productTitle} (${this.pictureIndex+1}/${this.images.length})`;
    }
  }

  openPicture (index) {
    if (document.getElementsByClassName('pictureView')[0]) {
      document.getElementsByClassName('pictureView')[0].style.display = "block";
      this.pictureIndex = index;
      this.displayPicture(this.pictureIndex);
    }
  }

  closePicture () {
    if (document.getElementById('pictureView'))
      document.getElementById('pictureView').style.display = "none";
  }

  render() {
    // const openPicture = (index) => {
    //   console.log('ok');
    //   if (document.getElementsByClassName('pictureView')[0]) {
    //     document.getElementsByClassName('pictureView')[0].style.display = "block";
    //     this.pictureIndex = index;
    //     // this.displayPicture(this.pictureIndex);
    //   }
    // }
    
    const grafiki = this.props.grafiki.filter(photo => photo.typ_grafiki !== 0);
    const zwiastuny = this.props.zwiastuny;
    return (
      <div className = "productGallery tab" id = "Gallery">
        <PictureView images={grafiki} productTitle = {this.productTitle} 
                      closePicture = {() => this.closePicture} 
                      displayPicture = {() => this.displayPicture}
                      nextPicture = {() => this.nextPicture}
                      prevPicture = {() => this.prevPicture} />
        {/* <div className="gallery"> */}
          {grafiki.map((photo,index) => {
            return <img src = {photo.sciezka_do_pliku} 
                        onClick = {() => this.openPicture(index)} 
                        alt = {`${this.productTitle} (${index+1})`} 
                        key = {`${this.productTitle}${index}`}  
                    />
          })}
          {zwiastuny.map((zwiastun,index) => {
            return <iframe width="100%" height="200px" key={`zwiastun${index}`} src={`${zwiastun.link.replace("watch?v=","embed/")}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"></iframe>
          })}
        {/* </div> */}
      </div>
    );
  }
}

export default ProductGallery;