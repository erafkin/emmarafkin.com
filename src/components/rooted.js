import React, {Component} from 'react';
import shop from '../assets/Rooted1.png';
import inventory from '../assets/Rooted2.png';

class Rooted extends Component {
    render(){
        if(window.innerWidth < 760 ){
            return( 
                <div className = "block">
                <div className = "project">
                <h2 style = {{color: "#8eead1", textAlign: "left"}}>Rooted</h2>    
                <div className = "projectDesc">
                        <div className = "projectBlurb">
                        A 2-sided mobile app for to connect flower farmers to local florists to help create a more sustainable flower market and support local businesses. A big aspect of this project was allowing farmers to use the app offline in their fields to keep track of inventory.  <br/>
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
        }else{ 
            return( 
                <div className = "block">
                <div className = "project">
                <h2 style = {{color: "#8eead1", textAlign: "left"}}>Rooted</h2>
                <img src = {shop} className = "rootedShop" alt = "shop"/>
                <img src = {inventory} className = "rootedInv" alt = "inventory"/>
    
                <div className = "projectDesc">
                        <div className = "projectBlurb">
                        A 2-sided mobile app for to connect flower farmers to local florists to help create a more sustainable flower market and support local businesses. A big aspect of this project was allowing farmers to use the app offline in their fields to keep track of inventory.  <br/>
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
        
        
    }
}export default Rooted;