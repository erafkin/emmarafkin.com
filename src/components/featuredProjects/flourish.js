import React, {useState, useEffect, useRef}  from 'react';
import treatments from '../../assets/tracking.png';
import graphs from '../../assets/graphs.png';

const Flourish = (props) => {
    const [isVisible, setVisible] = useState(true);
    const domRef = useRef();
    useEffect(() => {
        const domRefCurrent = domRef.current

        const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setVisible(entry.isIntersecting));
        });
        observer.observe(domRefCurrent);
        return () => observer.unobserve(domRefCurrent);
    }, []);

    if(window.innerWidth < 760 ){
        return( 
            <div 
            className={`block fade-in-section ${isVisible ? 'is-visible' : ''}`}
            ref={domRef}
            >
            <div className = "project">
            <h2 style = {{color: "#8eead1", textAlign: "left"}}>Flourish</h2>    
            <div className = "projectDesc">
                    <div className = "projectBlurb">
                    This DALI project is a mobile app that helps patients with chronic illness track and analyze their symptoms, triggers, treatments, and underlying health factors. This app was built from scratch and aims to help users with diagnosed and undiagnosed chronic illnesses understand the best way to manage and treat their symptoms. I was both the lead developer and mentor on this project. <br/>
                    </div>
                <ul className = "projectList">
                    <li>React Native</li>
                    <li>Redux</li>
                    <li>Node/Express</li>
                    <li>MongoDB</li>

                </ul>
                </div>
            </div>
        </div>);
    }else{ 
        return( 
            <div 
            className={`block fade-in-section ${isVisible ? 'is-visible' : ''}`}
            ref={domRef}
            >
            <div className = "project">
            <h2 style = {{color: "#8eead1", textAlign: "left"}}>Flourish</h2>
            <img src = {treatments} className = "rootedShop" alt = "tracking"/>
            <img src = {graphs} className = "rootedInv" alt = "graphs"/>

            <div className = "projectDesc">
                    <div className = "projectBlurb">
                    This DALI project is a mobile app that helps patients with chronic illness track and analyze their symptoms, triggers, treatments, and underlying health factors. This app was built from scratch and aims to help users with diagnosed and undiagnosed chronic illnesses understand the best way to manage and treat their symptoms. I was both the lead developer and mentor on this project. <br/>
                    </div>
                <ul className = "projectList">
                    <li>React Native</li>
                    <li>Redux</li>
                    <li>Node/Express</li>
                    <li>MongoDB (noSQL)</li>

                </ul>
                </div>
            </div>
        </div>);
    }
        
        
    
}
export default Flourish;