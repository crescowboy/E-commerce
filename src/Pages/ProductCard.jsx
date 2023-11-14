// src/components/ProductCard.js
import React from 'react';

const ProductCard = ({ product }) => {
  const { id, name, price } = product;

  return (
    <div className="product-card">
      <img src={`https://placekitten.com/200/200?image=${id}`} alt={name} />
      <h3>{name}</h3>
      <p>${price.toFixed(2)}</p>
      <button>Agregar al Carrito</button>
    </div>
  );
};

export default ProductCard;
