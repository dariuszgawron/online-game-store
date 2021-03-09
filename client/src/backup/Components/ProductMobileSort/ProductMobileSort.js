import React from 'react';

import './ProductMobileSort.css';

const ProductMobileSort = (props) => {
  const showResults = () => {
    const sortWindow = document.getElementsByClassName('productMobileSort')[0];
    sortWindow.style.display = "none";
  }

  return (
    <div className="productMobileSort">
      <div className="productMobileSort__header">
        <h4>Sortowanie</h4>
        <span className = "productMobileSort__close" onClick = {showResults}>&#10006;</span>
      </div>
      <div className="productMobileSort__group">
        <li className="productMobileSort__listItem">
          <label className="productMobileSort__radioLabel">
            <input className="productMobileSort__radio" type="radio" name="sort" id="all" value="" checked={props.value===""} onChange={props.onSelectionChange} />
            <span className="productMobileSort__desc">Brak</span>
          </label>
        </li>
        <li className="productMobileSort__listItem">
          <label className="productMobileSort__radioLabel">
            <input className="productMobileSort__radio" type="radio" name="sort" id="titleAsc" value="tytul-asc" checked={props.value==="tytul-asc"} onChange={props.onSelectionChange} />
            <span className="productMobileSort__desc">Od A do Z</span>
          </label>
        </li>
        <li className="productMobileSort__listItem">
          <label className="productMobileSort__radioLabel">
            <input className="productMobileSort__radio" type="radio" name="sort" id="titleDesc" value="tytul-desc" checked={props.value==="tytul-desc"} onChange={props.onSelectionChange} />
            <span className="productMobileSort__desc">Od Z do A</span>
          </label>
        </li>
        <li className="productMobileSort__listItem">
          <label className="productMobileSort__radioLabel">
            <input className="productMobileSort__radio" type="radio" name="sort" id="dateDesc" value="data-desc" checked={props.value==="data-desc"} onChange={props.onSelectionChange} />
            <span className="productMobileSort__desc">Od najnowszych</span>
          </label>
        </li>
        <li className="productMobileSort__listItem">
          <label className="productMobileSort__radioLabel">
            <input className="productMobileSort__radio" type="radio" name="sort" id="dateAsc" value="data-asc" checked={props.value==="data-asc"} onChange={props.onSelectionChange} />
            <span className="productMobileSort__desc">Od najstarszych</span>
          </label>
        </li>
      </div>
      <div className="productMobileSort__footer">
        <button className="productMobileSort__button" onClick = {showResults}>
          Zobacz wyniki
        </button>
      </div>
    </div>
  )
}

export default ProductMobileSort;