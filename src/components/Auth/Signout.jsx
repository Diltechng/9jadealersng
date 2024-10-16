import {signOutUser} from "../../utils/firebase/firbase.utils";
import useAuthHook from "../../Hooks/AuthState";
import {useNavigate} from 'react-router-dom';

export const useSignout = () =>{
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
            {handleSignOut, currentUser}
    )
}