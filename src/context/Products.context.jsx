import PRODUCTS from '../data.json';
import {createContext, useState} from 'react';
export const ProductsContext = createContext({
    products: [],
});

export const ProductsProvider = ({children}) =>{
    const [products, setProducts] = useState(PRODUCTS);
    const value = {products};
    if(!products){
        return(
            <div>No Products For now check back Later</div>
        )
    }
    return(
        <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
    );
};