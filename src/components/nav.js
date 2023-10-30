import React from 'react';
import { Link, Element } from 'react-scroll';

function Nav() {
    return (
      <nav className="menu">
        <div className="contenedor contenedor-menu">
          <div className='div_nav'>
            <a className='titulo_nav-right' href={require('../documents/CV_Aaron_Hidalgo.pdf')} download="CV_Aaron_Hidalgo.pdf">Descargar CV</a>
            <Link
              activeClass="active"
              to="proyectos"
              spy={true}
              smooth={true}
              duration={500}
              className='titulo_nav'
            >
              Proyectos
            </Link>
            <Link
              activeClass="active"
              to="conocimientos"
              spy={true}
              smooth={true}
              duration={500}
              className='titulo_nav'
            >
              Habilidades
            </Link>
            <Link
              activeClass="active"
              to="certificados"
              spy={true}
              smooth={true}
              duration={500}
              className='titulo_nav'
            >
              Certificados
            </Link>
            <Link
              activeClass="active"
              to="contacto"
              spy={true}
              smooth={true}
              duration={500}
              className='titulo_nav'
            >
              Contacto
            </Link>
          </div>
        </div>
      </nav>
    );
  }
  
  export default Nav;