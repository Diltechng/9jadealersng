import {Link, useLocation} from 'react-router-dom'
import { BsShop, BsHouse, BsChat } from 'react-icons/bs';
import {MdGroupAdd, MdReport } from 'react-icons/md';
import { 
    FaUserFriends, 
    FaAdversal, 
    FaCrown, 
     FaNewspaper, 
    FaQuestion, 
    FaPhone
} from "react-icons/fa";
import {FcSalesPerformance, FcRules, FcAbout} from 'react-icons/fc';
import './headers.css';
import useDeviceType from '../Hooks/Devicewidthhook';
import {useState, useContext} from 'react';
//import { UserContext } from '../context/User.context';
import useAuthHook from "../Hooks/AuthState";



const Sidebar = () =>{
    const {isDesktop, isMobile, isTablet} = useDeviceType();
    //tried out the create context here
    const {currentUser} =useAuthHook();
    const sidemenu =[
        ...(isDesktop || isTablet ?
            [
        {name: 'Home', icon: <BsHouse size={25}/>, index: 1, path:"/"},
        {name: 'Showroom', icon: <BsShop size={25}/>, index: 2, path:"/Showroom"},
        ...(currentUser ? 
            [{name: 'Message', icon: <BsChat size={25} fill={'red'}/>, index: 3, path:"/Messages"}] : [])
            ] : []
        ),
        ...(currentUser ? [
            {name: 'Report A Stolen Vehicle', icon: <MdReport size={25} fill={'#ff2507'}/>, index: 4, path:"/Report"},
            {name: 'Place Ads', icon: <FaAdversal size={25} fill={'#ff2507'}/>, index: 5, path:"/Ads"},
            {name: 'Friends', icon: <FaUserFriends size={25}/>, index: 7, path:"/Friend"},
            {name: 'Sales Activity', icon: <FcSalesPerformance size={25}/>, index: 8, path:"/Activity"},
            {name: 'Create Group', icon: <MdGroupAdd size={25}/>, index: 9, path:"/AddGroup"},
        ] : []),
        {name: 'Plans', icon: <FaCrown size={25} fill={'#fd7e14'}/>, index: 6, path:"/Plans"},
        {name: 'About', icon: <FcAbout size={25} fill={'blue'}/>, index: 10, path:"/About"},
        {name: 'Terms & Condition', icon: <FaNewspaper size={25}/>, index: 11, path:"/TC"},
        {name: 'FAQs', icon: <FaQuestion size={25}/>, index: 12, path:"/FAQs"},
        {name: 'Contact us', icon: <FaPhone size={25}/>, index: 13, path:"/ContactUs"},
        {name: 'Market Rule', icon: <FcRules size={25}/>, index: 14, path:"/Rules"}
    
    ]
    const [active, setActive] = useState(false);
    const handleClick = (index) =>{
        setActive(index);
    }
    const location = useLocation();
    return(
        <div className="col-auto px-0 bg-light">
            <div id="sidebar" className=" collapse collapse-horizontal aside show border-end h-100 bg-light" style={{transition: "0.1s ease"}}>
                <div id="sidebar-nav" className="sidebar-nav list-group border-0 rounded-0 text-sm-start sidebar-scrollable">
                <div className='list-group w-100'>
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
        </div>
    )
}
export default Sidebar;