import React, { useState } from 'react';
import Nav from '../Nav';


const SignUpPage = ({ onSignUp }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    // Realiza la lógica de creación de cuenta en tu servidor
    // y llama a la función `onSignUp` si la creación de cuenta es exitosa

    // Restablece los campos después de crear la cuenta
    setUsername('');
    setPassword('');
    setConfirmPassword('');

    // onSignUp(username);
  };

  return (
    <div className='home-container'>
        <Nav></Nav>
      <div className='sign-up'>
        
        <form>
        <h2>Crear Cuenta</h2>
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
          <label>
            Confirmar Contraseña:
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </label>
          <button type="button" onClick={handleSignUp}>
            Crear Cuenta
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
