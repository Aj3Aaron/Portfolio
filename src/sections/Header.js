import Photo from "../img/FotoSexy.jpg";

function Header(){
    return(
        <header className='header row'>
            <div className="div-photo col-sm">
                <span className="span-avatar">
                    <img className="photo" src={Photo} alt="Photo" />
                </span>
            </div>
            <div className="contenedor-header col-sm contenedor_header">
                <div className="nombre">
                    <span className="fade-in">Aaron Hidalgo</span>
                </div>
                <h2 className="profesion">Desarrollador Full Stack Web y Mobile Multiplataforma</h2>
            </div>
        </header>
    )
}

export default Header;