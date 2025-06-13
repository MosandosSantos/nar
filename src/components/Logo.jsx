import React from 'react';
import logo from '../assets/image/principal/logon.png'; // Caminho relativo ao arquivo Logo.jsx

const Logo = ({ height = 40 }) => {
  return (
    <img
      src={logo}
      alt="Logo GLMMMRJ"
      style={{ height: `${height}px`, marginRight: '10px' }}
    />
  );
};

export default Logo;