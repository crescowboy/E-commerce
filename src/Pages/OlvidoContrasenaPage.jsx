import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const OlvidoContrasenaPage = () => {
  const [email, setEmail] = useState('');
  const [enviado, setEnviado] = useState(false);

  const handleEnviarCorreo = async (e) => {
    e.preventDefault();

    // Aquí deberías implementar la lógica para enviar un correo de restablecimiento de contraseña
    // Puedes hacer una solicitud a tu servidor para manejar este proceso

    // Simulando el envío del correo (esto puede variar dependiendo de tu implementación real)
    // En una aplicación real, deberías hacer una solicitud al servidor para manejar el restablecimiento de contraseña
    setEnviado(true);
  };

  return (
    <div className="login-contraseña">
      
      {enviado ? (
        <p>Se ha enviado un correo con instrucciones para restablecer tu contraseña.</p>
      ) : (
        <form onSubmit={handleEnviarCorreo}>
            <h2>¿Olvidaste tu Contraseña?</h2>
          <label>
            Correo Electrónico:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <button type="submit">Enviar Correo</button>
          <p>
        ¿Recuerdas tu contraseña? <Link to="/login">Inicia Sesión</Link>
        </p>
        </form>
      )}
      
    </div>
  );
};

export default OlvidoContrasenaPage;
