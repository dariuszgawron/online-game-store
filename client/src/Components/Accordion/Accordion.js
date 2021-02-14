import React from 'react';
import {Link} from 'react-router-dom';

import './Accordion.css';

const Accordion = (props) => {
  const accordionContentShowHide = (e) => {
    e.currentTarget.classList.toggle('active');
    let accordionContent = e.currentTarget.nextElementSibling;
    console.log(accordionContent.style.display);
    accordionContent.style.display = accordionContent.style.display !== 'block' ? 'block' : 'none';
  }

  const createUrlParam = (param, value) => {
    const queryValue = props.queryValues[param] || '';
    const queryTab = queryValue.split(',').filter(el => el !== "");
    const index = queryTab.indexOf(value);
    index>=0 ? queryTab.splice(index,1) : queryTab.push(value);
    queryTab.sort();
    return queryTab.join(',');
  }

  const createUrl = (param, value) => {
    // const url = '/products?page=1';
    // for(let k in ['category','search','producer','publisher','genre','order']) {
    //   url += ``
    // }
    const category = (props.queryValues.category || '');
    const search = (props.queryValues.search || '');
    const producer = (param === 'producenci') ? createUrlParam('producer', value.toString()) : (props.queryValues.producer || '');
    const publisher = (param==='wydawcy') ? createUrlParam('publisher',value.toString()) : (props.queryValues.publisher || '');
    const genre = (param==='gatunki') ? createUrlParam('genre',value.toString()) : (props.queryValues.genre || '');
    const order = (props.queryValues.order || '');
    return `/products?page=1&category=${category}&search=${search}&producer=${producer}&publisher=${publisher}&genre=${genre}&order=${order}`;
  }

  return (
    <div className="accordion">
      <div className="accordion__toggle" onClick = {(e) => accordionContentShowHide(e)}>
        <span>
          {props.queryValues.producer && 
          <Link className="accordion__link2" to = {createUrl(props.table, '')}>
            <i className="accordion__remove far fa-times-circle"></i> 
          </Link>
          }
          {props.title}
        </span>
        <i className="fas fa-chevron-down"></i>
      </div>
      <div className="accordion__content">
        <ul className="accorion__list">
          {props.listOfElements.map(element => {
            return (
              <li className="accordion__element" key={props.id+element[props.fieldId].toString()}>
                <Link className="accordion__link" 
                    to = {createUrl(props.table, element[props.fieldId])}>
                  <input className="accordion__input" type='checkbox' name={`${props.table}${element[props.fieldId]}`} id={`${props.id}${element[props.fieldId]}`}/>
                  <label className="accordion__label" htmlFor={`${props.table}${element[props.fieldId]}`}>
                    {element[props.fieldName]}
                  </label> 
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Accordion;