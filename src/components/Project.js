import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { CSSTransition } from 'react-transition-group';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import Skill from './Skill';

import "../styles/Project.css";
import '../styles/Modal.css';


Modal.setAppElement('#root');


function Project(props){

    const {urlImg, projectTitle, projectDescription, tuGruero, skills, linkProject, urlImg1, urlImg2, urlImg3} = props;
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [style, setStyle] = useState('span-component');

    function display_menu(display){
        const menuElement = document.querySelector('.menu');
        if (menuElement) {
          menuElement.style.display = display;
        }
    }

    function scroll(action){
        document.body.style.overflow = action;
    }

    const openModal = () => {
        setModalIsOpen(true);
        setStyle('project-open');
        display_menu('none');
        scroll('hidden');
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setStyle('span-component');
        display_menu('flex');
        scroll('auto');
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
                            <div className='div-photo-modal'>
                                <div className='div-background-icons'>
                                    <div className='div-icons'>
                                        <p className='icon-red'></p>
                                        <p className='icon-yellow'></p>
                                        <p className='icon-green'></p>
                                    </div>
                                </div>
                                <img className="photo-modal" src={urlImg} alt="Photo" />
                            </div>
                            <div className='div-photo-modal'>
                                <div className='div-background-icons'>
                                    <div className='div-icons'>
                                        <p className='icon-red'></p>
                                        <p className='icon-yellow'></p>
                                        <p className='icon-green'></p>
                                    </div>
                                </div>
                                <img className="photo-modal" src={urlImg1} alt="Photo" />
                            </div>
                            <div className='div-photo-modal'>
                                <div className='div-background-icons'>
                                    <div className='div-icons'>
                                        <p className='icon-red'></p>
                                        <p className='icon-yellow'></p>
                                        <p className='icon-green'></p>
                                    </div>
                                </div>
                                <img className="photo-modal" src={urlImg} alt="Photo" />
                            </div>
                        </Carousel>
                        <div>
                            <span onClick={closeModal} className='modal-close'><FontAwesomeIcon  icon={faTimes} /></span>
                        </div>
                    </div>
                    <h1 className='h1-modal' >{projectTitle} <a className='icon-link' target="_blank" rel="noopener noreferrer" href={linkProject}><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a></h1>
                    {tuGruero ? (
                        <p>
                            {projectDescription.tuGruero_description_1}
                            <a target="_blank" rel="noopener noreferrer" href={projectDescription.tuGrueroLink}>
                            TuGruero.io
                            </a>
                            {projectDescription.tuGruero_description_2}
                        </p>
                        ) : (
                        <p>{projectDescription}</p>
                    )}

                    <div className='skills-modal' >
                        {skills.map((element, index) => (
                            <Skill key={index} urlImg={element} />
                        ))}
                    </div>

                    

                    
                </Modal>
            </CSSTransition>
        </div>
    )
}

export default Project;