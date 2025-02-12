import { createContext, useContext, useState } from "react";


const ProductContext = createContext();

export const ProductProvider = (props) => {
    const [cartproducts , SetCartProducts] = useState([]);
    const [productName , SetProductName] = useState();
    const [productPrice , SetProductPrice] = useState();
  return(
    <ProductContext.Provider value={{
        cartproducts,SetCartProducts,productName,productPrice,SetProductName,SetProductPrice
    }} >
      {props.children}
    </ProductContext.Provider>
  )
}

export const useCartData = () =>{
    return (
        useContext(ProductContext)
    )
}
