import React, {Component} from 'react';
import open from '../assets/open.png';
import speechpic from '../assets/speech-surrogates.png';
import github from '../assets/github.png';

class SpeechSurrogates extends Component {
    render(){
        if(window.innerWidth < 760 ){
            return( 
            <div className = "block">
            <h1>Featured Projects</h1>
            <div className = "project">
                <h2 style = {{color: "#8eead1", textAlign: "left"}}>Bioentrepreneur Accelerator Hub</h2>
                <div className = "projectDesc">
                    <div className = "projectBlurb">
                    Speech Surrogates is a website dedicated to musical surrogates for languges around the world. This was a site created for professor Laura McPherson at Dartmouth College. <br/>
                    This site includes a blog, editable pages, and an interactive database for displaying surrogate languages. Please note that the first load will take 30 seconds because the website is under development and is hosted on the free tier of heroku, which sleeps after 30 minutes of no use. <br/>
                    <a href = "http://speechsurrogates.org/" target = "_blank"  rel = "noopener noreferrer"><img src = {open} style = {{width:"25px"}} alt = "open icon"/></a>
                    <a href = "https://github.com/erafkin/speech-surrogates-frontend" target = "_blank" rel = "noopener noreferrer"><img src = {github} style = {{width:"25px"}} alt = "github logo" /></a>    

                </div>
                <ul className = "projectList">
                    <li>React.js</li>
                    <li>Node/Express</li>
                    <li>mongoDB (NoSQL)</li>
                    <li>AmCcarts</li>

                </ul>
                </div>
            </div>
        </div>);
        }else{ 
            return(
                <div className = "block">
                <h1>Featured Projects</h1>
                <div className = "project">
                    <h2 style = {{color: "#8eead1", textAlign: "left"}}>Speech Surrogates</h2>
                    <img src = {speechpic} className = "projectPic" alt = "home page"/>
                    <div className = "projectDesc">
                    <div className = "projectBlurb">
                    Speech Surrogates is a website dedicated to musical surrogates for languges around the world. This was a site created for professor Laura McPherson at Dartmouth College. <br/>
                    This site includes a blog, editable pages, and an interactive database for displaying surrogate languages. Please note that the first load will take 30 seconds because the website is under development and is hosted on the free tier of heroku, which sleeps after 30 minutes of no use.  <br/> 
                    <a href = "http://speechsurrogates.org/" target = "_blank"  rel = "noopener noreferrer"><img src = {open} style = {{width:"25px"}} alt = "open icon"/></a>
                    <a href = "https://github.com/erafkin/speech-surrogates-frontend" target = "_blank" rel = "noopener noreferrer"><img src = {github} style = {{width:"25px"}} alt = "github logo" /></a>    

                    </div>
                    <ul className = "projectList">
                        <li>React.js</li>
                        <li>Node/Express</li>
                        <li>MongoDB (NoSQL)</li>
                        <li>Amcharts</li>
                    </ul>
                    </div>
                </div>
            </div>
           
        );}
       
    }
}export default SpeechSurrogates;