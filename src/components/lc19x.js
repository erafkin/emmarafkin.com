import React, {Component} from 'react';
import github from '../assets/github.png';
import lc19x from '../assets/lc19x.png';
class LC extends Component {
    render(){
        if(window.innerWidth < 760 ){
            return( 
            <div className = "block">
            <div className = "project">
            <h2 style = {{color: "#8eead1", textAlign: "left"}}>Last Chances 19X</h2>
            <div className = "projectDesc">
                    <div className = "projectBlurb">
                    A website for Dartmouth students to find love before the summer ends. Dartmouth students can log in with their student credentials to crush on other students. If the crushes are mutual, they are matched. If the crush is one-sided, it remains anonymous. 97% of students taking classes signed up. <br/>
                        <a href = "https://github.com/erafkin/code_ex19x" target = "_blank"  rel = "noopener noreferrer"><img src = {github} style = {{width:"25px"}} alt = "github icon" /></a>
                    </div>
                <ul className = "projectList">
                    <li>Node/Express</li>
                    <li>ejs</li>
                    <li>mongoDB (NoSQL)</li>
                    <li>CAS authentication</li>

                </ul>
                </div>
            </div>
        </div>);
        }else{ 
            return(
                <div className = "block">
                <div className = "project">
                    <h2 style = {{color: "#8eead1", textAlign: "left"}}>Last Chances 19X</h2>
                    <img src = {lc19x} className = "projectPic" alt = "last chances picture"/>
                <div className = "projectDesc">
                    <div className = "projectBlurb">
                    A website for Dartmouth students to find love before the summer ends. Dartmouth students can log in with their student credentials to crush on other students. If the crushes are mutual, they are matched. If the crush is one-sided, it remains anonymous. 97% of students taking classes signed up. <br/>
                     <a href = "https://github.com/erafkin/code_ex19x" target = "_blank"  rel = "noopener noreferrer"><img src = {github} style = {{width:"25px"}} alt = "github icon"/></a>
                     </div>

                <ul className = "projectList">
                     <li>Node/Express</li>
                    <li>ejs</li>
                    <li>mongoDB (NoSQL)</li>
                    <li>CAS authentication</li>

                </ul>
                </div>
                </div>
            </div>
           
        );}
       
    }
}export default LC;