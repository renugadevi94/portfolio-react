
import React, { useRef } from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import './intro.css';


const Intro = () => {
  const [text] = useTypewriter({
    words: ['Full Stack Developer', 'MERN Developer', 'Web Developer', 'UI/UX Developer'],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  
  const aboutRef = useRef();

  
  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="intro" id="intro">
      <div className="introcontent">
        <p>Hello, I am <span style={{ color: 'yellow' }}>Renugadevi</span></p>
        <br />
        <p className='type'>
          <span className="developerName">{text}</span>
          <Cursor
            cursorBlinking='true' 
            cursorStyle='|'
            cursorColor='var(--first-color)'
          />
        </p>
        <div className="btn-group">

        <a href="#about" className="btn">More about me </a>
        </div>
       
      </div>
      
      <div ref={aboutRef} />
    </section>
  );
};

export default Intro;



