// src/component/Price.js
import React from 'react';
import {product} from './product';

function Price() {
  return <p>Prix: {product.price} TND</p>;  // Affiche le prix du produit
}

export default Price;
