// LoginPage.js
import React, { useState } from 'react';
import Nav from '../Nav';

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Realiza la lógica de autenticación en tu servidor
    // y llama a la función `onLogin` si la autenticación es exitosa
    onLogin(username);
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
      </form>
      </div>
    </div>
  );
};

export default LoginPage;
