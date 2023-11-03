import React from 'react';
import Typewriter from '../components/Typewriter'

function AboutMe() {
  return (

    <section className='App contenedor-header contenedor-AboutMe'>
            <h1 className="h1-AboutMe">Sobre mí</h1>
            <div className='div-AboutMe'>
                <Typewriter 
                    text="¡Hola!... Soy Desarrollador web Full Stack, manejando
                    lenguajes de programación como PHP,
                    JavaScript, HTML, CSS y Python, con más de
                    1 año de experiencia en el área laboral del
                    desarrollo móvil multiplataforma y web." 
                />
            </div>
        </section>
  );
}

export default AboutMe;