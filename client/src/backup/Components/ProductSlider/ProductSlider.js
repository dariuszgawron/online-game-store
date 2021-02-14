import React from 'react';

import './ProductSlider.css';
import ProductCard from '../ProductCard/ProductCard';

const ProductSlider = (props) => {
    const scrollLeft = (e) => {
        e.currentTarget.nextElementSibling.scrollLeft -= (window.innerWidth/2);
        // console.log(e.currentTarget.nextElementSibling.scrollWidth - (e.currentTarget.nextElementSibling.scrollLeft - (window.innerWidth/2)));
        // console.log(e.currentTarget.nextElementSibling.scrollWidth - e.currentTarget.nextElementSibling.clientWidth);
    }
    const scrollRight = (e) => {
        e.currentTarget.previousElementSibling.scrollLeft += (window.innerWidth/2);
        // console.log(e.currentTarget.previousElementSibling.scrollWidth - (e.currentTarget.previousElementSibling.scrollLeft) - window.innerWidth);
        // e.currentTarget.previousElementSibling.scrollLeft += (e.currentTarget.previousElementSibling.scrollWidth/2);
        console.log(e.currentTarget.previousElementSibling.scrollLeft);
    } 
    return (
        <div className = "productSlider">
            <button className = "productSlider__control productSlider__control--left" 
                    onClick = {scrollLeft}>
                <i class="fas fa-chevron-left"></i>
            </button>
            <div className = "productSlider__content">{
                props.products.length === 0
                ?   <div className = "productList__error">
                        Brak danych spełniających podane kryteria
                    </div> 
                :   props.products.map(product => 
                        <ProductCard product = {product} updateCart = {props.updateCart} key = {product.id_gry} />
                    )}
            </div>
            <button className = "productSlider__control productSlider__control--right" 
                    onClick = {scrollRight}>
                <i class="fas fa-chevron-right"></i>
            </button>
        </div>
    )
}

export default ProductSlider;