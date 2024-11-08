import React, { useState } from 'react';
import './Navbar.css'; // Puedes incluir este archivo para estilos externos

const Navbar = () => {
  const [active, setActive] = useState(null);

  const handleClick = (id) => {
    setActive(id);
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <ul className="navbar-list">
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
    </nav>
  );
};

export default Navbar;
