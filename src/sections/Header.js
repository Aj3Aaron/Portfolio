import Photo from "../img/7.png";

function Header(){
    return(
        <header className='header row'>
            <div className="div-photo col-sm">
                <div class="contenedor">
                    <div class="tarjeta">
                    <span className="span-avatar">
                        <img className="photo" src={Photo} alt="Photo" />
                    </span>
                    </div>
                </div>
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