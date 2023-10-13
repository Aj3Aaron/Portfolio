
import React, { useState, useEffect } from "react";

import "../styles/DownloadCv.css";

function DownloadCV(){


    
    const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollTimer;

    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimer);

      scrollTimer = setTimeout(() => {
        setIsScrolling(false);
      }, 3000);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimer);
    };
  }, []);

    

    return(
        <>
            
            <div id="icon-container" className={`icon-container ${isScrolling ? "hidden" : " visible"}`}>
                <a
                className="pdf-link"
                href={require('../documents/CV_Aaron_Hidalgo.pdf')}
                download="CV_Aaron_Hidalgo.pdf"
                >
                    <img
                    className="img-downloadCV"
                    src={ require ('../img/downloadCV.png') }
                    alt="img CV"
                    // onClick={() => {
                        
                    // }}
                    
                    />
                </a>
                    
            </div>
               
        </>
    )
}

export default DownloadCV;