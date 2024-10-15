import Content from "./Content";
import {useEffect, useState} from 'react';

const Example = () =>{
    const [searchField, setSearchfield] = useState(''); //[value, setValue]
  const [category, setCategory] = useState([]);
  useEffect (() =>{
    const getItems =async () =>{
      try{
        const fetchItems = await fetch('/data.json');
        const response = await fetchItems.json();
        setCategory(response);
      }
     catch(error){
      console.error('failed', error);
    }
    /*fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=> response.json())
    .then((users)=> setMonsters(users));*/
  }
  getItems();
  }, [category])
    const filteredMonsters = category.filter((categories)=>{
      return categories.Category.toLocaleLowerCase().includes(searchField)
  }
  )
  

  const onSearch = (event)=>{
    const searchFieldString = event.target.value.toLocaleLowerCase();
      setSearchfield(searchFieldString);
   } 
    
  
    return(
      <div>
            <h1 className="text-danger p-3">MONSTERS ROLODEX</h1>
            <input type="search" label="search" placeholder="Search" className="search-Box w-100 rounded" onChange={onSearch}/>
            <Content Category={filteredMonsters}/>
            </div>
          )

}
export default Example;