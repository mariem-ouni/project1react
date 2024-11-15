
/*import {product}  from "./product";

 const description=( )=> {
    return (
    <h2>{product.description}</h2>
)
 }
 export default description*/
 // src/component/Description.js
import React from 'react';
import {product} from './product';

function Description() {
  return <p>Description: {product.description}</p>;  // Affiche la description du produit
}

export default Description;
