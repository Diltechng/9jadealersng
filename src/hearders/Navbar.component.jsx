import {BsBookmarks, BsBell, BsGrid1X2, BsXLg, BsSearch} from 'react-icons/bs';
import {useState, useEffect, useContext} from "react";
import { SidebarContext } from '../context/SideBar.context';
import navicon from './images/navicon.svg';
import Search from '../searchbox/Search';
import {Outlet, Link} from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
//import LoadingBar from 'react-top-loading-bar';
import './headers.css';
import Addpost from '../home/AddPost/Addpost';
import useDeviceType from '../Hooks/Devicewidthhook';
import ProfileBtn from '../components/ProfileBtn';
import ItemSearch from '../searchbox/ItemSearch';
import BookmarkItem from '../components/Bookmarks/BookmarkItem.component';
import BookmarkDropdown from '../components/Bookmarks/BookmarkDropdown.component';
const Navbar = ()=>{
  /*const [currentUser, setCurrentUser] = useState(null); // Track the user state
  useEffect(() => {
    // Listen to the authentication state
    const unsubscribe = onAuthStateChangedListener((user) => {
      setCurrentUser(user); // Set the user state if signed in, otherwise set it to null
    });

    // Clean up the listener on unmount
    return () => unsubscribe();
  }, []);
  /*const handleSignOut = async () => {
    try {
      await signOutUser();
      setCurrentUser(null); // Reset the user state after sign-out
      //set time
      setTimeout(()=>{
        if (signOutUser){
          navigate('/'); 
        }
      }, 3000)
    } catch (error) {
      console.error("Error signing out", error);
    }
  };*/
  const {isTablet, isDesktop, isMobile} = useDeviceType('');
  //navbar effect
  const [onScroll, setOnScroll] = useState(false);
  useEffect(()=>{
    const handleScroll = ()=>{
      const scrollTop = window.scrollY;
      if (isMobile && scrollTop < 50){
        setOnScroll(true);
      } else {
        setOnScroll(false)
      }
    };
    window.addEventListener('scroll', handleScroll);

    return ()=>{
      window.removeEventListener('scroll', handleScroll);
    };
  });
  const { openSideBar, toggleSidebar } = useContext(SidebarContext);

  
    return(
      <> 
        <header className= "App-header w-100 position-sticky top-0">
        <nav className={`bg-light shadow-lg p-3 w-100 d-flex justify-content-between align-items-center ${onScroll ? 'onScroll': ''}`} style={{maxHeight:60}}>
        <div  className="d-flex justify-content-start align-items-center">
        <button 
        type="button" 
        data-bs-target="#sidebar" 
        data-bs-toggle="collapse" 
        className="border rounded-3 p-1 text-decoration-none"
         aria-expanded="false"
        aria-controls="sidebar"
        onClick={toggleSidebar}
        > 
        {openSideBar ? <BsXLg size={25}/> : <BsGrid1X2 size={25}/>}
        </button>
        <Link
          className="App-link"
          to="/"
        >
        <span className="h-100 w-100 d-flex justify-content-center">
                <img src={navicon} className="App-logo" alt="logo" role="presentation"/>
        </span>
        </Link>
        </div>
        <div className="d-flex justify-content-end align-items-center">
        <span className="d-flex align-items-center p-2 h-100">
        {(!isDesktop) &&
        <ItemSearch/> 
        }     
        </span>
        {(isDesktop || isTablet) &&
        <>

        <div className='w-100 d-flex justify-content-end align-content-center gap-3 p-3'>
        <BookmarkDropdown/>
        <Dropdown>
        <Dropdown.Toggle variant="none" id="dropdown-basic" className="m-1">
        <BsBell fill='dark' size={25}/>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-3">Hello The car is available <img src="#"/></Dropdown.Item>
          <hr></hr>
          <Dropdown.Item href="#/action-3">Hello the bike is available <img src="#"/></Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
        <ProfileBtn/>
        </div>
          </>}
          </div>
      </nav>
      </header>
      <Outlet/>
      </>
    )
}
export default Navbar;