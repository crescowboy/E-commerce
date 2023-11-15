// src/components/Home.js
import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import Nav from '../Nav';

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [specialOffers, setSpecialOffers] = useState([]);
  const [popularCategories, setPopularCategories] = useState([]);

  useEffect(() => {
    // Aquí puedes hacer solicitudes a tu backend para obtener datos específicos
    // Supongamos que obtienes datos de algún servicio o API
    // Ejemplo con listas estáticas de productos, ofertas especiales y categorías para demostración
    const sampleFeaturedProducts = [
      { id: 1, name: 'Producto Destacado 1', price: 29.99 },
      { id: 2, name: 'Producto Destacado 2', price: 39.99 },
      { id: 3, name: 'Producto Destacado 3', price: 49.99 },
    ];

    const sampleSpecialOffers = [
      { id: 4, name: 'Oferta Especial 1', price: 19.99 },
      { id: 5, name: 'Oferta Especial 2', price: 24.99 },
      { id: 6, name: 'Oferta Especial 3', price: 29.99 },
    ];

    const samplePopularCategories = [
      { id: 7, name: 'Electrónicos' },
      { id: 8, name: 'Ropa' },
      { id: 9, name: 'Hogar y Jardín' },
    ];

    setFeaturedProducts(sampleFeaturedProducts);
    setSpecialOffers(sampleSpecialOffers);
    setPopularCategories(samplePopularCategories);
  }, []);

  return (
    <div className="home-container">
      <header>
        <Nav></Nav>
      </header>
      <h1>Bienvenido a nuestro Ecommerce</h1>

      <section className="featured-products-section">
        <h2>Productos Destacados</h2>
        <div className="product-list">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="special-offers-section">
        <h2>Ofertas Especiales</h2>
        <div className="product-list">
          {specialOffers.map(offer => (
            <ProductCard key={offer.id} product={offer} />
          ))}
        </div>
      </section>

      <section className="popular-categories-section">
        <h2>Categorías Populares</h2>
        <ul>
          {popularCategories.map(category => (
            <li key={category.id}>{category.name}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Home;
