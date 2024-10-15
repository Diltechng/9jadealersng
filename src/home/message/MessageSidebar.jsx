import {Link, useLocation} from 'react-router-dom'
import { BsShop, BsHouse, BsChat } from 'react-icons/bs';
import {MdGroupAdd, MdReport } from 'react-icons/md';
import { SidebarContext } from '../../context/SideBar.context';
import ProfileThumb from '../../funtctionalComp/ProfileThumb'
import { 
    FaUserFriends, 
    FaAdversal, 
    FaCrown, 
     FaNewspaper, 
    FaQuestion, 
    FaPhone
} from "react-icons/fa";
import {FcSalesPerformance, FcRules, FcAbout} from 'react-icons/fc';
import '../../hearders/headers.css';
import useDeviceType from '../../Hooks/Devicewidthhook';
import {useState, useContext} from 'react';
//import { UserContext } from '../context/User.context';
import useAuthHook from "../../Hooks/AuthState";



const MessageSidebar = () =>{
    const {isDesktop, isMobile, isTablet} = useDeviceType();
    //tried out the create context here
    const {currentUser} =useAuthHook();
    const sidemenu =[
        ...(currentUser ? 
            [{name: 'Naijadealers', icon: <ProfileThumb/>, index: 3, path:"/Messages"},
            {name: 'CarsHunters', icon:<ProfileThumb/>, index: 4, path:"/Report"},
            {name: 'Green Autos', icon: <ProfileThumb/>, index: 5, path:"/Ads"},
            {name: 'Ibrahim', icon: <ProfileThumb/>, index: 7, path:"/Friend"},
            {name: 'AbdulMumin', icon: <ProfileThumb/>, index: 8, path:"/Activity"},
            {name: 'Life', icon: <ProfileThumb/>, index: 9, path:"/AddGroup"},
            ] : [])
    
    ]
    const [active, setActive] = useState(false);

    const handleClick = (index) =>{
        setActive(index);
    }
    const location = useLocation();
    const { openSideBar } = useContext(SidebarContext);

    return(
        <div className="col-auto px-0 bg-light">
        {openSideBar && (
            <div id="sidebar" className="collapse collapse-horizontal aside show border-end h-100 bg-light" style={{transition: "0.1s ease"}}>
                <div id="sidebar-nav" className="sidebar-nav list-group border-0 rounded-0 text-sm-start sidebar-scrollable" >
                <div className='list-group list-group-flush w-100'>
                {sidemenu.map(({name, icon, index, path})=>{
                    return(
                        <Link key={index} 
                        className={`list-group-item ${location.pathname === path ? 'active' : ''} d-inline-block text-truncate text-left text-secondary`}
                        to={path} onClick={()=>handleClick(index)} 
                        data-bs-parent="#sidebar">{icon}<label className="p-2">{name}</label></Link>

                    )
                })}
                    </div>
                </div>
            </div>
        )
        }
        </div>
    )
}
export default MessageSidebar;