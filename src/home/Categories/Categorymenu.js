import { useEffect } from "react";
import Navbar from "../../hearders/Navbar.component";
import ItemSearch from "../../searchbox/ItemSearch";
import useSearch from "../../Hooks/Searchhook";
import CategoryCard from "./CategoryCard";
import { BsColumnsGap} from "react-icons/bs";
import Categories from "./Categories";

const Categorymenu = () =>{
    const {onSearch, filteredMonsters, setMonsters} = useSearch();

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((users) => setMonsters(users))
    }, []);
return(
    <>
    <Categories/>
    <h3 className='title w-100 text-dark p-2'>Other Categories <BsColumnsGap fill='red'/></h3>
        <div className='d-flex flex-wrap p-3'>
        <ItemSearch onSearchange={onSearch} placeHolder={'Search Category'}/>
        <CategoryCard monsters = {filteredMonsters} />
        <div className='d-flex justify-content-center w-100'>
        <div>1 2 3 4 5 6 7 8 9 10 ...  <div className='btn btn-success rounded '>Next</div></div>
        </div>
        
  </div>

  </>
)
}
export default Categorymenu;