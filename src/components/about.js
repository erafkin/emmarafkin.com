import React, {useState, useEffect, useRef} from 'react';
import me from '../assets/me_boat.jpeg';


const About = (props) => {
  const [isVisible, setVisible] = useState(true);
  const domRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    const domRefCurrent = domRef.current
    observer.observe(domRefCurrent);
    return () => observer.unobserve(domRefCurrent);
  }, []);

        return(
            <div
            className={`block fade-in-section ${isVisible ? 'is-visible' : ''}`}
            ref={domRef}
            >
              <h1>About Me</h1>
              <div className = "aboutPage">
              <div className = "about">
                <ul>
                  <li>I'm a <span> Dartmouth '21  </span>from Chicago, IL</li>
                  <li> I create full stack web and mobile apps for the DALI Lab. Starting August 2021 I will be working as a Software Engineer at JHUAPL. See more <a href = "#jobs">here</a></li>
                  <li>While I am eager to explore all fields of computer science, I am particularly interested in <span>NLP and computational linguistics</span></li>
                  <li>I was a <span>competitive rock climber</span> throughout most of my childhood and a youth climbing coach for 5 years</li>
                  <li>I was a camp counselor for 3 years, so <span>I love working with children and being in the outdoors </span></li>
                  <li>As well as being a developer at the <span>DALI Lab</span>, I am also a member of the Core team and am the <span>Women in Science Program</span> lead for DALI</li>
                  <li>Outside of class, I participate in <span>Growing Change</span> where I teach elementary school children about science and sustainability, play <span>club field hockey</span>, and am the sisterhood chair for my sorority, <span>Sigma Delta</span></li>
                </ul>
              </div>
              <img src = {me} className = "personalPic" alt = "pic of me"/>
              </div>
              </div>
    
      );


}
export default About;