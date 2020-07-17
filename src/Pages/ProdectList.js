import React, { useContext } from 'react';


import { ProductContext, Product, Title } from './index';


export const ProdectList = () => {
  const data  = useContext(ProductContext);
  const data1 = {};
 



return (

      
 
          <div>
            <Title name="our" title="products" />
            
            <div className="productcontanor">
            
      {Object.entries(data.products).map(([slug, data1]) => (
         <Product product={data1}/>
      ))}
    
           </div>
          </div>
        
)


}       




