import React, {Component} from 'react';
import me from '../assets/me.jpg';


class About extends Component {

    render(){
        return(
            <div className = "block">
              <h1>About Me</h1>
              <div className = "aboutPage">
              <div className = "about">
                <ul>
                  <li>I'm a <span> Dartmouth '21  </span>from Chicago, IL</li>
                  <li>I am currently a software engineer intern at Cambly, a mobile and web english teaching app. Previously, I was creating full stack web apps for the DALI Lab. See more <a href = "#jobs">here</a></li>
                  <li>While I am eager to explore all fields of computer science, I am particularly interested in <span>NLP and computational linguistics</span></li>
                  <li>I was a <span>competitive rock climber</span> throughout most of my childhood and a youth climbing coach for 5 years</li>
                  <li>I have been a camp counselor for 3 years, so <span>I love working with children and being in the outdoors </span></li>
                  <li>Outside of class, I participate in <span>Growing Change</span> where I teach elementary school children about science and sustainability, play <span>club field hockey</span>, and am the sisterhood chair for my sorority, <span>Sigma Delta</span></li>
                  <li>TEST1</li>
                </ul>
              </div>
              <img src = {me} className = "personalPic" alt = "pic of me"/>
              </div>
              </div>
    
      );
};

}export default About;