import React from 'react';
import fondoPantalla from '../assets/fondoPantalla.mp4';
import '../styles/app.css';
import Navbar from './Navbar/Navbar';
import Card from './Card/Card';
import VideoFondo from './VideoFondo/VideoFondo';
import ContactoForm from './ContactoForm/ContactoForm';

function Aplicacion() {
    return (
        <>
            <div className="fondoPantalla">
                <VideoFondo />
                <Navbar />
                <div className='contenedor-cartas'>
                    <Card />
                    <Card />
                    <Card />
                </div>
                <ContactoForm></ContactoForm>
            </div>
        </>
    );
}

export default Aplicacion;


