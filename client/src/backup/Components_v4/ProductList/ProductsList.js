import React from 'react';
import './ProductsList.css';
import ProductCard from '../ProductCard/ProductCard';

// class ProductsList extends React.Component {
//     render() {
//         return (
//             <div className="productsList">
//                 {
//                     this.props.products.map(
//                         product=>{
//                             // return <button business={recommended.tytul} key={recommended.id_gry}>{recommended.tytul}</button>;
//                             return <ProductCard product={product} key={product.id_gry}/>
//                         }
//                     )
//                 }
//             </div>
            
//         )
//     }
// }
const ProductsList = (props) => {
    return (
        <div className = "productsList">{
            props.products.length === 0 
            ?   <div className="productList__error">Brak danych spełniających podane kryteria</div> 
            :   props.products.map(
                    product=>{
                        // return <button business={recommended.tytul} key={recommended.id_gry}>{recommended.tytul}</button>;
                        return <ProductCard product = {product} 
                                    updateCart = {props.updateCart}
                                    key = {product.id_gry}
                                />
                    }
                )}
        </div>
        
    )
}
const ProductsList = (props) => {
    return (
        <div className="productList">
            <div className="productList__container">
                <div className="productList__content">
                    <div className="productList__header">
                        <h3 className="productList__title"></h3>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default ProductsList;