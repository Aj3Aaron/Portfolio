import Header from "./sections/Header";
import AboutMe from "./sections/AboutMe";
import Nav from "./components/nav";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Certifications from "./sections/Certifications";
import Footer from "./sections/Footer";
import DownloadCV from "./components/DownloadCv";

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
            <div className='end-footer'>
                <a className='a-end-footer'>Aaron Hidalgo 2023</a>
            </div>
            <DownloadCV />
        </>
    );
    
  }
export default App;
