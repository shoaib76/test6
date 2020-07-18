import React, { createContext, useState } from "react";
import { Shoes, detailProduct } from '../Pages/index';

export const ProductContext = createContext();


export const ProductProvider = ({ children }) => {
  

  const setProducts = () => {
    let products = [];
    Shoes.forEach(item => {
      const singleItem = { ...item };
      products = [...products, singleItem];
    });
    setState({appState, products })
     
  }

    const getItem = id => {
    const product = appState.products.find(item => item.id === id);
    return product;
  }

  const handleDetail = id => {
    let prod = getItem(id)  
   setState({appState,detailProduct:prod});
    
   }

  const addToCart = id => {
    let tempProducts = [...appState.products];
    const index = tempProducts.indexOf(getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;

    setState({appState,products: [...tempProducts],
        cart: [...appState.cart, product],
        detailProduct: { ...product }
      },addTotals)
    
  }
 const openModal = id => {
    const product = getItem(id);
    setState({appState, modalProduct: product, modalOpen: true })
    
  }

  const closeModal = () => {
    setState({appState, modalOpen: false }
    )
  }

  const increment = id => {
    let tempCart = [...appState.cart];
    const selectedProduct = tempCart.find(item => {
      return item.id === id;
    });
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count + 1;
    product.total = product.count * product.price;
    setState({appState,cart: [...tempCart]},
    addTotals);
  }
  const decrement = id => {
    let tempCart = [...appState.cart];
    const selectedProduct = tempCart.find(item => {
      return item.id === id;
    });
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count - 1;
    if (product.count === 0) {
      this.removeItem(id);
    } else {
      product.total = product.count * product.price;
      setState({appState, cart: [...tempCart] },
      addTotals);
    }
  };

  const getTotals = () => {
    // const subTotal = this.state.cart
    //   .map(item => item.total)
    //   .reduce((acc, curr) => {
    //     acc = acc + curr;
    //     return acc;
    //   }, 0);
    let subTotal = 0;
    appState.cart.map(item => (subTotal += item.total));
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    return {
      subTotal,
      tax,
      total
    }
  }


  const addTotals = () => {
    const totals = getTotals();
    setState({appState, cartSubTotal: totals.subTotal,
      cartTax: totals.tax,cartTotal: totals.total
        },
      
      () => {
        // console.log(this.state);
      }
    )
  }

  const removeItem = id => {
    let tempProducts = [...appState.products];
    let tempCart = [...appState.cart];

    const index = tempProducts.indexOf(getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    tempCart = tempCart.filter(item => {
      return item.id !== id;
    });

    setState({appState,cart: [...tempCart],products: [...tempProducts]},
              addTotals);
  }


  const clearCart = () => {
    setState({appState, cart: [] },
      
      () => {
        setProducts();
        addTotals();
      }
    )
  }

   //handleDetail(0);
  
  const initstore = {
      
    addToCart: addToCart,
    openModal: openModal,

    products: Shoes,
    detailProduct:detailProduct,
    handleDetail:handleDetail,
    cart:[],
    modalOpen: false,
    modalProduct:detailProduct,
    removeItem: removeItem,
    clearCart: clearCart,
    closeModal: closeModal,
    increment: increment,
    decrement: decrement,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
   
}
  
       
const [ appState, setState ] = useState(initstore);
     //  appState.handleDetail(0);
      // console.log(appState.detailProduct)
        
       // console.log(appState.detailProduct);

        
        
      
    return(

        <ProductContext.Provider value={appState}>
            { children }
        </ProductContext.Provider>

      
    )
}