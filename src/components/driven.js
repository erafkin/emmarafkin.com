import React, {Component} from 'react';
import open from '../assets/open.png';
import driven from '../assets/driven.png';
class Driven extends Component {
    render(){
        if(window.innerWidth < 760 ){
            return( 
            <div className = "block">
            <h1>Featured Projects</h1>
            <div className = "project">
                <h2 style = {{color: "#8eead1", textAlign: "left"}}>Bioentrepreneur Accelerator Hub</h2>
                <div className = "projectDesc">
                    <div className = "projectBlurb">
                    This accelerator hub is a NIH-funded collaboration between top
                    biomedical institutions across the United States that provides 
                    resources for biomedical entreprenuers. <br/>
                    <a href = "http://bioentrepreneurresources.com/" target = "_blank"  rel = "noopener noreferrer"><img src = {open} style = {{width:"25px"}} alt = "open icon"/></a>
                </div>
                <ul className = "projectList">
                    <li>React.js</li>
                    <li>Node/Express</li>
                    <li>mongoDB (NoSQL)</li>
                </ul>
                </div>
            </div>
        </div>);
        }else{ 
            return(
                <div className = "block">
                <h1>Featured Projects</h1>
                <div className = "project">
                    <h2 style = {{color: "#8eead1", textAlign: "left"}}>Bioentrepreneur Accelerator Hub</h2>
                    <img src = {driven} className = "projectPic" alt = "driven picture"/>
                    <div className = "projectDesc">
                    <div className = "projectBlurb">
                        This accelerator hub is a NIH-funded collaboration between top
                        biomedical institutions across the United States that provides 
                        resources for biomedical entreprenuers. <br/>
                        <a href = "http://bioentrepreneurresources.com/" target = "_blank"  rel = "noopener noreferrer"><img src = {open} style = {{width:"25px"}} alt = "open icon"/></a>
                    </div>
                    <ul className = "projectList">
                        <li>React.js</li>
                        <li>Node/Express</li>
                        <li>mongoDB (NoSQL)</li>
                    </ul>
                    </div>
                </div>
            </div>
           
        );}
       
    }
}export default Driven;