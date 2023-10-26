import Project from "../components/Project";

import "../styles/Project.css";

function Projects(){

    const tuGruero_description = {
        tuGruero_description_1: "1 año de experiencia desarrollando para ",
        tuGruero_description_2:" manejando base de datos con SQL, utilizando lenguajes como PHP, JavaScript, HTML y CSS. Ademas de mantenimiento landing page con WordPress.",
        tuGrueroLink: "https://tugruero.io/"
    };

   const skillPage = [require('../img/HTML.png'), require('../img/CSS.png'), require('../img/bootstrap.png'), require('../img/javaScript.png'), require('../img/react.png'), require('../img/git.png')]
   const skillBot = [require('../img/python.png'), require('../img/git.png'), require ('../img/android.png')];
   const skillTuGruero = [require('../img/HTML.png'), require('../img/CSS.png'), require('../img/bootstrap.png'), require('../img/javaScript.png'), require('../img/php.png'), require('../img/sql.png'), require('../img/wordpress.png'), require('../img/aws.png')];
   const skillCambioDolar = [require('../img/CSS.png'), require('../img/react.png'), require('../img/javaScript.png'), require('../img/android.png')]

    return(
        <section className='contenedor-header contenedor-Projects'>
            <h1 className='h1-Projects'>Proyectos realizados</h1>
            <div className="div-projects">
                <Project urlImg={ require ('../img/ejemplo_portafolio.png')} skills={skillPage} urlImg1={ require ('../img/cambioDolar.jpg') } linkProject='https://github.com/Aj3Aaron/Portfolio' projectTitle="Portafolio en React." projectDescription='Portafolio en React que puede ser utilizado, por ejemplo, por otros usuarios de GitHub. El portafolio incluye secciones separadas (Acerca de, Proyectos, Habilidades, Experiencia).' />
                <Project urlImg={ require ('../img/bot_cok.png')} skills={skillBot} urlImg1={ require('../img/cambioDolar.jpg') } linkProject='https://github.com/hidalgoabraham/aj-cok-farming-bot' projectTitle="Bot Clash of Kings." projectDescription='Bot de reconocimiento de patrones basado en imagenes, fue desarrollado en python con librerias como OpenCv, OCR y Adb para conectarse a un dispositivo android.' />
                <Project urlImg={ require ('../img/home_tuGruero.png')} skills={skillTuGruero} urlImg1={ require('../img/cambioDolar.jpg') } linkProject={tuGruero_description.tuGrueroLink} tuGruero={true}  projectTitle="Tu Gruero." projectDescription={tuGruero_description} />
                <Project urlImg={ require ('../img/CambioDolar.png')} skills={skillCambioDolar} urlImg1={ require('../img/cambioDolar.jpg') } linkProject='https://github.com/Aj3Aaron/Cambio-dolar' projectTitle="App mobile multiplataforma." projectDescription='App multiplataforma desarrollada con React Native para saber en tiempo real el tipo de cambio del Dolar en Venezuela con tasas de distintas entidades.' />
            </div>
        </section>
    )
}

export default Projects;