import React, {Component} from 'react';
import github from '../assets/github.png';
import shop from '../assets/Rooted1.png';
import inventory from '../assets/Rooted2.png';

class Rooted extends Component {
    render(){
        return( 
            <div className = "block">
            <div className = "project">
            <h2 style = {{color: "#8eead1", textAlign: "left"}}>Rooted</h2>
            <img src = {shop} className = "projectPic" alt = "shop picture"/>
            <img src = {inventory} className = "projectPic" alt = "inventory picture"/>

            <div className = "projectDesc">
                    <div className = "projectBlurb">
                    A mobile app for to connect flower farmers to local florists to help create a more sustainable flower market and support local businesses. A big aspect of this project was allowing farmers to use the app offline in their fields to keep track of inventory.  <br/>
                    </div>
                <ul className = "projectList">
                    <li>React Native</li>
                    <li>Redux</li>
                    <li>NetInfo</li>
                    <li>AsyncStorage</li>

                </ul>
                </div>
            </div>
        </div>);
        
    }
}export default Rooted;