import React, {Component} from 'react';
import open from '../assets/open.png';
import myballot from '../assets/myballot.png';
class MyBallot extends Component {
    render(){
        if(window.innerWidth < 760 ){
            return( 
            <div className = "block" id = "cs98">
            <div className = "project">
                <h2 style = {{color: "#8eead1", textAlign: "left"}}>MyBallot</h2>
                <div className = "projectDesc">
                    <div className = "projectBlurb">
                        MyBallot was my senior culminating project that aimed to help people understand who was running in their local elections. 
                        It is an app that scrapes the internet for all information on all candidates in all races on the user's ballot, extracts common topics/issues across the race, and finds the overall position of the candidate on that topic. The webapp displays the results.
                        I worked on the NLP/ML portion of the project, using RAKE for keyphrase extraction, GloVe to find semantic relevant phrases, and Watson for the sentiment analysis. <br/>
                    <a href = "https://my-ballot.netlify.app/" target = "_blank"  rel = "noopener noreferrer"><img src = {open} style = {{width:"25px"}} alt = "open icon"/></a>
                </div>
                <ul className = "projectList">
                        <li>Python</li>
                        <li>Flask</li>
                        <li>React.js</li>
                        <li>Node/Express</li>
                        <li>mongoDB (NoSQL)</li>
                </ul>
                </div>
            </div>
        </div>);
        }else{ 
            return(
                <div className = "block" id = "cs98">
                <div className = "project">
                    <h2 style = {{color: "#8eead1", textAlign: "left"}}>MyBallot</h2>
                    <img src = {myballot} className = "projectPic" alt = "myballot home page"/>
                    <div className = "projectDesc">
                    <div className = "projectBlurb">
                        MyBallot was my senior culminating project that aimed to help people understand who was running in their local elections. 
                        It is an app that scrapes the internet for all information on all candidates in all races on the user's ballot, extracts common topics/issues across the race, and finds the overall position of the candidate on that topic. The webapp displays the results.
                        I worked on the NLP/ML portion of the project, using RAKE for keyphrase extraction, GloVe to find semantic relevant phrases, and Watson for the sentiment analysis.<br/>
                        <a href = "https://my-ballot.netlify.app/" target = "_blank"  rel = "noopener noreferrer"><img src = {open} style = {{width:"25px"}} alt = "open icon"/></a>
                    </div>
                    <ul className = "projectList">
                        <li>Python</li>
                        <li>Flask</li>
                        <li>React.js</li>
                        <li>Node/Express</li>
                        <li>mongoDB (NoSQL)</li>
                    </ul>
                    </div>
                </div>
            </div>
           
        );}
       
    }
}export default MyBallot;