import React, {Component} from 'react';
class Qualifications extends Component {
    render(){
        return(
            <div className = "block" id = "qual">
            <h1>Qualifications</h1>
            <div className = "school" >
            <h2 style = {{color: "#8eead1"}}>Stack</h2>

                <ul className = "list">
                    <li>React Native</li>
                    <li>Kotlin</li>
                    <li>Java</li>
                    <li>Python</li>
                    <li>C</li>
                    <li>React</li>
                    <li>Javascript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Node/Express</li>
                    <li>Matlab</li>
                    <li>Git</li>

                </ul>

            </div>
            <div className = "school">
            <h2 style = {{color: "#8eead1"}}> Coursework</h2>
                <ul className = "list">
                    <li>CS89 -- Cognitive Computing with Watson</li>
                    <li> CS67 -- Human-Computer Interaction</li>
                    <li> CS61 -- Databases</li>
                    <li> LING17 -- Sociolinguistics</li>
                    <li> CS56/ENGS31 -- Digital Electronics</li>
     
                    <li> CS50 -- Software Design and Implementation</li>
                    <li> CS72/LING48 -- Accelerated Computational Linguistics</li>
                    <li> LING21 -- Phonology</li>
     
                    <li> CS31 -- Algorithms</li>
                    <li> CS70 -- Machine Learning</li>
    
                    <li> CS30 -- Discrete Mathematics for Computer Science</li>
                    <li> CS16/PSYCH40 -- Computational Neuroscience</li>
  
                    <li> CS11 -- Foundations of Applied Computer Science (Linear Algebra)</li>

                    <li> CS10 -- Object Oriented Programming</li>
                    <li> LING1 -- Introductory Linguistics</li>
                    <li> MATH 11 -- Multivariable Calculus</li>

                </ul>
                
            </div>
         </div>
        );
    }
}export default Qualifications;