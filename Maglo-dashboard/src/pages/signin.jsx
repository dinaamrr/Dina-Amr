import React ,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
// import { signInWithEmailAndPassword } from "firebase/auth"
import '../styles/signin.css'
import image from '../assets/images/Image.png'
import {FcGoogle} from 'react-icons/fc'
import logo from '../assets/images/logo.png';
import { signInWithGooglePopup,createUserDocFromAuth } from "../firebase/firebase";
import { useAuth } from '../contexts/AuthContext';
const Signin = () => {
    const { login } = useAuth();
    const navigation = useNavigate();
    const [formData, setFormData] = useState({
      email: '',
      password: '',
   
    });
    const [errMsg, setErrMsg] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        const { email, password } = formData;
        try {
          await login(email, password);
          navigation('/');
        } catch (error) {

          setErrMsg(() => {
            alert("Wrong email or password")
            switch (error.code) {
              case 'auth/user-not-found':
                return 'User not found. Please check your email and password';
    
              default:
                return errMsg;
              
            }
          });
          setFormData({
            email: '',
            password: '',
       
          });
        }
      }

    // const navigate = useNavigate();
    // const [values, setValues] = useState({
    //   email: "",
    //   pass: "",
    // });
    // const [errorMsg, setErrorMsg] = useState("");
    // const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  
    // const handleSubmission = () => {
    //   if (!values.email || !values.pass) {
    //     setErrorMsg("Fill all fields");
    //     return;
    //   }
     
  
    //   setSubmitButtonDisabled(true);
    //   signInWithEmailAndPassword(auth, values.email, values.pass)
    //     .then(async (res) => {
    //       setSubmitButtonDisabled(false);
          
    //       navigate("/");
    //     })
    //     .catch((err) => {
    //       setSubmitButtonDisabled(false);
    //       setErrorMsg(err.message);
    //       alert("Wrong email or password")
            
          
    //     });
    // };
    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocFromAuth(user);
    // setCurrentUser(user);
    // if (currentUser) {
          window.location.pathname = '/dashboard';
    // }
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
                setFormData((prev) => ({ ...prev, email: event.target.value }))
              }
              value={formData.email}
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
                setFormData((prev) => ({ ...prev, password: event.target.value }))
              }
              value={FormData.password}
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
         
          <button  onClick={handleSubmit} className='signin-btn'>Sign in</button>
          <button  className='signin-google-btn'  onClick={signInWithGoogle} type='button'>
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
