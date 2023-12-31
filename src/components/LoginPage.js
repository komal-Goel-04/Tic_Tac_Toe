import React from 'react'
import '../App.css';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import MyGif from '../Mobilelogin.gif'

import {useState,useEffect} from 'react'

import {
    TextField,Button,InputAdornment
}from '@mui/material';

import {Navigate, useNavigate} from 'react-router-dom'

function LoginPage() {

    const initValues = {username: "",email: "", password: ""}
    const[formValues,setValues] = useState(initValues)
    const[formErrors,setFormErrors] = useState({})
    const [isSubmit,setIsSubmit] = useState(false)
    const[isSignedUp,setisSignedUp] = useState(false)

    const handleChange = (e) => {
        // console.log(e.target)
        const{name,value} = e.target
        setValues({...formValues, [name]:value})
        // console.log(formValues)
    }
    
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormErrors(validate(formValues))
        if(Object.keys(formErrors).length === 0 && isSubmit)
        {
          navigate('landingpage')
        }
        setIsSubmit(true)
    }

    useEffect(() => {
        console.log('form errors' ,formErrors)
        if(Object.keys(formErrors).length === 0 && isSubmit)
        {
          console.log(formValues)
        }
    },[formErrors])

    const validate = (values) => {
        const errors = {}
        const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const upper = new RegExp('(?=.*[A-Z])');
        const passwordValidation = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i
  
        if(!values.username) {
          errors.username = "username is required"
        }
        if(!values.email) {
          errors.email = "email is required"
        }
        else if(!emailValidation.test(values.email) && upper.test(values.email)){
          errors.email = "email is invalid"
        }
        if(!values.password) {
          errors.password = "password is required"
        }
        else if(values.password.length < 8){
          errors.password = "password can't be less than 8 characters"
        }
        else if(values.password.length > 10){
          errors.password = "password can't be more than 10 characters"
        }
        else if(!passwordValidation.test(values.password)){
          errors.password = "Enter a strong password"
        }
  
        return errors 
    }
  

  return (
    <div className="container">
        <div className="Image">
          <img src={MyGif} alt="my-gif"></img>
        </div>

    <div className="content">
      {/* {Object.keys(formErrors).length === 0 && isSubmit ? (<div><p>Signed up successfully!</p></div>) : ('')}  */}

      {/* {Object.keys(formErrors).length === 0 && isSubmit ? (setisSignedUp(true)) : ('')}

      if(isSignedUp)
      {
        return <Navigate to="./landingpage"/>
      } */}

        <div className='Createheading'><h1>Create your account </h1></div>

        <div className="username">
          <TextField 
            name="username"
            label="Username"
            type="username" 
            // color="success"
            required 
            value={formValues.username}
            onChange={handleChange}
            InputProps={{startAdornment: 
              <InputAdornment 
                position="start"><PersonIcon />
              </InputAdornment>}}
            />
            <p className="error">{formErrors.username}</p>
        </div>

        <div className="email">
          <TextField 
            name="email"
            label='Email'
            // color="success"
            // color:blue
            type="email"  
            required
            value={formValues.email}
            onChange={handleChange}
            InputProps={{startAdornment: 
              <InputAdornment 
                position="start"><EmailIcon />
              </InputAdornment>}}
          />
          <p className="error">{formErrors.email}</p>
        </div>

        <div>
          <TextField
            name="password" 
            label='Password'
            type="password" 
            // color="success"
            helperText='Use 8 or more characters with a mix of letters,numbers and symbols'
            required
            value={formValues.password}
            onChange={handleChange}
            // InputProps={{endAdornment: 
            //   <InputAdornment 
            //     position="end"><VisibilityIcon />
            //   </InputAdornment>}}
          />
          <p className="error">{formErrors.password}</p>
        </div>

        <div>
          <div className="signingup"><p>By signing up you agree to our <span>Terms of use</span> and <span>Privacy policy</span></p></div>
          <Button 
            varient='contained' 
            color="primary"
            size="medium"
            onClick={handleSubmit}>
            Sign Up
          </Button>
        </div>

    </div>
</div>
    )
}

export default LoginPage
