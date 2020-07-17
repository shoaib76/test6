import React, { createContext, useState } from "react";
import { Shoes } from '../Pages/index';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {

   
      const initstore = {
      
        products: Shoes,
        //detailProduct: detailProduct,
        cart: ["shoaib","muneer","asif"],
        modalOpen: false,
      //  modalProduct: detailProduct,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0,
       // addNew:addNew,
       // removePd:removePd
    }
      const [ appState, setState ] = useState(initstore);
    return(

        <ProductContext.Provider value={appState}>
            { children }
        </ProductContext.Provider>

      
    )
}