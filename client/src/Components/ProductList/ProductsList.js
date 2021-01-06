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
        <div className="productsList">
            {
                props.products.map(
                    product=>{
                        // return <button business={recommended.tytul} key={recommended.id_gry}>{recommended.tytul}</button>;
                        return <ProductCard product={product} addProduct={props.addProduct} key={product.id_gry}/>
                    }
                )
            }
        </div>
        
    )
}

export default ProductsList;