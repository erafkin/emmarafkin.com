import React, {Component} from 'react';

class Jobs extends Component {

    render(){
        return(
            <div className = "block">
            <h1> Work Experience</h1>   
            <div className = "job">
              <h2> Software Engineer Intern @ <span>Cambly</span></h2>
              <h3> January 2020 - Present</h3>
              <p> The Cambly app gives English learners instant 1-on-1 access to friendly native speakers over video chat. There are web and mobile platforms. As a software engineer intern I...<br/> </p>
                <ul className = "jobList">
                    <li> Worked to upgrade the Android app to keep it up to date as Cambly expands</li>
                    <li>Explored mobile development</li>
                    <li>Worked in both Java and Kotlin</li>
                </ul>
                </div>       
            <div className = "job">
              <h2> Software Engineer @ <span>DALI Lab</span></h2>
              <h3> January 2019 - Present</h3>
              <p>DALI is a fast-paced, student run experiential learning lab at Dartmouth. As a software developer, I...<br/> </p>
                <ul className = "jobList">
                    <li> Develop full stack websites for startups and researchers</li>
                    <li>Collaborate with designers and partners three times a week</li>
                    <li>Use a wide range of tech stacks</li>
                </ul>
            </div>
            <div className = "job">
              <h2> Teaching Assistant @ <span>Dartmouth College</span></h2>
              <h3> September 2018 - November 2018</h3>
              <p> I was a teaching assistant for the Object Oriented Programming class at Dartmouth. As a teaching assistant, I...<br/> </p>
                <ul className = "jobList">
                    <li>Held a weekly review session to go over that week's topics</li>
                    <li>Held office hours three times a week to answer student questions</li>
                    <li>Graded tests and homeworks</li>
                </ul>
                </div>
              <div className = "job">
              <h2> Computer Help Desk Technician @ <span>Thayer School of Engineering</span></h2>
              <h3> January 2018 - June 2018</h3>
              <p> Thayer computing services assists engineering students, faculty, and staff with any computing problems that may arise. As a help desk technician, I...<br/> </p>
                <ul className = "jobList">
                    <li>Replaced and fixed broken computer parts</li>
                    <li>Restructured and replaced the tablet informational system in the building</li>
                    <li>Answered any computing questions that people had</li>
                </ul>
              </div>
              <div className = "job">
              <h2> Camp Counselor @ <span>Camp Nicolet for Girls</span></h2>
              <h3> June 2017 - August 2018</h3>
              <p> Camp Nicolet is a space where girls can grow to be independent young leaders. As a counselor I...<br/> </p>
                <ul className = "jobList">
                    <li>Was responsible for the wellbeing of 8 13 year old girls</li>
                    <li>Was a waterfront, waterskiing, and tennis instructor</li>
                    <li>Ran the elite waterskiing program</li>
                </ul>
                </div>
  
        </div>
        );
};

}export default Jobs;