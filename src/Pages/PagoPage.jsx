// src/components/PaymentPage.js
import React, { useState } from 'react';
import Nav from '../Nav';

const PagoPage = () => {
  const [shippingInfo, setShippingInfo] = useState({
    fullName: '',
    address: '',
    city: '',
    country: '',
    // ...otros campos de información de envío y facturación
  });

  const [paymentMethod, setPaymentMethod] = useState('creditCard');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handlePlaceOrder = () => {
    // Lógica para procesar el pedido y realizar el pago
    alert('¡Orden confirmada y pago procesado!');
  };

  return (
    <div className="payment-container">
      <header>
        <Nav />
      </header>
      <h1>Página de Pago</h1>
      <div className="shipping-info">
        <h2>Información de Envío y Facturación</h2>
        <form>
          {/* Campos de información de envío y facturación */}
          <label>
            Nombre Completo:
            <input
              type="text"
              name="fullName"
              value={shippingInfo.fullName}
              onChange={handleInputChange}
            />
          </label>
          {/* Agrega más campos según sea necesario */}
        </form>
      </div>
      <div className="payment-method">
        <h2>Método de Pago</h2>
        <div>
          <label>
            Tarjeta de Crédito
            <input
              type="radio"
              value="creditCard"
              checked={paymentMethod === 'creditCard'}
              onChange={() => handlePaymentMethodChange('creditCard')}
            />
          </label>
          {/* Agrega más opciones de pago según sea necesario */}
        </div>
      </div>
      <button onClick={handlePlaceOrder}>Confirmar Orden y Pagar</button>
    </div>
  );
};

export default PagoPage;