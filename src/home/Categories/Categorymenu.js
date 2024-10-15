import { useEffect } from "react";
import Navbar from "../../hearders/Navbar.component";
import ItemSearch from "../../searchbox/ItemSearch";
import useSearch from "../../Hooks/Searchhook";
import CategoryCard from "./CategoryItems";
import { BsColumnsGap} from "react-icons/bs";
import {Route, Routes} from 'react-router-dom';
import Categories from "./Categories";
import Itemlist from "../../searchbox/Itemlist";
import { CategoriesContext } from '../../context/Categories.context';
import { useContext, Fragment } from 'react';
import { Link } from 'react-router-dom';


const Categorymenu = () =>{
    const {filteredItems} = useSearch();
    const { categoriesMap } = useContext(CategoriesContext);


return(
    <>
    <h3 className='w-100 text-dark p-2'>Categories <BsColumnsGap fill='red'/></h3>
            {categoriesMap.map(({Category, id, image, path})=>{
                return(
                    <Link to={path} className="col-lg-4 col-sm-6 col-md-5 shadow-lg h-25 m-2 rounded position-relative" key ={id}>
                    <h3 className="position-absolute top-50 bottom-50 text-light h-25 d-flex align-items-center justify-content-center" style={{left:50, right: 50, backgroundColor: 'rgb(4 4 4 / 63%)'}}>{Category}</h3>
                    <img className="w-100 h-100 rounded" src={image} alt={Category}/>
                    </Link>
                )
            })}
           </>

)
}
export default Categorymenu;