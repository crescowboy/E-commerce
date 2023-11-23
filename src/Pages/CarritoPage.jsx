// src/components/CartPage.js
import React, { useContext, useState } from 'react';
import Nav from '../Nav';
import { useNavigate } from 'react-router-dom';
import { Contexto } from '../Context/Contexto';

const CarritoPage = () => {
  const navigate = useNavigate()
  // Ejemplo de datos de productos en el carrito (puedes obtenerlos desde el estado global, etc.)
  // const [cartItems, setCartItems] = useState([
  //   { id: 1, name: 'Producto 1', price: 19.99, quantity: 2 },
  //   { id: 2, name: 'Producto 2', price: 29.99, quantity: 1 },
  // ]);

  const {cartItems, setCartItems} = useContext(Contexto);

  // Función para ajustar la cantidad de un producto en el carrito
  const handleQuantityChange = (productId, newQuantity) => {
    
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Función para eliminar un producto del carrito
  const handleRemoveItem = (productId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== productId)
    );
  };

  // Función para calcular el total del carrito
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const irPago = () =>{
    navigate('/pago')
  }

  return (
    <div className="cart-container">
      <header>
        <Nav></Nav>
      </header>
      <h1 className="cart-title">Carrito de Compras</h1>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <div>
              <span>{item.name}</span>
              <span> ${item.price.toFixed(2)} </span>
              <span>Cantidad: {item.quantity}</span>
            </div>
            <div>
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
              />
              <button className='btn-eliminar' onClick={() => handleRemoveItem(item.id)}>Eliminar</button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <span>Total: ${calculateTotal().toFixed(2)}</span>
        <button onClick={() => irPago()}>Proceder al Pago</button>
      </div>
    </div>
  );
};

export default CarritoPage;
