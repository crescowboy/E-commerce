// src/components/ProductCard.js
import React, { useContext } from 'react';
import { Contexto } from '../Context/Contexto';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product, aggCarrito, detalleProduct}) => {
  const { id, name, price, } = product;
  const navigate = useNavigate();
  // const {cartItems, setCartItems} = useContext(Contexto);

  const agregarAlCarrito = () => {
    // Aquí puedes usar aggCarrito como una función
    // detalleProducto(product);
    aggCarrito(product);
  };

  const detalleProducto=()=>{
    // navigate('/detalleProducto');
     // Aquí, en lugar de navegar directamente, llamamos a la función proporcionada
     detalleProduct(product);
  }

  return (
    <div className="product-card" onClick={detalleProducto}>
      <img src={`https://placekitten.com/200/200?image=${id}`} alt={name} />
      <h3>{name}</h3>
      <p>${price.toFixed(2)}</p>
      <button>Ver Producto</button>
    </div>
  );
};

export default ProductCard;
