import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className = "landing-page">
          <div className = "titles">
             <h1 className = "name">Emma Rafkin</h1>
          </div>
            
      </div>

      <div className = "education">
      <div className = "school" >
          <h1>About Me</h1>

          <p>
          I am a Dartmouth '21 from <a href = "https://www.youtube.com/watch?v=HOp8w2PgHlM" target = "_blank" rel = "noopener noreferrer">Chicago, IL.</a> <br/>
          I grew up going to school on UChicago's campus, so I was lucky in that I had access to a lot of CS courses throughout high school. <br/>
          I was a competitive rock climber throughout most of my childhood and was a youth climbing coach for 5 years. <br/>
          I have also been a camp counselor for the past 3 years, so I love working with children and the outdoors. <br/>
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
                  <li> CS72 -- Accellerated Computational Linguistics</li>
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
      <div className = "jobs">
          <h1> Work</h1>          
          <div className = "job">
            <b><a href = "http://dali.dartmouth.edu/" target = "_blank" rel = "noopener noreferrer">Dali Lab </a>-- Software Engineer</b>
            <p>DALI is a fast-paced, student run experiential learning lab at Dartmouth. <br/>
              Develop full stack websites for start ups and researchers.<br/> </p>
               <b>Recent projects include:</b> 
              <p><b><a href = "http://bioentrepreneurresources.com/" target = "_blank" rel = "noopener noreferrer">Bioentrepreneur Accelerator Hub</a></b>: 
            This Accelerator Hub is a NIH-funded collaboration between top biomedical institutions across the United States that provides resources for independent biomedical entrepreneurs. Frontend is build in React.js, backend in Node.js/Express.js, and NoSQL (mongoDB) database.
              </p>
              <p><b><a href = "http://dalidocplanner.surge.sh/" target = "_blank" rel = "noopener noreferrer">DOC Planner</a></b>: 
            Day trip planning website for the Dartmouth Outing Club. Frontend is build in React.js, backend in Node.js/Express.js, and NoSQL (mongoDB) database.
              </p>
          </div>
          <div className = "job">
            <b>Dartmouth College -- <a href = "https://cs.dartmouth.edu/~cs10/" target = "_blank" rel = "noopener noreferrer">CS10</a> Teaching Assistant </b>
            <p>Mentored students in the Object Oriented Programming course. Held weekly recitation sections to help enforce the concepts learned in lectures. Graded all assignments, labs, and tests. Held office hours to collaborate with students to help them develop a deeper understanding of the nuances of the topics.</p>
          </div>
          <div className = "job">
            <b><a href = "https://computing.thayer.dartmouth.edu/" target = "_blank" rel = "noopener noreferrer">Thayer School Computing Services</a> -- Help Desk Technician</b>
            <p>Answered computing questions for the students and faculty at Thayer School of Engineering. Worked with clients to solve hardware difficulties. Implemented an organizational system across the computing services at the school.</p>
          </div>
          <div className = "job">
            <b><a href = "http://campnicolet.com/" target = "_blank" rel = "noopener noreferrer">Camp Nicolet</a>-- Couselor</b>
            <p>Responsible for a cabin of 8 13-year-old girls for the 8-week season. Planned, supervised, and executed daily activities, meals, and special events. Selected to lead a week-long advanced water ski skills camp. Lead week long canoeing and hiking trips in the back country. Certified in CPR, life guarding, and ski instruction.</p>
          </div>
          

      </div>
      
      <div className = "personal-projects">

      <p> some personal projects and the github repos</p>

      </div>
 
      <div className = "links">
        <p> Connect with me on <a href = "https://www.linkedin.com/in/emma-rafkin-2966406b/" target = "_blank" rel = "noopener noreferrer">LinkedIn </a> 
          or <a href = "mailto:emma.p.rafkin.21@dartmouth.edu">email </a>me!
         </p>
      </div>
    </div>
  );
}

export default App;
