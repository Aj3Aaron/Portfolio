import React from 'react';
import Icon from "../components/Icon";
import { faLinkedinIn, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'; 

import "../styles/Footer.css";

function Footer() {
  return (
    <section className='contenedor-header contenedor-Footer'>
        <div className='div-footer'>
            <Icon nameClass='linkedin' iconName={faLinkedinIn} />
            <Icon nameClass='github' iconName={faGithub} />
            <Icon nameClass='twitter' iconName={faTwitter} />
        </div>
    </section>
  );
}

export default Footer;