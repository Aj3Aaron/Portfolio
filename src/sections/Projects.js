import Project from "../components/Project";

import "../styles/Project.css";

function Projects(){

    const tuGruero_description = {
        tuGruero_description_1: "1 año de experiencia desarrollando para ",
        tuGruero_description_2:" manejando base de datos con SQL, utilizando lenguajes como PHP, JavaScript, HTML y CSS. Además de mantenimiento landing page con WordPress; se implementó API de google maps y pasarela de pago con stripe.",
        tuGrueroLink: "https://tugruero.io/"
    };

   const skillPage = [require('../img/HTML.png'), require('../img/CSS.png'), require('../img/bootstrap.png'), require('../img/javaScript.png'), require('../img/react.png'), require('../img/git.png')]
   const skillBot = [require('../img/python.png'), require('../img/git.png'), require ('../img/android.png')];
   const skillTuGruero = [require('../img/HTML.png'), require('../img/CSS.png'), require('../img/bootstrap.png'), require('../img/javaScript.png'), require('../img/php.png'), require('../img/sql.png'), require('../img/wordpress.png'), require('../img/aws.png')];
   const skillCambioDolar = [require('../img/CSS.png'), require('../img/react.png'), require('../img/javaScript.png'), require('../img/android.png')]

    return(
        <section id="proyectos" className='contenedor-header contenedor-Projects'>
            <h1 className='h1-Projects'>Proyectos realizados</h1>
            <div className="div-projects">

                <Project
                    skills={skillPage}
                    urlImg={ require ('../img/portafolio1.png')}
                    urlImg1={ require ('../img/portafolio2.png') }
                    urlImg2={ require ('../img/portafolio3.png') }
                    linkProject='https://github.com/Aj3Aaron/Portfolio'
                    projectTitle="Portafolio en React."
                    projectDescription='Portafolio en React que puede ser utilizado, por ejemplo, por otros usuarios de GitHub. El portafolio incluye secciones separadas (Acerca de, Proyectos, Habilidades, Experiencia).'    
                />

                <Project
                    urlImg={ require ('../img/bot1.png')}
                    urlImg1={ require('../img/bot2.png') }
                    urlImg2={ require ('../img/bot3.png') }
                    skills={skillBot}
                    linkProject='https://github.com/hidalgoabraham/aj-cok-farming-bot'
                    projectTitle="Bot Clash of Kings."
                    projectDescription='Bot de reconocimiento de patrones basado en imágenes, fue desarrollado en python con librerías como OpenCv, OCR y Adb para conectarse a un dispositivo Android.'

                />

                <Project
                    skills={skillTuGruero}
                    urlImg={ require ('../img/home_tuGruero.png')}
                    urlImg1={ require('../img/map.png') }
                    urlImg2={ require ('../img/tuGruero3.png') }
                    linkProject={tuGruero_description.tuGrueroLink}
                    tuGruero={true}
                    projectTitle="Tu Gruero."
                    projectDescription={tuGruero_description}
                />

                <Project
                    skills={skillCambioDolar}
                    urlImg={ require ('../img/cambioDolar1.png')}
                    urlImg1={ require('../img/cambioDolar2.png') }
                    urlImg2={ require ('../img/cambioDolar3.png') }
                    linkProject='https://github.com/Aj3Aaron/Cambio-dolar'
                    projectTitle="App mobile multiplataforma."
                    projectDescription='App multiplataforma desarrollada con React Native para saber en tiempo real el tipo de cambio del Dólar en Venezuela con tasas de distintas entidades.'
                />

            </div>
        </section>
    )
}

export default Projects;