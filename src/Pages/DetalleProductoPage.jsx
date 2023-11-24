// src/components/ProductDetailPage.js
import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetail from './ProductDetail';
import { Contexto } from '../Context/Contexto';
import { toast } from 'react-toastify';
import Nav from '../Nav';

// ...

const DetalleProductoPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const { cartItems, setCartItems } = useContext(Contexto);
  const {itemSelected, setItemSelected} = useContext(Contexto);

  useEffect(() => {
    // Simula una llamada al backend para obtener detalles del producto
    const fetchProductDetails = async () => {
      // Simulación de datos de producto
      const fakeProductData = [
        {
          id: 1,
          name: 'Producto 1',
          description: 'Descripción del Producto 1.',
          price: 19.99,
          imageUrl: 'https://via.placeholder.com/200x200?text=Product1',
        },
        {
          id: 2,
          name: 'Producto 2',
          description: 'Descripción del Producto 2.',
          price: 29.99,
          imageUrl: 'https://via.placeholder.com/200x200?text=Product2',
        },
        {
          id: 3,
          name: 'Producto 3',
          description: 'Descripción del Producto 3.',
          price: 34.99,
          imageUrl: 'https://via.placeholder.com/200x200?text=Product3',
        },
        {
          id: 4,
          name: 'Producto 1',
          description: 'Descripción del Producto 1.',
          price: 19.99,
          imageUrl: 'https://via.placeholder.com/200x200?text=Product1',
        },
        {
          id: 5,
          name: 'Producto 2',
          description: 'Descripción del Producto 2.',
          price: 29.99,
          imageUrl: 'https://via.placeholder.com/200x200?text=Product2',
        },
        {
          id: 6,
          name: 'Producto 3',
          description: 'Descripción del Producto 3.',
          price: 34.99,
          imageUrl: 'https://via.placeholder.com/200x200?text=Product3',
        },
        {
          id: 7,
          name: 'Producto 2',
          description: 'Descripción del Producto 2.',
          price: 29.99,
          imageUrl: 'https://via.placeholder.com/200x200?text=Product2',
        },
        {
          id: 8,
          name: 'Producto 3',
          description: 'Descripción del Producto 3.',
          price: 34.99,
          imageUrl: 'https://via.placeholder.com/200x200?text=Product3',
        },
        // Agrega más productos según sea necesario
      ];

      // Encuentra el producto por su id
    const selectedProduct = fakeProductData.find((item) => item.id === +productId);
    setProduct(selectedProduct || {}); // Si no se encuentra, establecer un objeto vacío
    };

    fetchProductDetails();
  }, [productId]);

  const addToCart = () => {
    if (!itemSelected.id) {
      console.error('Producto no válido');
      return;
    }

    let cartItemsUpdate = [...cartItems];

    // Verificar si el producto ya está en el carrito
    const existingProductIndex = cartItemsUpdate.findIndex((item) => item.id === itemSelected.id);

    // Si el producto ya está en el carrito, incrementar la cantidad
    if (existingProductIndex !== -1) {
      cartItemsUpdate[existingProductIndex].quantity += 1;
    } else {
      // Si el producto no está en el carrito, agregarlo con una cantidad inicial de 1
      cartItemsUpdate.push({ ...itemSelected, quantity: 1 });
    }

    setCartItems(cartItemsUpdate);
    toast.success('¡Éxito!', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    console.log(cartItems);
  };

  return (
    <div className='product-details-container'>
      <header>
        <Nav></Nav>
      </header>
      
        <div>
          {/* <h1>{itemSelected.name}</h1> */}
          <ProductDetail product={itemSelected} />
          <button onClick={addToCart}>Add to Cart</button>
          {/* Puedes agregar más detalles del producto según tus necesidades */}
        </div>
     
        
    </div>
  );
};

export default DetalleProductoPage;

