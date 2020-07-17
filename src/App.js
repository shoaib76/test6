import React from 'react';
import { Home , About, ProdectList, Cart, NavBar, Default, ProductProvider, Details } from './Pages/index';
import "bootstrap/dist/css/bootstrap.min.css";

import './App.css';


import { Routes, Route } from 'react-router-dom';





function App() {
  
  
  return (

       
    
    <ProductProvider>
     <NavBar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/About' element={<About/>} />
      <Route path='/ProdectList' element={<ProdectList/>} />
      <Route path='/Cart' element={<Cart/>} />
      <Route path='/details' element={<Details/>} />
      <Route path="*"element={ <Default/>} />
     </Routes>
    </ProductProvider> 
    
    
  );
}

export default App;
