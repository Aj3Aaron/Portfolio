

import "../styles/Project.css";

function Project(props){

    const {urlImg, projectTitle} = props;

    return(
        <div>
            <div className="div-component">
                <span className="span-component">
                    <img className="photo-component" src={urlImg} alt="Photo" />
                    <p> {projectTitle} </p>
                </span>
            </div>
        </div>
    )
}

export default Project;