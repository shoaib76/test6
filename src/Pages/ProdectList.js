import React from 'react';
import styled from "styled-components";



import {  Product, Title } from './index';
import { Shoes } from '../Componets/Data';


export const ProdectList = () => {
  //const data  = useContext(ProductContext); 
  
  let state = {
    products: Shoes,
  }




return (

         
        <ProductWrapper className="py-5">
            <div className="container">
            <Title name="our" title="products" />
            
            <div className="row">
          
             {Object.entries(state.products).map(([slug, data1]) => (
             <Product product={data1}/>
             
             
      ))}
      
           </div>
          </div>
          </ProductWrapper>
        
)


}       

const ProductWrapper = styled.section``;


