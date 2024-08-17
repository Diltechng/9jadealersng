import './editors-sugg.style.css';
import {BsStars } from "react-icons/bs";
//import Navbar from '../../hearders/Navbar.component';
import ItemSearch from '../../searchbox/ItemSearch';
import useSearch from '../../Searchhook';
import EditorsCardList from './EdittorsCardList';
import { useEffect } from 'react';
import EditorsCard from './EditorsCard';

const EditorsSugg = () =>{
    
    const {onSearch, filteredMonsters, setMonsters} = useSearch('');
    
    useEffect (() =>{
      try{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response)=> response.json())
        .then((users)=> setMonsters(users));
      } catch (error) {
        console.error('You are Offline')
      }
      }, [])
    return(
        <>
        <EditorsCard/>
        <h3 className='title w-100 text-dark p-2'>Editors Favourite <BsStars fill='red'/></h3>
            <div className='d-flex flex-wrap p-3'>
            <ItemSearch onSearchange={onSearch} placeHolder={'Search Editors Recommended'}/>
            <EditorsCardList monsters = {filteredMonsters} />
            <div className='d-flex justify-content-center w-100'>
            <div>1 2 3 4 5 6 7 8 9 10 ...  <div className='btn btn-success rounded '>Next</div></div>
            </div>
            
      </div>

      </>
    )
}


export default EditorsSugg;