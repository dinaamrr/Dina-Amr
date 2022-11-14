
import '../styles/signup.css'
import image from '../assets/images/Image.png'
import {FcGoogle} from 'react-icons/fc'
import logo from '../assets/images/logo.png';
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";
import { createUserWithEmailAndPassword, updateProfile ,onAuthStateChanged } from "firebase/auth";
const Signup = () => {
    const navigate = useNavigate();
    const [values, setValues] = useState({
      name: "",
      email: "",
      pass: "",
    });
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
      });
    const [setUser] = useState({});

    const [errorMsg, setErrorMsg] = useState("");
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  
    const handleSubmission = () => {
      if (!values.name || !values.email || !values.pass) {
        setErrorMsg("Fill all fields");
        return;
      }
      setErrorMsg("");
  
      setSubmitButtonDisabled(true);
      createUserWithEmailAndPassword(auth, values.email, values.pass)
        .then(async (res) => {
          setSubmitButtonDisabled(false);
          const user = res.user;
          await updateProfile(user, {
            displayName: values.name,
          });
          navigate("/");
        })
        .catch((err) => {
          setSubmitButtonDisabled(false);
          setErrorMsg(err.message);
        });
    };
  
  return (
   
    <div className='signup-container'>
  
      <div className='signup-content'>
        <div className='signup-form'>
          <div className='logoo'>
        <img src={logo} alt=''/>
          </div>
          <h1>Create new account</h1>
          <p>Welcome back! Please enter your details</p>
          <form >
            <label htmlFor='fullName'>Full Name</label>
            <input
              type='text'
              name='fullName'
              id='fullName'
              placeholder='Irumi Desu'
             
              required={true}
              onChange={(event) =>
                setValues((prev) => ({ ...prev, name: event.target.value }))
              }
            />
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='irumi@desu.com'
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
              placeholder='Create your password'
              onChange={(event) =>
                setValues((prev) => ({ ...prev, pass: event.target.value }))
              }
              required={true}
              minLength={8}
            />
            

            <button className='signup-btn'  onClick={handleSubmission} disabled={submitButtonDisabled}>Create Account</button>
            <button className='signup-google-btn' type='button'>
            <FcGoogle/>
              Sign up with google
            </button>
            <p className='have-account'>
              Already have an account? <Link to='/signin'>Sign in</Link>
            </p>
          </form>
        </div>
      </div>
      <img
        src={image} alt=''
      />
      
    </div>
  )
}

export default Signup