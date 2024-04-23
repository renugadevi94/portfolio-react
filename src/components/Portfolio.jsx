import React from 'react'
import './portfolio.css'
import img1 from "../assets/project1.png"
import img2 from "../assets/project2.png"

const Portfolio = () => {
  return (
    
        <section className="projects" id="projects">
            <h2 className="heading-project"> <span>My</span>  Projects</h2>
            <div className="project-container">
                <div className="project-box">
                    <img src={img1} alt="zenclass dashboard" className="project-img" />
                    <div className="project-layer">
                        <h4>Zenclass Dashboard</h4>
                        <a href="https://unique-lolly-264d1d.netlify.app" className="btn-btn" target="_blank" rel="noopener noreferrer">Live</a>
                        <a href="https://github.com/renugadevi94/zenclass-frontend" className="btn-btn" target="_blank" rel="noopener noreferrer">Frontend</a>
                        <a href="https://github.com/renugadevi94/zenclass-backend" className="btn-btn" target="_blank" rel="noopener noreferrer">Backend</a>
                    </div>
                </div>
                <div className="project-box">
                    <img src={img2} alt="land page" className="project-img" />
                    <div className="project-layer">
                        <h4>Url Shortener</h4>
                        <a href="https://effulgent-gumption-768eb1.netlify.app" className="btn-btn" target="_blank" rel="noopener noreferrer">Live</a>
                        <a href="https://github.com/renugadevi94/url-shortner-frontend" className="btn-btn" target="_blank" rel="noopener noreferrer">Frontend</a>
                        <a href="https://github.com/renugadevi94/url-shortner-backend" className="btn-btn" target="_blank" rel="noopener noreferrer">Backend</a>
                    </div>
                </div>
                {/* <div className="project-box">
                    <img src="./assets/project2.png" alt="land page" className="project-img" />
                    <div className="project-layer">
                        <h4>Url Shortener</h4>
                        <a href="https://effulgent-gumption-768eb1.netlify.app" className="btn-btn" target="_blank" rel="noopener noreferrer">Live</a>
                        <a href="https://github.com/renugadevi94/url-shortner-frontend" className="btn-btn" target="_blank" rel="noopener noreferrer">Frontend</a>
                        <a href="https://github.com/renugadevi94/url-shortner-backend" className="btn-btn" target="_blank" rel="noopener noreferrer">Backend</a>
                    </div>
                </div> */}
            </div>
        </section>
    );
}

export default Portfolio