import React from 'react';
import '../Styles/Navbar.css'; // Estilos da Navbar

const Navbar = ({goToHome}) => {
  return (
    <nav className='navbar'>
      <h1>Data Viewer</h1>
      <button className='home-button' onClick={goToHome}>Home</button>
    </nav>
  );
};

export default Navbar;
