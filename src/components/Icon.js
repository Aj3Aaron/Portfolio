import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'; 

import "../styles/Footer.css";

function Icon(props){
    const {iconName, nameClass, url} = props;
    const combinedClassName = `${nameClass} a-icon`;
    const combinedClassNameIcon = `${nameClass} icon`;

    return(
        <a target="_blank" rel="noopener noreferrer" href={url} className={combinedClassName}>
            <FontAwesomeIcon className={combinedClassNameIcon} icon={iconName} />
        </a>
    )
}

export default Icon