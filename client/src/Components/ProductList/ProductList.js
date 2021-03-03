import React from 'react';
import {Link} from 'react-router-dom';

import './ProductList.css';
import ProductSlider from '../ProductSlider/ProductSlider';
// import ProductCard from '../ProductCard/ProductCard';

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
// const ProductList = (props) => {
//     return (
//         <div className = "productList">{
//             props.products.length === 0 
//             ?   <div className="productList__error">Brak danych spełniających podane kryteria</div> 
//             :   props.products.map(
//                     product=>{
//                         // return <button business={recommended.tytul} key={recommended.id_gry}>{recommended.tytul}</button>;
//                         return <ProductCard product = {product} 
//                                     updateCart = {props.updateCart}
//                                     key = {product.id_gry}
//                                 />
//                     }
//                 )}
//         </div>
        
//     )
// }
const ProductList = (props) => {
    return (
        <div className="productList">
            <div className="productList__container">
                <div className="productList__content">
                    <div className="productList__header">
                        <h3 className="productList__title">{props.title}</h3>
                        <Link className="productList__button" to = ''>Zobacz więcej ></Link>
                    </div>
                    <hr/>
                    <ProductSlider products={props.products} updateCart={props.updateCart} />
                </div>
            </div>
        </div>
    )
}

export default ProductList;