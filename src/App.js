import Header from "./sections/Header";
import AboutMe from "./sections/AboutMe";
import Nav from "./components/nav";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Certifications from "./sections/Certifications";
import Footer from "./sections/Footer";
import React, { useState, useEffect } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';

function App () {

    const [isVisible, setIsVisible] = useState(true);
    const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollTimer;

    const handleScroll = () => {
      setIsScrolling(true);
      setIsVisible(false);
      clearTimeout(scrollTimer);

      scrollTimer = setTimeout(() => {
        setIsScrolling(false);
        setIsVisible(true);
      }, 1000);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimer);
    };
  }, []);


    return (
        <>
            <Nav />
            <Header />
            <AboutMe />
            <Projects />
            <Skills />
            <Certifications />
            <Footer />
            {isScrolling ? null : (
            <div id="icon-container" className={`icon-container ${isVisible ? "visible" : "hidden"}`}>
                <img className="img-downloadCV" src={ require ('./img/downloadCV.png') } alt="img CV"></img>
            </div>
            )}   
        </>
    );
    
  }
export default App;
