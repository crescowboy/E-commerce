// src/components/ProductCard.js
import React, { useContext } from 'react';
import { Contexto } from '../Context/Contexto';

const ProductCard = ({ product, aggCarrito }) => {
  const { id, name, price } = product;
  // const {cartItems, setCartItems} = useContext(Contexto);

  const agregarAlCarrito = () => {
    // Aquí puedes usar aggCarrito como una función
    aggCarrito(product);
  };

  return (
    <div className="product-card">
      <img src={`https://placekitten.com/200/200?image=${id}`} alt={name} />
      <h3>{name}</h3>
      <p>${price.toFixed(2)}</p>
      <button onClick={agregarAlCarrito}>Agregar al Carrito</button>
    </div>
  );
};

export default ProductCard;
