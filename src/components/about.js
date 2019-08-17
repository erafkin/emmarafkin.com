import React, {Component} from 'react';

class About extends Component {
    constructor(props) {
      super(props);
    } 
    render(){
        return(
    <div className = "education">
      <div className = "school" >
          <h1>About Me</h1>

          <p>
          I am a Dartmouth '21 from <a href = "https://www.youtube.com/watch?v=HOp8w2PgHlM" target = "_blank" rel = "noopener noreferrer">Chicago, IL.</a> <br/>
          I grew up going to school on UChicago's campus, so I was lucky in that I had access to a lot of CS courses throughout high school. <br/>
          I was a competitive rock climber throughout most of my childhood and was a youth climbing coach for 5 years. <br/>
          I have also been a camp counselor for the past 3 years, so I love working with children and being in the outdoors (these background pictures are from some of my favorite hikes)! <br/>
          </p>
          <h2> Current Extracurricular Activities</h2>
          <div>
          <ul>
            <li>Sigma Delta Sorority -- Sisterhood chair</li>
            <li>Growing Change -- teaching local elementary schoolers about nutrition and sustainability</li>
            <li>Club Field Hockey</li>
          </ul>

          </div>
          

       </div>
        <div className = "school">
          <h1> Education</h1>

            <h2> Dartmouth College</h2>
            <h3>Computer Science Major, Linguistics Minor</h3>
            <h4>2017-2021</h4>
            <h2> Relevant Coursework</h2>
              <ul>
                <li> 19X</li>
                <ul>
                  <li> CS56/ENGS31-- Digital Electronics</li>
                </ul>
                <li> 19S</li>
                <ul>
                  <li> CS50 -- Software Design and Implementation</li>
                  <li> CS72/LING48 -- Accellerated Computational Linguistics</li>
                  <li> LING21 -- Phonology</li>
                </ul>
                <li> 19W</li>
                <ul>
                  <li> CS31 -- Algorithms</li>
                  <li> CS70 -- Machine Learning</li>
                </ul>
                <li> 18F</li>
                <ul>
                  <li> CS30 -- Discrete Mathematics for Computer Science</li>
                  <li> CS16/PSYCH40 -- Computational Neuroscience</li>
                </ul>
                <li> 18S</li>
                <ul>
                  <li> CS11 -- Foundations of Applied Computer Science (Linear Algebra)</li>
                </ul>
                <li> 18W</li>
                <ul>
                  <li> CS10 -- Object Oriented Programming</li>
                  <li> LING1 -- Introductory Linguistics</li>
                </ul>
                <li> 17F</li>
                <ul>
                  <li> MATH 11 -- Multivariable Calculus</li>
                </ul>

              </ul>
        <h2>University of Chicago Laboratory Schools</h2>
        <h4>2013-2017</h4>
       </div>
      </div>
        );
};

}export default About;