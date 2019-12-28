import React, {Component} from 'react';
import Header from './header';
import me from '../assets/me.jpg';


class About extends Component {

    render(){
        return(
    <div className = "block">
      <Header/>
      
      <h1>About Me</h1>
      <div className = "aboutPage">
      <div className = "about">
        <ul>
          <li>I'm a <span> Dartmouth '21  </span>from Chicago, IL</li>
          <li>I was a <span>competitive rock climber</span> throughout most of my childhood and a youth climbing coach for 5 years</li>
          <li>I have been a camp counselor for 3 years, so <span>I love working with children and being in the outdoors </span></li>
          <li>While I am eager to explore all fields of computer science, I am particularly interested in <span>NLP and computational linguistics</span></li>
        </ul>
      </div>
      <img src = {me} className = "personalPic"/>
      </div>
       </div>
      );
};

}export default About;