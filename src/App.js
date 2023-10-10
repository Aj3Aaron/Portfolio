import Header from "./sections/Header";
import AboutMe from "./sections/AboutMe";
import Nav from "./sections/nav";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Certifications from "./sections/Certifications";
import Footer from "./sections/Footer";

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';

function App () {

    return (
        <>
            <Nav />
            <Header />
            <AboutMe />
            <Projects />
            <Skills />
            <Certifications />
            <Footer />
        </>
    );
    
  }
export default App;
