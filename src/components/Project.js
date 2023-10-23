import React, { useState, useEffect  } from 'react';
import Modal from 'react-modal';
import { CSSTransition } from 'react-transition-group';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import "../styles/Project.css";
import '../styles/Modal.css';

Modal.setAppElement('#root');


function Project(props){

    const {urlImg, projectTitle, urlImg1, urlImg2, urlImg3} = props;
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [style, setStyle] = useState('span-component');

    function display_menu(display){
        // Acceder al elemento con la clase .menu
        const menuElement = document.querySelector('.menu');
        
        // Hacer algo con el elemento, por ejemplo, ocultarlo
        if (menuElement) {
          menuElement.style.display = display;
        }
    }

    const openModal = () => {
        setModalIsOpen(true);
        setStyle('project-open');
        display_menu('none');
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setStyle('span-component');
        display_menu('flex');
    };



    return(
        <div>
            <div className="div-component">
                <span className={style} onClick={openModal}>
                    <img className="photo-component" src={urlImg} alt="Photo" />
                    <p> {projectTitle} </p>
                </span>
            </div>

            <CSSTransition
                in={modalIsOpen}
                timeout={300}
                closeTimeoutMS={300}
                classNames="modal"
                unmountOnExit
            >

                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Ejemplo de Modal"
                >
                    <div className='div-content-modal'>
                        <Carousel>
                            <div>
                                <img className="photo-modal" src={urlImg} alt="Photo" />
                            </div>
                            <div>
                                <img className="photo-modal" src={urlImg1} alt="Photo" />
                            </div>
                            <div>
                                <img className="photo-modal" src={urlImg} alt="Photo" />
                            </div>
                        </Carousel>
                    </div>
                    <button onClick={closeModal}>Cerrar Modal</button>
                </Modal>
            </CSSTransition>
        </div>
    )
}

export default Project;