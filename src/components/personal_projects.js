import React, {Component} from 'react';
import Header from './header';
class Personal_Projects extends Component {
    constructor(props) {
      super(props);
    } 
    render(){
        return(
      <div className = "block">
                  <Header/>

        <h1> Personal Projects</h1>
        <div className = "job">
            <b><a href = "https://github.com/erafkin/PoetryTexts" target = "_blank" rel = "noopener noreferrer">Poetry Texts</a></b>
            <p>This is a quick backend project that pings a database to populate a text with a random poem that is then sent to certain phone numbers once a day</p>
           
        </div>
        <div className = "job">
        <b><a href = "https://github.com/erafkin/code_ex19x" target = "_blank" rel = "noopener noreferrer">Last Chances</a></b>
            <p>A website for Dartmouth students to find love before the summer ends. Dartmouth students can log in with their student credentials to crush on other students. If the crushes are mutual, they are matched. If the crush is one-sided, it remains anonymous. 97% of students taking classes signed up.</p>
        </div>
        <div className = "job">
        <b><a href = "https://github.com/erafkin/secretSanta" target = "_blank" rel = "noopener noreferrer">Secret Santa</a></b>
            <p>A simple HTML/CSS/Javascript website that helps generate secret santa assignments amongst inputted names.</p>
        </div>

       
      </div>
        );
};

}export default Personal_Projects;