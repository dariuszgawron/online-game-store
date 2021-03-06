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
    let url = `/products?page=1`;
    url += `&category=` + (props.queryValues.category || '');
    url += `&search=` + (props.queryValues.search || '');
    url += `&producer=` + ((param==='producenci') ? createUrlParam('producer',value.toString()) : (props.queryValues.producer || ''));
    url += `&publisher=` + ((param==='wydawcy') ? createUrlParam('publisher',value.toString()) : (props.queryValues.publisher || ''));
    url += `&genre=` + ((param==='gatunki') ? createUrlParam('genre',value.toString()) : (props.queryValues.genre || ''));
    url += `&order=` + (props.queryValues.order || '');
    return url;
  }

  return (
    <div className="accordion">
      <div className="accordion__toggle" onClick = {(e) => accordionContentShowHide(e)}>
        <span>{props.title}</span><i className="fas fa-chevron-down"></i>
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