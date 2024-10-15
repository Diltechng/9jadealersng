import { useEffect, useState } from "react";

const useSearch = () =>{
      const [searchField, setSearchfield] = useState('');
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
      }
      getItems();
      }, [category])
        const filteredItems = category.filter((categories)=>{
          return categories.Category.toLocaleLowerCase().includes(searchField)
      }
      )
      const onSearch = (event)=>{
        const searchFieldString = event.target.value.toLocaleLowerCase();
          setSearchfield(searchFieldString);
       } 
    return (
        {filteredItems, onSearch, setCategory}
    )
}
export default useSearch;