import React, {Component} from 'react';

class Jobs extends Component {

    render(){
        return(
            <div className = "block" id = "jobs">
            <h1> Work Experience</h1> 
            <div className = "job">
              <h2> Software Engineer @ <a href = "https://www.jhuapl.edu/" target = "_blank" rel = "noopener noreferrer" className = "spanlink"><span> Johns Hopkins University Applied Physics Lab</span></a></h2>
              <h3> Starting August 2021 </h3>
              {/* <p> This summer I will start my full time job as a software engineer working with ML and NLP at the Johns Hopkins University Applied Physics Lab <br/> </p> */}
                {/* <ul className = "jobList">
                    <li>Enhanced a previously existing report and created a new report to help property managers stay up to date on the battery levels of all of the devices across their many units</li>
                    <li>Learned an entirely new code base and worked on creating thorough unit tests for every ticket</li>
                    <li>Worked in both C# and Ember.js</li>
                </ul> */}
            </div>         
            <div className = "job">
              <h2> Software Engineer @ <a href = "http://dali.dartmouth.edu/" target = "_blank" rel = "noopener noreferrer" className = "spanlink"><span> DALI Lab</span></a></h2>
              <h3> January 2019 - Present</h3>
              <p>DALI is a fast-paced, student run experiential learning lab at Dartmouth. As a software developer, I...<br/> </p>
                <ul className = "jobList">
                    <li> Develop full stack websites for startups and researchers</li>
                    <li>Collaborate with designers and partners three times a week</li>
                    <li>Use a wide range of tech stacks including React, Node/Express, and Mongodb</li>
                </ul>
              <p>From June 2020-June 2021, I was a memeber of the core executive board and was the Women in Science Project Lead for DALI.</p>
            </div>
            <div className = "job">
              <h2> Software Engineer Intern @ <a href = "https://www.alarm.com/" target = "_blank" rel = "noopener noreferrer" className = "spanlink"><span> Alarm.com</span></a></h2>
              <h3> June 2020 - August 2020</h3>
              <p> This summer I interned at Alarm.com, a smart home application that integrates security and utility hardwear for homes and buisnesses<br/> </p>
                <ul className = "jobList">
                    <li>Enhanced a previously existing report and created a new report to help property managers stay up to date on the battery levels of all of the devices across their many units</li>
                    <li>Learned an entirely new code base and worked on creating thorough unit tests for every ticket</li>
                    <li>Worked in both C# and Ember.js</li>
                </ul>
                </div>       
            <div className = "job">
              <h2> Software Engineer Intern @ <a href = "https://www.cambly.com/english?lang=en" target = "_blank" rel = "noopener noreferrer" className = "spanlink"><span> Cambly</span></a></h2>
              <h3> January 2020 - March 2020</h3>
              <p> The Cambly app gives English learners instant 1-on-1 access to friendly native speakers over video chat. There are web and mobile platforms. As a software engineer intern I...<br/> </p>
                <ul className = "jobList">
                    <li> Implemented the new "courses" feature on the Android app--retrieving and manipulating data as well as implmenting UI designs</li>
                    <li> Worked to upgrade the Android app to keep it up to date as Cambly expands</li>
                    <li>Worked in Kotlin and Java</li>
                </ul>
                </div>       
            <div className = "job">
              <h2> Teaching Assistant @ <a href = "https://cs.dartmouth.edu/~cs10/" target = "_blank" rel = "noopener noreferrer" className = "spanlink"><span> Dartmouth College</span></a></h2>
              <h3> September 2018 - November 2018</h3>
              <p> I was a teaching assistant for the Object Oriented Programming class at Dartmouth. As a teaching assistant, I...<br/> </p>
                <ul className = "jobList">
                    <li>Held a weekly review session to go over that week's topics</li>
                    <li>Held office hours three times a week to answer student questions</li>
                    <li>Graded tests and homeworks</li>
                </ul>
                </div>
              <div className = "job">
              <h2> Computer Help Desk Technician @ <a href = "https://computing.thayer.dartmouth.edu/" target = "_blank" rel = "noopener noreferrer" className = "spanlink"><span> Thayer School of Engineering</span></a></h2>
              <h3> January 2018 - June 2018</h3>
              <p> Thayer computing services assists engineering students, faculty, and staff with any computing problems that may arise. As a help desk technician, I...<br/> </p>
                <ul className = "jobList">
                    <li>Replaced and fixed broken computer parts</li>
                    <li>Restructured and replaced the tablet informational system in the building</li>
                    <li>Answered any computing questions that people had</li>
                </ul>
              </div>
              <div className = "job">
              <h2> Camp Counselor @ <a href = "https://campnicolet.com/" target = "_blank" rel = "noopener noreferrer" className = "spanlink"><span> Camp Nicolet</span></a></h2>
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