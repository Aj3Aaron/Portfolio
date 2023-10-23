import Project from "../components/Project";
import "../styles/Project.css";

function Projects(){


    return(
        <section className='contenedor-header contenedor-Projects'>
            <h1 className='h1-Projects'>Proyectos realizados</h1>
            <div className="div-projects">
                <Project  urlImg={ require ('../img/ejemplo_portafolio.png')} urlImg1={ require ('../img/cambioDolar.jpg') } projectTitle="Portafolio en React" />
                <Project urlImg={ require ('../img/bot_cok.png')} urlImg1={ require('../img/cambioDolar.jpg') }  projectTitle="Bot Clash of Kings" />
                <Project urlImg={ require ('../img/home_tuGruero.png')} urlImg1={ require('../img/cambioDolar.jpg') }  projectTitle="Tu Gruero (se ha censurado informacion sensible)" />
                <Project urlImg={ require ('../img/CambioDolar.png')} urlImg1={ require('../img/cambioDolar.jpg') }  projectTitle="App mobile multiplataforma" />
            </div>
        </section>
    )
}

export default Projects;