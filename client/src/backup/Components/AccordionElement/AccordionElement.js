// import React from 'react';
// import {Link} from 'react-router-dom';

// import './AccordionElement.css';

// const AccordionElement = (props) => {
//   return (
//     <li className="accordion__element">
//       <Link className="accordion__link" 
//           to={`/products?page=1&category=${props.queryValues.category || ''}&search=${props.queryValues.search || ''}&order=${props.queryValues.order || ''}&producer=${props.queryValues.producer || ''}&publisher=${props.queryValues.publisher || ''}&genre=${props.createUrlParam('genre',props.gatunek.id_gatunku.toString())}`}>
//         <input type='checkbox' name={`gatunek${props.gatunek.id_gatunku}`} id={`gatunek${gatunek.id_gatunku}`}/>
//         <label for={`gatunek${gatunek.id_gatunku}`}>{gatunek.nazwa_gatunku}</label> 
//         {gatunek.nazwa_gatunku} 
//       </Link>
//     </li>
//   )
// }

// export default AccordionElement;