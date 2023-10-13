

import '../styles/certificate.css';

function Certificate(props){
    const {urlImg} = props;

    return(
        <span className="span-certificate">
            <img className="img-certificate" src={urlImg} alt="certificate" />
        </span>
    )
}

export default Certificate;