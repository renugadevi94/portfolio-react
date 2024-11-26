import React from 'react';
import './portfolio.css';
import { FaReact } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiNodedotjs } from 'react-icons/si';
import img1 from '../assets/project1.png';
import img2 from '../assets/project2.png';
import img3 from '../assets/project3.png';
//import Form_Converter from '../../assets/Form_Converter.png';
//import Train_Booking from '../../assets/Train_Booking.png';


 const Portfolio = () => {
  return (
    <>
      <div id="portfolio" className='section'>
        <h2 className='section__title different'>
          {' '}
           Full Stack Projects
        </h2>
        <div className='allProjects'>
          <div className='projects_container' data-aos='fade-right'>
            <div className='project'>
              <div className='project_videocontainer'>
                <div>
                  <img src={img1} alt='MemoriaConnect' />
                </div>
              </div>
              <div className='project_information'>
                <h2>Zenclass Dashboard</h2>
                <p>
                  Student Dashboard for ZEN class,enabling students to attend classes,submit assignments,ask questions,and request leaves. Access resources and learning materials.stay updated on important notifications and deadlines.
                </p>
                <div>
                  <FaReact />
                  <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                </div>
                <div>
                  <a
                    href='https://github.com/renugadevi94/zenclass-frontend'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <span type='button' className='btns onbt onbt'>
                      Github FE
                    </span>
                  </a>
                  <a
                    href='https://github.com/renugadevi94/zenclass-backend'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <span type='button' className='btns onbt onbt'>
                      Github BE
                    </span>
                  </a>
                  <a
                    href='	https://unique-lolly-264d1d.netlify.app/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <span type='button' className='btns onbt onbt'>
                      See this Live
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='projects_container' data-aos='fade-right'>
            <div className='project'>
              <div className='project_videocontainer'>
                <div>
                  <img src={img2} alt='Expense_Tracker' />
                </div>
              </div>
              <div className='project_information'>
                <h2>Url_Shortner</h2>
                <p>
                A URL shortener is an app that converts a long URL into a short URL. The idea is to minimize the web page address into something that's easier to remember and track. Typically, it shortens the website's address and adds a random combination of letters and numbers.
                </p>
                <div>
                  <FaReact />
                  <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                </div>
                <div>
                  <a
                    href='https://github.com/renugadevi94/url-shortner-frontend'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <span type='button' className='btns onbt onbt'>
                      Github FE
                    </span>
                  </a>
                  <a
                    href='https://github.com/renugadevi94/url-shortner-backend'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <span type='button' className='btns onbt onbt'>
                      Github BE
                    </span>
                  </a>
                  <a
                    href='https://effulgent-gumption-768eb1.netlify.app/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <span type='button' className='btns onbt onbt'>
                      See this Live
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className='projects_container' data-aos='fade-right'>
            <div className='project'>
              <div className='project_videocontainer'>
                <div>
                  <img src={img3} alt='Form_Converter' />
                </div>
              </div>
              <div className='project_information'>
                <h2>ChatVibe</h2>
                <p>
                ChatVibe is a user-friendly messaging app that lets you connect with friends, family, and teams in real time. With features like instant messaging, media sharing, group chats, and customizable themes, ChatVibe makes communication simple, fun, and secure. Available on mobile and web, it keeps you connected anytime, anywhere.
                </p>
                <div>
                  <FaReact />
                  <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                </div>
                <div>
                  <a
                    href='https://github.com/renugadevi94/Chatvibe-Frontend'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <span type='button' className='btns onbt'>
                      Github FE
                    </span>
                  </a>
                  <a
                    href='https://github.com/renugadevi94/Chatvibe-Backend'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <span type='button' className='btns onbt'>
                      Github BE
                    </span>
                  </a>
                  <a
                    href='https://symphonious-dragon-c904b0.netlify.app/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <span type='button' className='btns onbt'>
                      See this Live
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;