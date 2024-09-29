import {useState, useEffect} from "react";
import {onAuthStateChangedListener} from "../utils/firebase/firbase.utils";

const useAuthHook = () =>{
    const [currentUser, setCurrentUser] = useState();
    useEffect(() => {
        // Listen to the authentication state
        const unsubscribe = onAuthStateChangedListener((user) => {
          setCurrentUser(user); // Set the user state if signed in, otherwise set it to null
        });
    
        // Clean up the listener on unmount
        return () => unsubscribe();
      }, []);
      return(
        {currentUser, setCurrentUser}
      );
};
export default useAuthHook;