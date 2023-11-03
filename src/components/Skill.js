import React from "react"

import "../styles/Skill.css";

function Skill(props){

    const{urlImg} = props;

    return(
        <div className="component-skill">
            <img className="img-skill" src={urlImg} alt="aaron hidalgo" />
        </div>
    )
}

export default Skill;