// src/components/CatalogoPage.js
import React, { useContext, useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import {toast} from 'react-toastify'
import Nav from '../Nav';
import { Contexto } from '../Context/Contexto';

const CatalogoPage = () => {
  const [products, setProducts] = useState([]);
  const {cartItems, setCartItems} = useContext(Contexto)

  useEffect(() => {
    // Simula una llamada al backend para obtener la lista de productos
    const fetchProducts = async () => {
      // Simulación de datos de productos
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

      setProducts(fakeProductData);
    };

    fetchProducts();
  }, []);

  const aggCarrito=(product)=>{
      // Crear una copia del array cartItems
  let cartItemsUpdate = [...cartItems];

  // Verificar si el producto ya está en el carrito
  const existingProductIndex = cartItemsUpdate.findIndex(
    (item) => item.id === product.id
  );

  // Si el producto ya está en el carrito, incrementar la cantidad
  if (existingProductIndex !== -1) {
    cartItemsUpdate[existingProductIndex].quantity += 1;
  } else {
    // Si el producto no está en el carrito, agregarlo con una cantidad inicial de 1
    cartItemsUpdate.push({ ...product, quantity: 1 });
  }

  setCartItems(cartItemsUpdate)
    toast.success('¡Éxito!', {
      position: 'top-right',
      autoClose: 2000, // Cerrar automáticamente después de 3 segundos
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    console.log(cartItems)
  }

  return (
    <div className="catalogo-container">
      <header>
        <Nav></Nav>
      </header>
      <h1>Catálogo de Productos</h1>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} aggCarrito={aggCarrito} />
        ))}
      </div>
    </div>
  );
};

export default CatalogoPage;
