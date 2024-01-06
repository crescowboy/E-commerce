// LoginPage.js
import React, { useState } from 'react';
import Nav from '../Nav';
import { Link } from 'react-router-dom';

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log(username,password)

    
    // Realiza la lógica de autenticación en tu servidor
    // y llama a la función `onLogin` si la autenticación es exitosa

    // onLogin(username);

    //Limpia los campos 
    setPassword('')
    setUsername('')
  };

  return (
    <div className='home-container'>
      <Nav></Nav>
      <div className='login'>
      
      <form>
      <h2>Iniciar Sesión</h2>
        <label>
          Usuario:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Contraseña:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="button" onClick={handleLogin}>
          Iniciar Sesión
        </button>
        <div className='register-password-container'>
          {/* <a href="#">Crea una cuenta</a> */}
          <Link to="/signUp">Crea una cuenta</Link>
          <Link to='/olvidoContraseña'>Olvidaste tu contraseña?</Link>
        </div>
        <p></p>
      </form>
      </div>
    </div>
  );
};

export default LoginPage;
