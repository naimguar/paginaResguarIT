import React from 'react';
import fondoPantalla from '../assets/fondoPantalla.mp4';
import '../styles/app.css';
import Navbar from './Navbar/Navbar';
import SocialMedia from './SocialMedia/SocialMedia';
import Logo from './Logo/Logo';

function Aplicacion() {
    return (
        <>
            <div className="fondoPantalla">
                <video autoPlay muted loop id="videoFondo">
                    <source src={fondoPantalla} type="video/mp4" />
                </video>
                <Logo />
                <Navbar />
                <SocialMedia></SocialMedia>
            </div>
        </>
    );
}

export default Aplicacion;


