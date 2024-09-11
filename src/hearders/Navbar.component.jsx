import {BsCartDash, BsFillBellFill, BsPersonFill, BsGrid1X2 } from 'react-icons/bs';
import {auth, onAuthStateChangedListener, signOutUser} from "../utils/firebase/firbase.utils";
import {useState, useEffect} from "react";
import navicon from './images/navicon.svg';
import {Outlet, Link, useNavigate} from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import './headers.css';
const Navbar = ()=>{
  const [currentUser, setCurrentUser] = useState(null); // Track the user state
  const navigate = useNavigate();
  useEffect(() => {
    // Listen to the authentication state
    const unsubscribe = onAuthStateChangedListener((user) => {
      setCurrentUser(user); // Set the user state if signed in, otherwise set it to null
    });

    // Clean up the listener on unmount
    return () => unsubscribe();
  }, []);
  const handleSignOut = async () => {
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
  };
    return(
      <>
        <header className="App-header bg-light shadow-lg p-3 w-100 d-flex justify-content-between align-items-center" style={{maxHeight: 90}}>
        <button type="button" data-bs-target="#sidebar" data-bs-toggle="collapse" className="border rounded-3 p-1 text-decoration-none"> <BsGrid1X2 /></button>

         <Link
          className="App-link"
          to="/"
        >
        <span className="h-100 w-100 d-flex">
                <img src={navicon} className="App-logo" alt="logo" role="presentation"/>
        </span>
        </Link>
        
        <ul className='nav-links d-flex w-75 p-2 justify-content-around' style={{fontWeight: 900, fontSize: 15, color:'rgb(33 37 41 / 48%)', }}>
        <Link className="text-secondary" to='/'><li className='active btn  d-flex   p-2  justify-content-center'>Home</li></Link>
        <Link className="text-secondary" to='/'> <li className='nav-link btn d-flex   p-2  justify-content-center'>About</li></Link>
        <Link className="text-secondary" to='/'> <li className='nav-link btn d-flex   p-2  justify-content-center'>FAQ</li></Link>
        <Link className="text-secondary" to='/Single'> <li className='nav-link btn d-flex   p-2  justify-content-center'>Single</li></Link>
        </ul>
        <button className='btn bg-secondary text-light' style={{width:'15%'}}>Upload</button>
        <div className='d-flex gap-5 p-3'>
        <BsCartDash fill='dark'/>
        <BsFillBellFill fill='red'/>
        </div>
        <div className='h-100 p-3 d-flex justify-content-end align-items-center'>
       <Dropdown>
      <Dropdown.Toggle variant="none" id="dropdown-basic" className="profile-btn rounded-circle">
      <span className='circle-icon d-flex bg-secondary shadow-lg'><BsPersonFill size={45} fill='#fff'/></span>
      </Dropdown.Toggle>

      <Dropdown.Menu className="m-3">
        {currentUser ? (
          <>
          <Dropdown.Item href="#/action-3">Profile</Dropdown.Item>
          <Dropdown.Item onClick={handleSignOut}>Signout</Dropdown.Item>
          </>
        ) : (  
          <>
          <Dropdown.Item as={Link} to="/SignIn">Sign-in with Firbase</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Sign-in with Nodejs</Dropdown.Item>
          </>
          )}
      </Dropdown.Menu>
    </Dropdown>
        
          </div>
      </header>
      <Outlet/>
      </>
    )
}
export default Navbar;