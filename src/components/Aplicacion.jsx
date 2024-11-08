import React from 'react';
import fondoPantalla from '../assets/fondoPantalla.mp4';
import '../styles/app.css';
import Navbar from './Navbar/Navbar';

function Aplicacion() {
    return (
        <>
            <div className="fondoPantalla">
                <video autoPlay muted loop id="videoFondo">
                    <source src={fondoPantalla} type="video/mp4" />
                </video>
                <Navbar />
            </div>
        </>
    );
}

export default Aplicacion;


