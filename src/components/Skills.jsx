

import React from "react";
import './skills.css'
import {
  FaReact,
  FaNodeJs,
  FaAws
} from "react-icons/fa";
import {
  SiRedux,
  SiHtml5,
  SiExpress,
  SiJavascript,
  SiNetlify,
  SiMysql,
  SiPostman,
  SiRender
} from "react-icons/si";
import {
  DiCss3,
  DiMongodb
} from "react-icons/di";
import { VscGithub } from "react-icons/vsc";
import { BsBootstrap } from "react-icons/bs";

function Skills() {
  return (
    <section className="skills" id="skills">
      <h2 className="heading-skill">Skills</h2>
      <div className="container">
        <div className="row" id="skillsContainer">
          <div className="bar">
            <div className="info">
              <SiHtml5 className="html-icon" size={100} />
              <span>Html</span>
            </div>
          </div>
          <div className="bar">
            <div className="info">
              <DiCss3 className="css-icon" size={100} />
              <span>Css</span>
            </div>
          </div>
          <div className="bar">
            <div className="info">
              <SiJavascript className="js-icon" size={100} />
              <span>JavaScript</span>
            </div>
          </div>
          <div className="bar">
            <div className="info">
              <BsBootstrap className="bootstrap-icon" size={100} />
              <span>Bootstrap</span>
            </div>
          </div>
          <div className="bar">
            <div className="info">
              <FaReact className="react-icon" size={100} />
              <span>React js</span>
            </div>
          </div>
          <div className="bar">
            <div className="info">
              <SiRedux className="redux-icon" size={100} />
              <span>Redux Js</span>
            </div>
          </div>
          <div className="bar">
            <div className="info">
              <FaNodeJs className="nodejs-icon" size={100} />
              <span>Node Js</span>
            </div>
          </div>
          <div className="bar">
            <div className="info">
              <DiMongodb className="mongodb-icon" size={100} />
              <span>Mongo Db</span>
            </div>
          </div>
          <div className="bar">
            <div className="info">
              <SiMysql className="mysql-icon" size={100} />
              <span>MySQL</span>
            </div>
          </div>
          <div className="bar">
            <div className="info">
              <VscGithub className="github-icon" size={100} />
              <span>GitHub</span>
            </div>
          </div>
          <div className="bar">
            <div className="info">
              <SiPostman className="postman-icon" size={100} />
              <span>Postman</span>
            </div>
          </div>
          <div className="bar">
            <div className="info">
              <SiRender className="render-icon" size={100} />
              <span>Render</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
