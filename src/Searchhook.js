import { useEffect, useState } from "react";

const useSearch = () =>{
    
   /* const [searchField, setSearchField] = useState('');
    const [items, setItems] = useState([]);
    useEffect (() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response)=> response.json())
        .then((users)=> setItems(users));
    
      }, [])
    const filteredItem = items.filter((item) =>{
        return item.name.toLocaleLowerCase().includes(searchField);
       
    });
    const onSearch = (event) =>{
        const searchFieldString = event.target.value.toLocaleLowerCase();
        setSearchField(searchFieldString);
        console.log(searchFieldString)
    };*/
    const [searchField, setSearchfield] = useState(''); //[value, setValue]
  const [monsters, setMonsters] = useState([]);
  
    const filteredMonsters = monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(searchField)
  }
  )
  

  const onSearch = (event)=>{
    const searchFieldString = event.target.value.toLocaleLowerCase();
      setSearchfield(searchFieldString);
   } 
    return (
        {filteredMonsters, onSearch, setMonsters}
    )
}
export default useSearch;