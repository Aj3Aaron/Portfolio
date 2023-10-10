import React, { useState, useEffect } from 'react';
import '../styles/AboutMe.css'; // Importa el archivo CSS

const Typewriter = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(interval);
      }
    }, 20); // Ajusta la velocidad de escritura aquí

    return () => {
      clearInterval(interval);
    };
  }, [text, currentIndex]);

  return (
    <div className="terminal">
      <span>
        {displayText}
        <span className="cursor"></span>
      </span>
    </div>
  );
};

export default Typewriter;