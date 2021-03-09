import React from 'react';

import './ProductSort.css';

const ProductSort = (props) => {
  const showResults = () => {
    const sortWindow = document.getElementsByClassName('productSort__mobile')[0];
    sortWindow.style.display = "none";
  }

  return (
    <div className="productSort">
      <label className="productSort__label" htmlFor="order" id="order">Sortuj według: </label> 
      <select className="productSort__select" value={props.value} name="order" onChange={props.onSelectionChange}>
        <option value="">Wybierz</option>
        <option value="tytul-asc">Od A do Z</option>
        <option value="tytul-desc">Od Z do A</option>
        <option value="data-desc">Od najnowszych</option>
        <option value="data-asc">Od najstarszych</option>
      </select>
    </div>
  )
}

export default ProductSort;