// frontend/src/pages/Home.js

import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';


const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    // Aquí podrías hacer una solicitud a tu backend para obtener productos destacados
    // Supongamos que obtienes los productos de algún servicio o API
    // Ejemplo con una lista estática de productos para demostración
    const sampleFeaturedProducts = [
      { id: 1, name: 'Producto Destacado 1', price: 24.99 },
      { id: 2, name: 'Producto Destacado 2', price: 34.99 },
      { id: 3, name: 'Producto Destacado 3', price: 44.99 },
    ];

    setFeaturedProducts(sampleFeaturedProducts);
  }, []);

  return (
    <div>
      <h1>Bienvenido a nuestro Ecommerce</h1>

      <section>
        <h2>Productos Destacados</h2>
        <div className="product-list">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section>
        <h2>Ofertas Especiales</h2>
        {/* Agrega aquí ofertas especiales */}
      </section>

      <section>
        <h2>Categorías Populares</h2>
        {/* Agrega aquí categorías populares */}
      </section>
    </div>
  );
};

export default Home;
