import { signInWithGooglePopup, createUserDocumentFromAuth, /*signInWithGoogleRedirect,*/ auth, signInUserWithEmailAndPassword} from '../../utils/firebase/firbase.utils';
import {BsGoogle, BsX, BsFacebook} from 'react-icons/bs';
import {useState, useContext} from "react";
import {FaSpinner} from 'react-icons/fa';
import { IoLogIn } from "react-icons/io5";
import Sidebar from '../../hearders/Sidebar';
import SignUp from '../SignInComponent/SignUp';
import {useNavigate} from 'react-router-dom';
import {UserContext} from '../../context/User.context';

const defaultValues = {
  email: '',
  password: '',
}
const SignIn = () =>{
const [formFields, setFormFields] = useState(defaultValues);
    const { email, password} = formFields;
    const [error, setError] = useState();
    const [success, setSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isSigningIn, setIsSigningIn] = useState(false);
    const navigate = useNavigate();
    const {setCurrentUser} = useContext(UserContext); 
    //reset fields
    const resetFormFields = () => {
      setFormFields(defaultValues);
    };
    //submit
    const handleSubmit = async(event) =>{
      event.preventDefault();
      setError('');
      setSuccess('');
      setIsSigningIn(true);
      setIsLoading(true);
      
      try{
       const user = await signInUserWithEmailAndPassword(email, password);
       setCurrentUser(user);
       if (!email || !password) {
        return setError('❌ Both email and password fields are required');
      }
      setTimeout(()=>{
        if (user){
          navigate('/')
        }
      }, 3000)
      
       setSuccess(true);
       console.log(user);
       resetFormFields();
      } catch(error){
        console.error(error.message);
        if(error.code === "auth/invalid-credential"){
          return setError("❌Invalid Email or Passowrd")
        }
        if(error.message === "Cannot destructure property 'user' of '(intermediate value)' as it is undefined."){
          return setError("🤐!Fields Cannot Be Empty")
         }
      }finally{
        setIsLoading(false);
        setIsLoading(false);
      }
  }
        const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
       const userDocRef = createUserDocumentFromAuth(user)
       return userDocRef; 
    }
    const handlechange =(event) =>{
      const {name, value} = event.target;
      setFormFields({...formFields, [name]: value})
  }
    return(
        /*<div classNameName="container-fluid">
            <div classNameName="row flex-nowrap">
                <div classNameName="col-6">
            <button onClick= {logGoogleUser}>SignIn with Google</button>
            </div>
            
            
            </div>
        </div>*/
        <div className="container-fluid">
      <div className="row w-100 flex-nowrap">
          <Sidebar/>
          <main className="col ps-md-2 pt-2 w-75 d-flex flex-wrap justify-content-center">
                  <div className="w-100 d-flex justify-content-center">
                  <div className="col-12 m-2 p-3">
    <h3>Sign In With </h3>
    <span className='w-100 p-1'><span className='btn rounded-circle circle-icon btn-light' onClick={logGoogleUser}><BsGoogle size={40} fill='#b30000'/></span></span>
    {/*<span className='w-100 p-1'><span className='btn rounded-circle circle-icon btn-light' onClick={signInWithGoogleRedirect}><FcGoogle size={40} fill='#b30000'/></span></span>*/}
    <span className='w-100 p-1'><span className='btn rounded-circle circle-icon btn-light' onClick={logGoogleUser}><BsX size={50} fill='#OOOO'/></span></span>
    <span className='w-100 p-1'><span className='btn rounded-circle circle-icon btn-light' onClick={logGoogleUser}><BsFacebook size={40} fill='blue'/></span></span>
    </div>
  </div>
  <div className="row flex-wrap w-100 m-3 justify-content-around">
    <div className="col-4 p-2">
    <form className='bg-light p-2 h-100' onSubmit={handleSubmit}>
    <label className="text-secondary text-capitalize font-weight-bold"><h2>Sign-In <IoLogIn fill="green"/></h2> </label>
    {error && <small className="form-text text-muted"><h6 className="text-danger">{error}</h6></small>}
            {success && <small  className="form-text text-muted"><h5 className="text-success">🕺💃 Sign In successful! <p>{isSigningIn && <div style={{ color: 'green', marginBottom: '10px' }}>
                    <FaSpinner className="spinner" /> Redirecting...
                </div>}</p></h5></small>}
            {isLoading && (
                <div style={{ color: 'green', marginBottom: '10px' }}>
                    <FaSpinner className="spinner" /> Checking Details...
                </div>
            )}
    <div className="form-group">
          <label>Email address</label>
          <input 
          type="email" 
          className="form-control" 
          id="exampleInputEmail1" 
          aria-describedby="emailHelp" 
          placeholder="Enter email"
          onChange ={handlechange} 
          name="email" 
          value={email}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input 
          type="password" 
          className="form-control" 
          id="exampleInputPassword1" 
          placeholder="Password"
          onChange ={handlechange} 
          name="password" 
          value={password}
          />
        </div>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" required/>
          <label className="form-check-label d-flex" for="exampleCheck1"><h6>Remember</h6></label>
        </div>
        <button type="submit" className="btn btn-success">Sign-In</button>
    </form>
    </div>
    <div className="col-6 p-2">
    <SignUp/>
    </div>
        </div>
          </main>
      </div>
  </div>
    )
}
export default SignIn;