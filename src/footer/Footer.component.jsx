import './footer.css';
import D from './D.png';
import Addpost from '../home/AddPost/Addpost';
import { BsShop, BsHouse,BsBell, BsChat, BsPerson, BsBookmarks, BsDoorOpen} from 'react-icons/bs';
import {FaUserFriends} from 'react-icons/fa';
import ProfileBtn from '../components/ProfileBtn';
import {Link, useLocation} from 'react-router-dom';
import {useState} from 'react';
import useDeviceType from '../Hooks/Devicewidthhook';
import useAuthHook from "../Hooks/AuthState";

const Footer = () =>{
  const {isMobile} = useDeviceType();
  const {currentUser} = useAuthHook()

    const menu =[
      {name: 'Home', icon:<BsHouse size={25} />, path:'/', index: 1},
      {name: 'Friends', icon:<FaUserFriends size={25} />, path:'/Friends', index: 2},
      {name: 'Notifications', icon:<BsBell size={25} />, path:'/Notification', index: 3},
      {name: 'Showroom', icon:<BsShop size={25}/>, path:'/Showroom', index: 4},
      {name: 'Message', icon:<BsChat size={25} />, path:'/Message', index: 5},
      {name: 'Bookings', icon:<BsBookmarks size={25} />, path:'/Bookmark', index: 6},
      {...currentUser ? (
        {name: 'Profile', icon:<BsPerson size={25} />, path:'/Profile', index: 7}
      ):(
        {name: 'Signin', icon:<BsDoorOpen size={25} />, path:'/Signin', index: 7}
      )}
      
    ]
    const [active, setActive] = useState();
    const handleClick = (index) =>{
      setActive(index);
    }
    const location = useLocation();
    return(
        <>  
        {isMobile &&
        <>
        <Addpost/>
    <footer className="footer w-100 text-secondary position-sticky bottom-0 bg-light p-2"> 
      <div className="container d-flex justify-content-between position-relative">
      {menu.map(({name, icon, path, index})=>{
        return(
          <Link key={index} to={path} className={`footer-icon ${location.pathname === path ? 'active' : '' } text-secondary`} onClick={()=>{handleClick(index)}}>
          {icon}
          <label className="footer-label text-secondary w-100">{name}</label>
        </Link>
        )
      })}
      </div>
    </footer>
    </>
        }
        </>
    )
}
export default Footer;