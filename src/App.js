import './App.css';
import Home from './home/Home.';
import SignIn from './components/Auth/SignIn';
import {Routes, Route, Router, useLocation} from 'react-router-dom';
import Single from './home/Single';
import {useState, useEffect} from 'react'
import TopBarProgress from "react-topbar-progress-indicator";
import Test from './Test';
import Showroom from './home/Showroom/Showroom';
import Navbar from './hearders/Navbar.component';
import Footer from './footer/Footer.component';
import ContactUs from './ContactUs.component';
import Sidebar from './hearders/Sidebar';
import Bookmark from './components/Bookmarks/Bookmark.component';
import Categories from './home/Categories/Categories';
import Message from './home/message/Message';
import Friends from './home/friends/Friends';
import Groups from './home/groupsComp/Groups.component';
import { Profile } from './home/Profile/Profile';

const App = () => {
  //progress bar
  const [progress, setProgress] = useState(false);
  const location = useLocation();
  
  useEffect(() =>{
    setProgress(true);

    const timeOut = setTimeout(() =>{
      setProgress(false);
    }, 3000)
    return () => clearTimeout(timeOut)
  }, [location])
  return (
    <div className="App">
          {progress && <TopBarProgress/>}
    <Routes>
      <Route path='/' element={<Navbar/>}>
        <Route index element={<Home/>}/>
        <Route path='ContactUs' element={<ContactUs/>}/>
        <Route path='Showroom' element={<Showroom/>}/>
        <Route path='Categories/*' element={<Categories/>}/>
        <Route path='Message' element={<Message/>}/>
        <Route path='Friends' element={<Friends/>}/>
        <Route path='AddGroup' element={<Groups/>}/>
        <Route path='Bookmark' element={<Bookmark/>}/>
        <Route path='SignIn' element={<SignIn/>}/>
        <Route path='Profile' element={<Profile/>}/>
      </Route>
    </Routes>
    </div>
  );
}

export default App;
