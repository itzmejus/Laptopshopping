import './App.css';
import React from 'react';
import Navbar from './Layouts/Navbar';
import {BrowserRouter,Route,Link, Switch} from 'react-router-dom'
import Homepage from './Pages/Homepage';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Copyright from './Pages/Copyright';
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
   
    <div className="App">
     <Route path='/' exact component={Homepage}/>
     <Route path='/about' exact component={About}/>
     <Route path='/contact' exact component={Contact}/>
     <Route path='/footer' exact component={Copyright}/>
    
    </div>
    
    </BrowserRouter>
  );
}

export default App;
