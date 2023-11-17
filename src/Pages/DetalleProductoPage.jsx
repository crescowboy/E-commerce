// src/components/ProductDetailPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from './ProductCard';

const DetalleProductoPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Simula una llamada al backend para obtener detalles del producto
    const fetchProductDetails = async () => {
      // Simulación de datos de producto
      const fakeProductData = {
        id: productId,
        name: `Product ${productId}`,
        description: `This is a detailed description for Product ${productId}.`,
        price: 29.99,
        imageUrl: `https://via.placeholder.com/200x200?text=Product${productId}`,
      };

      setProduct(fakeProductData);
    };

    fetchProductDetails();
  }, [productId]);

  const handleAddToCart = () => {
    // Simula la lógica de agregar al carrito
    console.log(`Product ${productId} added to the cart.`);
  };

  return (
    <div>
      {product ? (
        <>
          <h1>{product.name}</h1>
          <ProductCard product={product} />
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <button onClick={handleAddToCart}>Add to Cart</button>
          {/* Puedes agregar más detalles del producto según tus necesidades */}
        </>
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
  );
};

export default DetalleProductoPage;
