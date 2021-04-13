import React from 'react';
import './App.css';
import About from './components/about';
import Jobs from './components/jobs';
import PersonalProjects from './components/personal_projects';
import Header from './components/header';
import Landing from './components/landing';
import Qualifications from './components/qualifications';
import Touch from './components/touch';
import FeaturedProjects from './components/featuredProjects';




function App() {

  return (
    <div className="App">
      <Header/>
      <Landing/>
      <About/>
      <Qualifications/>
      <Jobs/>
      <FeaturedProjects/>
      <PersonalProjects/> 
      <Touch/>
      
    </div>
  );
}
export default App;
