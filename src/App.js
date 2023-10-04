import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Nav from "./components/nav";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";

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
