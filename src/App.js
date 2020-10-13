import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import MainPage from './MainPage'
import AboutPage from './AboutPage';
import ResearchPage from './ResearchPage';
import Blog from './Blog';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <Header/>
       <MainPage/>
      <AboutPage/>
      <ResearchPage/>
      <Blog/>
      <Contact/> 

    </div>
  );
}

export default App;
