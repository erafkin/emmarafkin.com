import React, {Component} from 'react';

class Jobs extends Component {
    constructor(props) {
      super(props);
    } 
    render(){
        return(
            <div className = "jobs">
            <h1> Work</h1>          
            <div className = "job">
              <b><a href = "http://dali.dartmouth.edu/" target = "_blank" rel = "noopener noreferrer">Dali Lab </a>-- Software Engineer</b>
              <p>DALI is a fast-paced, student run experiential learning lab at Dartmouth. <br/>
                Develop full stack websites for start ups and researchers.<br/> </p>
                 <b>Recent projects include:</b> 
                <p><b><a href = "http://bioentrepreneurresources.com/" target = "_blank" rel = "noopener noreferrer">Bioentrepreneur Accelerator Hub</a></b>: 
              This Accelerator Hub is a NIH-funded collaboration between top biomedical institutions across the United States that provides resources for independent biomedical entrepreneurs. Frontend is built in React.js, backend in Node.js/Express.js, and NoSQL (mongoDB) database.
                </p>
                <p><b><a href = "http://dalidocplanner.surge.sh/" target = "_blank" rel = "noopener noreferrer">DOC Planner</a></b>: 
              Day trip planning website for the Dartmouth Outing Club. Frontend is built in React.js, backend in Node.js/Express.js, and NoSQL (mongoDB) database.
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
              <b><a href = "http://campnicolet.com/" target = "_blank" rel = "noopener noreferrer">Camp Nicolet</a>-- Counselor</b>
              <p>Responsible for a cabin of 8 13-year-old girls for the 8-week season. Planned, supervised, and executed daily activities, meals, and special events. Selected to lead a week-long advanced water ski skills camp. Lead week long canoeing and hiking trips in the back country. Certified in CPR, life guarding, and ski instruction.</p>
            </div>
            
  
        </div>
        );
};

}export default Jobs;