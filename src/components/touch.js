import React, {Component} from 'react';
import github from '../assets/github.png';
import email from '../assets/email.png';
import linkedIn from '../assets/linkedin.png';


class Touch extends Component {

    render(){
        return(
    <div className = "block">
        <div className = "touch">
        <div> I am currently looking for internships for 
            summer 2020 and would love to chat!
        </div>
        <br/>
        <div>
            <a href = "https://github.com/erafkin/" target = "_blank" rel = "noopener noreferrer"><img src = {github}/> </a>
              <a href = "https://www.linkedin.com/in/emma-rafkin-2966406b/" target = "_blank" rel = "noopener noreferrer"><img src = {linkedIn}/> </a> 
                <a href = "mailto:emma.p.rafkin.21@dartmouth.edu"><img src = {email}/> </a>
        </div>

   
        </div>
       </div>
      );
};

}export default Touch;