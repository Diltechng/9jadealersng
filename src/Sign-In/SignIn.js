import { signInWithGooglePopup, createUserDocumentFromAuth } from '../utils/firebase/firbase.utils';
const SignIn = () =>{
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
       const userDocRef = createUserDocumentFromAuth(user)
    }
    return(
        <>
            <button onClick= {logGoogleUser}>SignIn with Google</button>
        </>
    )
}
export default SignIn;