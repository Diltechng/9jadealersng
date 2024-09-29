import {useState} from 'react';
import {FaSignInAlt, FaSpinner} from 'react-icons/fa';
import {useNavigate} from "react-router-dom";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firbase.utils';
const defaultValues = {
    displayName :'',
    email: '',
    password: '',
    confirmPass: '',
}
const SignUp = () =>{
    const [formFields, setFormFields] = useState(defaultValues);
    const {displayName, email, password, confirmPass} = formFields;
    const [error, setError] = useState();
    const [success, setSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isSigningIn, setIsSigningIn] = useState(false);
    const navigate = useNavigate()
    const handleSubmit = async(event) =>{
        event.preventDefault();
        setError('');
        setSuccess('');
        setIsSigningIn(true);
        setIsLoading(true);
       
        try{
          const {user} = await createAuthUserWithEmailAndPassword(email, password);
          await createUserDocumentFromAuth(user, {displayName});
          setSuccess(true);
          setTimeout(()=>{
            if(createAuthUserWithEmailAndPassword){
              navigate('/');
            }
          }, 3000)
          
          
        } catch(error){
          console.error(error.message)
          if (!displayName.trim()){
            return setError("The FullName Field Cannot be empty")
          }
          if (password !== confirmPass){
            return setError("🤔Your Passwords do not match");
          }
          if(error.code === 'auth/email-already-in-use'){
           return setError("😱!Email already in use")
          }
          if(error.message === "Cannot destructure property 'user' of '(intermediate value)' as it is undefined."){
            return setError("🤐!Fields Cannot Be Empty")
           }
        }finally{
          setIsLoading(false);
          setIsLoading(false);
        }
    }

    const handlechange =(event) =>{
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value})
    }
    return (
        
        <form className="bg-light p-2" onSubmit={handleSubmit}>
            <label className="text-secondary text-capitalize font-weight-bold"><h2>Sign-Up <FaSignInAlt fill = "green"/></h2></label>
            {error && <small className="form-text text-muted"><h6 className="text-danger">{error}</h6></small>}
            {success && <small  className="form-text text-muted"><h5 className="text-success">🕺💃 Sign up successful! <p>{isSigningIn && <div style={{ color: 'green', marginBottom: '10px' }}>
                    <FaSpinner className="spinner" /> Redirecting...
                </div>}</p></h5></small>}
            {isLoading && (
                <div style={{ color: 'green', marginBottom: '10px' }}>
                    <FaSpinner className="spinner" /> Adding Your Details to Our Server...
                </div>
            )}
        <div className="form-group">
                <label>Full Name</label>
                <input 
                type="text" 
                className="form-control" 
                placeholder="Full name" 
                onChange ={handlechange} 
                name="displayName" 
                value={displayName}/>
        </div>
        <div className="form-group">
          <label>Email address</label>
          <input type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange ={handlechange} name="email"  value={email}/>
          <small id="emailHelp" className="form-text text-muted"><h6>We will never share your emails</h6></small>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" id="InputPassword1" placeholder="Password" onChange ={handlechange} name="password" value={password}/>
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input type="password" className="form-control" placeholder="Confirm Password" onChange ={handlechange} name="confirmPass" value={confirmPass}/>
        </div>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" required/>
          <label className="form-check-label d-flex" for="exampleCheck1"><h6>i Agree to <a href="#">T&C</a></h6></label>
        </div>
        <button type="submit" className="btn btn-success">Sign-Up</button>
      </form>   
    );
};
export default SignUp;