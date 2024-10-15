//import PRODUCTS from '../data.json';
import {createContext, useState, useEffect} from 'react';
export const CategoriesContext = createContext({
    categoriesMap: [],
});

export const CategoriesProvider = ({children}) =>{
    const [categoriesMap, setCategoriesMap] = useState([]);
    /*const value = {categoriesMap};
   /* if(!products){
        return(
            <div>No Products For now check back Later</div>
        )
    }*/
    useEffect(() =>{
        const getProducts = async () => {
            try{
                const categories = await fetch('/data.json');
                const catResult = await categories.json();
                if (!categories.ok) {
                    throw new Error(`HTTP error! status: ${categories.status}`);
                }
                console.log(categories);
                setCategoriesMap(catResult);
            } catch(error){
                console.error('failed', error)
            }
        }
        getProducts();
    },[])
        const value = {categoriesMap};

    return(
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    );
};