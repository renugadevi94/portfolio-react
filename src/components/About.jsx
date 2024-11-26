
import { FaEnvelope, FaGithub, FaLinkedin, FaPhoneSquareAlt } from 'react-icons/fa';
import './about.css';



const About = () => {

  const handleGetResume = () => {
    
    window.open('https://drive.google.com/file/d/1iruZRhwx3lXly-0YGHxtZL3I7wJJfQxc/view?usp=sharing', '_blank');
  };

  return (
    <section className="about" id="about">
     
        <div className="about-content">
        <h2>About Me</h2>
        
          <p>
          As Passionate enthusiast transitioning to Full Stack Development, excited to utilize
foundational programming knowledge gained through relevant courses or self-study. Although
lacking professional experience, committed to expanding skill set and contributing effectively to
development projects. Seeking entry-level position to apply technical aptitude, collaborate with
experienced professionals, and pursue continuous learning and growth in full-stack development field.
          </p>
        
          <div className="social-icons">
            <a href="mailto:srenugadevi1991@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope /></a>
            <a href="https://github.com/renugadevi94" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/renugadevi1994" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="tel:9080059073"><FaPhoneSquareAlt /></a>
          </div>
          <div className="button-container">
          <button onClick={handleGetResume}>Get Resume</button>
          </div>
        </div>
      {/* </div> */}
    </section>
  );
}

export default About;