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
import {useContext, Fragment} from 'react';
import { CategoriesContext } from '../../context/Categories.context';
const Showroom = () =>{
    const {isMobile, isTablet, isDesktop} = useDeviceType();
      const {categoriesMap} = useContext(CategoriesContext);

    return(
        <>
        <div className="container-fluid">
      <div className="row flex-wrap">
          <Sidebar/>
          <main className="col ps-md-2 pt-2 w-75 d-flex flex-wrap justify-content-center">
        <BsStars className='title w-100 m-2 p-2' fill='red'/>
        {categoriesMap.map((categories)=>{
              const {items} = categories;
              return(
                <Card category={categories} item={items}/>
              )
            })}
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