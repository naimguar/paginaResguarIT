import React from 'react';
import fondoPantalla from '../assets/fondoPantalla.mp4';
import '../styles/app.css';
import Navbar from './Navbar/Navbar';
import Card from './Card/Card';

function Aplicacion() {
    return (
        <>
            <div className="fondoPantalla">
                <video autoPlay muted loop id="videoFondo">
                    <source src={fondoPantalla} type="video/mp4" />
                </video>
                <Navbar />
                <div className='contenedor-cartas'>
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </>
    );
}

export default Aplicacion;


