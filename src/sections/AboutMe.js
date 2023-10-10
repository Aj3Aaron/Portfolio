import React from 'react';
import Typewriter from '../components/Typewriter'

function AboutMe() {
  return (

    <main className='App contenedor-header contenedor-AboutMe'>
            <h1 className="h1-title">Sobre mí</h1>
            <div className='div-AboutMe'>
                <Typewriter 
                    text="Soy desarrollador web Full Stack, manejando
                    lenguajes de programación como PHP,
                    JavaScript, HTML, CSS y python, con más de
                    1 año de experiencia en el área laboral del
                    desarrollo móvil multiplataforma y web." 
                />
            </div>
        </main>
  );
}

export default AboutMe;