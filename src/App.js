import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className = "landing-page">
          <div className = "titles">
             <h1>Emma Rafkin</h1>
             <h2> Computer Science Major at Dartmouth College. </h2>
          </div>
            
      </div>
      <div className = "jobs">
          <p> here are the jobs that I have had</p>
          <ul>
            <li> Dali</li>
            <li> Thayer IT Department</li>
            <li> Camp Nicolet for Girls</li>

          </ul>
          Learn more about <a href = "http://dali.dartmouth.edu/" target = "_blank" rel = "noopener noreferrer">Dali</a>

      </div>
      <div className = "education">
        <h1> Education</h1>
        <div className = "school">
            
            <h2> Dartmouth College</h2>
            <h3>Computer Science Major, Linguistics Minor</h3>
            <h4>2017-2021</h4>

            <h3>G.P.A. 3.67</h3>
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
        </div>
        <div className = "school">
        <h2>University of Chicago Laboratory Schools</h2>
        <h3>G.P.A. 3.92</h3>
        <h4>2013-2017</h4>
        <h2> Relevant Coursework</h2>
        <ul>
            <li> Senior </li>


        </ul>



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
