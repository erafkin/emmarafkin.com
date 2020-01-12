import React, {Component} from 'react';
import doc from '../assets/document.png';
import github from '../assets/github.png';
import email from '../assets/email.png';
import linkedIn from '../assets/linkedin.png';

class Header extends Component{

    render(){
        return(
            <div className = "links">
                <a href = "http://tiny.cc/4m7liz" target = "_blank" rel = "noopener noreferrer"><img src = {doc}/> </a>
                <a href = "https://github.com/erafkin/" target = "_blank" rel = "noopener noreferrer"><img src = {github}/> </a>
                <a href = "https://www.linkedin.com/in/emma-rafkin-2966406b/" target = "_blank" rel = "noopener noreferrer"><img src = {linkedIn}/> </a> 
                <a href = "mailto:emma.p.rafkin.21@dartmouth.edu"><img src = {email}/> </a>
           </div>

        );
    }

}export default Header;

