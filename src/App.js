import React from 'react';
import './App.css';
import About from './components/about';
import Jobs from './components/jobs';
import Personal_Projects from './components/personal_projects';

function App() {

  return (
    <div className="App">
      <div className = "landing-page">
          <div className = "title">
             <h1 className = "name">Emma Rafkin</h1>
          </div>
            
      </div>

      <About location = {footer(1)}/>
      <Jobs location = {footer(2)}/>
      <Personal_Projects location = {footer(3)}/>
      {/* <div className = "location-tag">{this.props.location}</div> */}
  
    </div>
  );
}
function footer(i){
  if(i === 1){
    return "Franconia Ridge, NH";
  }else if(i ===2){
    return "Mount Moosilauke, NH";
  }else if(i ===3){
    return "Talkeetna Mountain Range, AK";
  }
}

export default App;
