import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [active, setActive] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar el menú en móviles

  const handleClick = (id) => {
    setActive(id);
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false); // Cerrar el menú después de hacer clic en una opción
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Cambiar el estado de abierto/cerrado del menú
  };

  return (
    <nav className="navbar">
      <ul className={`navbar-list ${menuOpen ? 'open' : ''}`}>
        {['Servicios', 'Proyectos', 'Nosotros', 'Contacto'].map((section) => (
          <li
            key={section}
            className={`navbar-item ${active === section ? 'active' : ''}`}
            onClick={() => handleClick(section)}
          >
            {section}
          </li>
        ))}
      </ul>

      {/* Ícono del menú hamburguesa */}
      <div className="menu-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;

