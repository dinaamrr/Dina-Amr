import React ,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { signInWithEmailAndPassword } from "firebase/auth"
import '../styles/signin.css'
import image from '../assets/images/Image.png'
import {FcGoogle} from 'react-icons/fc'
import logo from '../assets/images/logo.png';
import { auth } from "../firebase/firebase";
const Signin = () => {

    const navigate = useNavigate();
    const [values, setValues] = useState({
      email: "",
      pass: "",
    });
    const [errorMsg, setErrorMsg] = useState("");
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  
    const handleSubmission = () => {
      if (!values.email || !values.pass) {
        setErrorMsg("Fill all fields");
        return;
      }
      setErrorMsg("");
  
      setSubmitButtonDisabled(true);
      signInWithEmailAndPassword(auth, values.email, values.pass)
        .then(async (res) => {
          setSubmitButtonDisabled(false);
          
          navigate("/");
        })
        .catch((err) => {
          setSubmitButtonDisabled(false);
          setErrorMsg(err.message);
        });
    };
    
  return (
    <div className='signin-container'>
    <div className='signin-content'>
      <div className='signin-form'>
        <div className='logoo'>
         <img src={logo} alt=''/>
        </div>
        <h1>Welcome back</h1>
        <p>Welcome back! Please enter your details</p>
        <form>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='example@email.com'
            onChange={(event) =>
                setValues((prev) => ({ ...prev, email: event.target.value }))
              }
            required={true}
          />
          <label htmlFor='password'>Password</label>
          <input
            autoComplete='on'
            type='password'
            name='password'
            id='password'
            placeholder='Input password'
            onChange={(event) =>
                setValues((prev) => ({ ...prev, pass: event.target.value }))
              }
            required={true}
            minLength={8}
          />
          <div className='remember-me-container'>
            <input
              type='checkbox'
              name='isRemember'
              id='isRemember'
             
            />
            <label htmlFor='isRemember'>Remember for 30 days</label>
          </div>
         
          <button disabled={submitButtonDisabled} onClick={handleSubmission} className='signin-btn'>Sign in</button>
          <button  className='signin-google-btn'  type='button'>
          <FcGoogle/>
            Sign in with google
          </button>
          <p className='have-account'>
            Don't have an account? <Link to='/signup'>Sign up for free</Link>
          </p>
        </form>
      </div>
    </div>
    <img
      className='hand-image'
      src={image}
      alt='hand holding clock'
    />
  </div>
  )
}

export default Signin