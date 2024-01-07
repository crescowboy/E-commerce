// src/components/PaymentPage.js
import React, { useEffect, useState } from 'react';
// import Swal from 'sweetalert';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import Nav from '../Nav';

const PagoPage = () => {
  const [formValid, setFormValid] = useState()
  const [shippingInfo, setShippingInfo] = useState({
    fullName: '',
    address: '',
    city: '',
    country: '',
    email: '',
    cell: ''
    // ...otros campos de información de envío y facturación
  });

  const [paymentMethod, setPaymentMethod] = useState('creditCard');

  useEffect(() => {
    const isFormValid = validateForm(); // Implementa tu lógica de validación aquí
    setFormValid(isFormValid);
  }, [shippingInfo, paymentMethod]);
  
  const validateForm = () => {
    // Implementa tu lógica de validación aquí
    // Deberías verificar que todos los campos requeridos estén completos
    // y que el método de pago esté seleccionado
    return (
      shippingInfo.fullName &&
      shippingInfo.address &&
      shippingInfo.city &&
      shippingInfo.email &&
      shippingInfo.cell &&
      paymentMethod
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  
  

  const handlePlaceOrder = async (e) => {
    e.preventDefault(); // Evitar el envío automático del formulario

    // Realizar la validación del formulario
  const form = e.target.form;
  if(form.reportValidity()){
    try {
      console.log('formValid:', formValid);
      console.log('campos: ',shippingInfo)
      if (formValid) {
        // throw new Error('Por favor, completa todos los campos antes de realizar el pedido.');
        // toast.success('¡Éxito!', {
        //   position: 'top-right',
        //   autoClose: 2000, // Cerrar automáticamente después de 3 segundos
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        // });


        await  Swal.fire({
          title: '¡Pago confirmado!',
          text: '¡Tu orden ha sido confirmada y el pago ha sido procesado exitosamente!',
          icon: 'success',
          button: 'OK',
          
        });
      }


      // Realiza cualquier otra lógica de validación aquí

      
    

      // Continúa con cualquier lógica adicional después de que el usuario confirme el pago
    } catch (error) {
      alert(error.message);
    }
  }else{
    alert("Faltan datos por completar");
  }
    
  };

  return (
    <div className="payment-container">
      <header>
        <Nav />
      </header>
      <div className='payment-contenido'>
        {/* <h1>Página de Pago</h1> */}
          <div className='form-payment'>
            <div className="shipping-info">
        
               <h2>Información de Envío y Facturación</h2>
                 <form>
                      {/* Campos de información de envío y facturación */}
                    <label>
                      Nombre Completo:
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={shippingInfo.fullName}
                        onChange={handleInputChange}
                      />
                    </label>
                    <label>
                      Direccion:
                      <input
                        type="text"
                        name="address"
                        required
                        value={shippingInfo.address}
                        onChange={handleInputChange}
                      />
                    </label>
                    <label>
                      Ciudad:
                      <input
                        type="text"
                        name="city"
                        required
                        value={shippingInfo.city}
                        onChange={handleInputChange}
                      />
                    </label>
                    <label>
                      Email:
                      <input
                        type="text"
                        name="email"
                        value={shippingInfo.email}
                        required
                        onChange={handleInputChange}
                      />
                    </label>
                    
                    <label>
                      Celular:
                      <input
                        type="text"
                        name="cell"
                        required
                        value={shippingInfo.cell}
                        onChange={handleInputChange}
                      />
                    </label>

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
                <label>
                  Tarjeta de Debito
                  <input
                    type="radio"
                    value="debitCard"
                    checked={paymentMethod === 'debitCard'}
                    onChange={() => handlePaymentMethodChange('debitCard')}
                  />
                </label>
              
          </div>
          <button type='button' onClick={handlePlaceOrder} >Confirmar Orden y Pagar</button>
          </form>
          <div className="payment-method">
            
          
          
          
              </div>
             </div>
      
      
              </div>
    
          </div>
    </div>
  );
};

export default PagoPage;
