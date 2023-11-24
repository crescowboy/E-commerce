// src/components/ProductDetail.js
import React from 'react';

const ProductDetail = ({ product }) => {
  if (!product) {
    // Puedes manejar el caso donde product es null o undefined
    return <div>No hay detalles disponibles.</div>;
  }

  const { id, name, price, description } = product;

  return (
    <div className="product-detail">
      <img src={`https://placekitten.com/200/200?image=${id}`} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Price: ${price ? price.toFixed(2) : 'No disponible'}</p>
    </div>
  );
};

export default ProductDetail;
