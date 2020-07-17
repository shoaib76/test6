import React, { useContext, useState } from 'react';

import styled from 'styled-components';
import { ProductContext, Product, Title } from './index';


export const ProdectList = () => {
  const data  = useContext(ProductContext);
  const data1 = {};
 



return (

      
 
          <div>
            <Title name="our" title="products" />
            
            <div className="productcontanor">
            
      {Object.entries(data.products).map(([slug, data1]) => (
         <Product product={data1} className="productcontanor"/>
      ))}
    
           </div>
          </div>
        
)


}       




/*<li key={slug}>
<Link to={`/launch/${slug}`}>
  <h3>{name}</h3>
  <img src={img} alt={name} height={300}/>
</Link>
</li>*/