import React from 'react';
import { Home , About, ProdectList, Cart, NavBar, Default } from './Pages/index';
import "bootstrap/dist/css/bootstrap.min.css";

import './App.css';


import {
  BrowserRouter as Router,
  Routes,
  Route
  
}
 
 from 'react-router-dom';





function App() {
  
  
  return (

       
    
    <Router>
     <NavBar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/About' element={<About/>} />
      <Route path='/ProdectList' element={<ProdectList/>} />
      <Route path='/Cart' element={<Cart/>} />
      <Route path='*' element={ <Default/> } />
     </Routes>
    </Router> 
    
  );
}

export default App;
