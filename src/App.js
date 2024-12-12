import React from 'react';
import {Route,Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Service from './Components/Service';
import Contact from './Components/Contact';


const App = ()=>{
  
  return(
    <>
      <Navbar/>
      <Routes>
        <Route exact path='/' Component={Home}/>
        <Route exact path='/about' Component={About}/>
        <Route exact path='/service' Component={Service}/>
        <Route exact path='/contact' Component={Contact}/>
       
      </Routes>
    </>
  );
}

export default App;