import React from 'react';
import './App.css';
import About from './components/about';
import Jobs from './components/jobs';
import Personal_Projects from './components/personal_projects';
import Header from './components/header';
import Landing from './components/landing';
import Qualifications from './components/qualifications';
import Driven from './components/driven';

function App() {

  return (
    <div className="App">
      <Header/>
      <Landing/>
      <About/>
      <Qualifications/>
      <Jobs/>
      <Driven/>
      <Personal_Projects/>
      
    </div>
  );
}
export default App;
