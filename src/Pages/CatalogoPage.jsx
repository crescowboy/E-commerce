// src/components/CatalogoPage.js
import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import Nav from '../Nav';

const CatalogoPage = () => {
  const [products, setProducts] = useState([]);

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
        // Agrega más productos según sea necesario
      ];

      setProducts(fakeProductData);
    };

    fetchProducts();
  }, []);

  return (
    <div className="catalogo-container">
      <header>
        <Nav></Nav>
      </header>
      <h1>Catálogo de Productos</h1>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CatalogoPage;
