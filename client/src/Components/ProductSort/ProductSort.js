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
      <div className="productSort__mobile">
        <div className="productSort__header">
          <h4>Sortowanie</h4>
        </div>
        <div className="productSort__group">
          <li className="productSort__listItem">
            <label className="productSort__radioLabel">
              <input className="productSort__radio" type="radio" name="sort" id="all" value="" checked={props.value===""} onChange={props.onSelectionChange} />
              <span className="productSort__desc">Brak</span>
            </label>
          </li>
          <li className="productSort__listItem">
            <label className="productSort__radioLabel">
              <input className="productSort__radio" type="radio" name="sort" id="titleAsc" value="tytul-asc" checked={props.value==="tytul-asc"} onChange={props.onSelectionChange} />
              <span className="productSort__desc">Od A do Z</span>
            </label>
          </li>
          <li className="productSort__listItem">
            <label className="productSort__radioLabel">
              <input className="productSort__radio" type="radio" name="sort" id="titleDesc" value="tytul-desc" checked={props.value==="tytul-desc"} onChange={props.onSelectionChange} />
              <span className="productSort__desc">Od Z do A</span>
            </label>
          </li>
          <li className="productSort__listItem">
            <label className="productSort__radioLabel">
              <input className="productSort__radio" type="radio" name="sort" id="dateDesc" value="data-desc" checked={props.value==="data-desc"} onChange={props.onSelectionChange} />
              <span className="productSort__desc">Od najnowszych</span>
            </label>
          </li>
          <li className="productSort__listItem">
            <label className="productSort__radioLabel">
              <input className="productSort__radio" type="radio" name="sort" id="dateAsc" value="data-asc" checked={props.value==="data-asc"} onChange={props.onSelectionChange} />
              <span className="productSort__desc">Od najstarszych</span>
            </label>
          </li>
        </div>
        <div className="productSort__footer">
          <button className="productSort__button" onClick = {showResults}>
            Zobacz wyniki
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductSort;