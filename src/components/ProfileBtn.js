import {signOutUser} from "../utils/firebase/firbase.utils";
import {Link, useNavigate} from 'react-router-dom';
import {Dropdown} from 'react-bootstrap';
import { BsPersonFill} from 'react-icons/bs';
import ProfileThumb from "../funtctionalComp/ProfileThumb";
import useAuthHook from "../Hooks/AuthState";

const ProfileBtn = ({children, style}) =>{
  const {currentUser, setCurrentUser} = useAuthHook();
    const navigate = useNavigate();
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
    <Dropdown  style={style}>
      <Dropdown.Toggle variant="none" id="dropdown-basic" className="d-grid">
      {currentUser ? (
        <ProfileThumb/>
        ) : (
          <BsPersonFill size={30}/>
        )
        }
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
  )
};
export default ProfileBtn;