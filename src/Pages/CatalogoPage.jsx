// src/components/CatalogoPage.js
import React, { useContext, useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import {toast} from 'react-toastify'
import Nav from '../Nav';
import { Contexto } from '../Context/Contexto';
import { useNavigate } from 'react-router-dom';

const CatalogoPage = () => {
  const [products, setProducts] = useState([]);
  const {cartItems, setCartItems} = useContext(Contexto)
  const {itemSelected, setItemSelected} = useContext(Contexto)
  const navigate = useNavigate()

  useEffect(() => {
    // Simula una llamada al backend para obtener la lista de productos
    const fetchProducts = async () => {
      try{
        const response = await fetch('http://localhost:5000/products');
        const data = await response.json();
        console.log('exito')
        setProducts(data)
      }catch(error){
        console.error('Error de solicitud api: ',error)
      }
      
        // Agrega más productos según sea necesario
      

      
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

  const detalleProduct = (product) => {
    // Aquí navegas a la página de detalle y pasas los datos del producto
    setItemSelected(product)
    console.log(product)
    navigate('/detalleProducto');
  };

  return (
    <div className="catalogo-container">
      <header>
        <Nav></Nav>
      </header>
      <h1>Catálogo de Productos</h1>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} aggCarrito={aggCarrito} detalleProduct={detalleProduct} />
        ))}
      </div>
    </div>
  );
};

export default CatalogoPage;
