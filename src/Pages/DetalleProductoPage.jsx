// src/components/ProductDetailPage.js
import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetail from './ProductDetail';
import { Contexto } from '../Context/Contexto';
import { toast } from 'react-toastify';
import Nav from '../Nav';

const DetalleProductoPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const { cartItems, setCartItems } = useContext(Contexto);

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

  const addToCart = () => {
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
      {product ? (
        <>
          <h1>{product.name}</h1>
          <ProductDetail product={product} />
          <button onClick={addToCart}>Add to Cart</button>
          {/* Puedes agregar más detalles del producto según tus necesidades */}
        </>
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
  );
};

export default DetalleProductoPage;
