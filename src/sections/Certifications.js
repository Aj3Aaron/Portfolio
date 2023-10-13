import Certificate from "../components/certificate";

import "../styles/certificate.css";

function Certifications(){
    return(
        <section className='contenedor-header contenedor-Certifications'>
            <h1 className='h1-Certifications'>Cursos realizados</h1>
            <div className="div-certifications">
                <Certificate urlImg={ require ('../documents/html-css.png')} />
                <Certificate urlImg={ require ('../documents/php.png')} />
                <Certificate urlImg={ require ('../documents/javaSE.png')} />
                <Certificate urlImg={ require ('../documents/terminal.png')} />
            </div>
        </section>
    )
}

export default Certifications;