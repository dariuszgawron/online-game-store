import React from 'react';

import './SearchContent.css';
import ProductCard from '../ProductCard/ProductCard';

const SearchContent = (props) => {
    return (
        <div className = "searchContent">{
            props.products.length === 0 
            ?   <div className="searchContent__error">
                    Brak danych spełniających podane kryteria
                </div> 
            :   props.products.map(
                    product => {
                        return <ProductCard 
                                    product = {product} 
                                    updateCart = {props.updateCart}
                                    key = {product.id_gry}
                                />
                    }
                )}
        </div>
    )
}

export default SearchContent;