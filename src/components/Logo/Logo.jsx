import React from "react";
import '../../styles/logo.css';
import logoResguarIT from '../../assets/logosolo.jpg';

const Logo = () => {
    return (
        <div className="logo">
            <img src={logoResguarIT} alt="Logo de ResguarIT" />
        </div>
    );
};

export default Logo;