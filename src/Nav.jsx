import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
      <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Ecommerce</Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Inicio</Link>
        <Link to="/catalogo">Catálogo</Link>
        <Link to="/carrito">Carrito</Link>
        <Link to="/login">Iniciar Sesión</Link>
      </div>
    </nav>
    </>
  )
}

export default Nav
