import React from 'react';
import Icon from "../components/Icon";
import { faLinkedinIn, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'; 

import "../styles/Footer.css";

function Footer() {
  return (
    <section id='contacto' className='contenedor-header contenedor-Footer'>
        <div className='div-footer'>
            <Icon url="https://www.linkedin.com/in/aaron-jose-hidalgo-s-6033b8242/" nameClass='linkedin' iconName={faLinkedinIn} />
            <Icon url="https://github.com/Aj3Aaron" nameClass='github' iconName={faGithub} />
            <Icon url="https://twitter.com/Aaron_Aj3" nameClass='twitter' iconName={faTwitter} />
        </div>
    </section>
  );
}

export default Footer;