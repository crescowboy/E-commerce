// src/components/CartPage.js
import React, { useState } from 'react';
import Nav from '../Nav';

const CarritoPage = () => {
  // Ejemplo de datos de productos en el carrito (puedes obtenerlos desde el estado global, etc.)
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Producto 1', price: 19.99, quantity: 2 },
    { id: 2, name: 'Producto 2', price: 29.99, quantity: 1 },
  ]);

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
              <span>${item.price.toFixed(2)}</span>
              <span>Cantidad: {item.quantity}</span>
            </div>
            <div>
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
              />
              <button onClick={() => handleRemoveItem(item.id)}>Eliminar</button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <span>Total: ${calculateTotal().toFixed(2)}</span>
        <button onClick={() => alert('¡Proceder al pago!')}>Proceder al Pago</button>
      </div>
    </div>
  );
};

export default CarritoPage;
