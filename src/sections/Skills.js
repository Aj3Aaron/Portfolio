import Skill from '../components/Skill';

import "../styles/Skill.css";

function Skills(){
    return(
        <section className='contenedor-header contenedor-Skills'>
            <h1 className='h1-skills'>Habilidades tecnológicas</h1>
            <div className="div-skills">
                <Skill urlImg={ require ('../img/HTML.png') } />
                <Skill urlImg={ require ('../img/CSS.png') } />
            </div>
        </section>
    )
}

export default Skills;