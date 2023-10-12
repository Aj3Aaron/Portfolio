import Skill from '../components/Skill';

import "../styles/Skill.css";

function Skills(){
    return(
        <section className='contenedor-header contenedor-Skills'>
            <h1 className='h1-skills'>Habilidades tecnológicas</h1>
            <div className="div-skills">
                <Skill urlImg={ require ('../img/HTML.png') } />
                <Skill urlImg={ require ('../img/CSS.png') } />
                <Skill urlImg={ require ('../img/bootstrap.png') } />
                <Skill urlImg={ require ('../img/python.png') } />
                <Skill urlImg={ require ('../img/php.png') } />
                <Skill urlImg={ require ('../img/sql.png') } />
                <Skill urlImg={ require ('../img/wordpress.png') } />
                <Skill urlImg={ require ('../img/javaScript.png') } />
                <Skill urlImg={ require ('../img/react.png') } />
                <Skill urlImg={ require ('../img/aws.png') } />
                <Skill urlImg={ require ('../img/git.png') } />
                <Skill urlImg={ require ('../img/android.png') } />
            </div>
        </section>
    )
}

export default Skills;