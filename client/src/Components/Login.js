import "../Css/Login.css"

import React, { useState } from 'react'

import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

function Login({onLogin}) {

    const [showLogin, setShowLogin] = useState(true);

  return (
    <div className='access'>
    {showLogin ? (
      <>
        <LoginForm onLogin={onLogin} />
        <br/>
        <p>
         
          <em>Don't have an account?</em>
          <button className='access_btn' onClick={() => setShowLogin(false)}>
            Sign Up
          </button>
        </p>
        <br/>
      </>
    ) : (
      <>
        <SignUpForm onLogin={onLogin} />
        <p>
          <em>Already have an account?</em>
          <button className='access_btn' onClick={() => setShowLogin(true)}>
            Log In
          </button>
        </p>
      </>
    )}
    </div>
  )
}

export default Login