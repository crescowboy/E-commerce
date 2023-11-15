import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import Nav from '../Nav';

const CatalogoPage = () => {

    const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simula una llamada al backend para obtener la lista de productos
    const fetchProducts = async () => {
      // Lógica para obtener productos desde el backend (simulada)
      const response = await fetch('/api/products');
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
     <div className='catalogo-container'>
        <header>
            <Nav></Nav>
        </header>
      <h1>Catálogo de Productos</h1>
      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default CatalogoPage
