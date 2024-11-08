import React from "react";
import '../../styles/socialmedia.css';
import instagramLogo from '../../assets/logoinstagram.png';
import facebookLogo from '../../assets/logofacebook.png';
import linkedinLogo from '../../assets/logolinkedin.png';
import whatsappLogo from '../../assets/logowhatsapp.png';

function SocialMedia() {
    return (
        <div className="social-links">
            <a href="https://www.instagram.com/resguarit/" target="_blank" className="social-icon"><img src={instagramLogo} alt="Instagram Logo"/></a>
            <a href="https://web.facebook.com/resguarit" target="_blank" className="social-icon"><img src={facebookLogo} alt="Facebook Logo"/></a>
            <a href="https://www.linkedin.com/company/resguarit" target="_blank" className="social-icon"><img src={linkedinLogo} alt="Linkedin Logo"/></a>
            <a href="https://api.whatsapp.com/send?phone=5492216914649" target="_blank" className="social-icon"><img src={whatsappLogo} alt="Whatsapp Logo"/></a>
        </div>
    );
}

export default SocialMedia;