import '../Editors-sugg/editors-sugg.style.css';
import {BsStars } from "react-icons/bs";
//import Navbar from '../../hearders/Navbar.component';
import ItemSearch from '../../searchbox/ItemSearch';
import Card from '../../components/Card.component';
import useSearch from '../../Hooks/Searchhook';
import EditorsCardList from '../Editors-sugg/EdittorsCardList';
import { useEffect } from 'react';
import EditorsCard from '../Editors-sugg/EditorsCard';
import Sidebar from '../../hearders/Sidebar';
import useDeviceType from '../../Hooks/Devicewidthhook';
import Footer from '../../footer/Footer.component';
import Addpost from '../AddPost/Addpost';
import SidebarLeft from '../../hearders/SidebarLeft';
const Showroom = () =>{
    const {isMobile, isTablet, isDesktop} = useDeviceType();

//Show all products...
    
    /*const {onSearch, filteredMonsters, setMonsters} = useSearch('');
    
    useEffect (() =>{
      try{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response)=> response.json())
        .then((users)=> setMonsters(users));
      } catch (error) {
        console.error('You are Offline')
      }
      }, [])*/
    return(
        <>
        <div className="container-fluid">
      <div className="row flex-wrap">
          <Sidebar/>
          <main className="col ps-md-2 pt-2 w-75 d-flex flex-wrap justify-content-center">
        <BsStars className='title w-100 m-2 p-2' fill='red'/>
            <Card style={{margin:4}}/>
            {/*<EditorsCardList monsters = {filteredMonsters} />*/}
          </main>
          <SidebarLeft/>
          <Addpost/>
      </div>
  </div>
    <Footer/>
      </>
    )
}

export default Showroom;