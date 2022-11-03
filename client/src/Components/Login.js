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
        <p className="Ld">
         
          <em>Don't have an account?</em>
          <button className='access_btn' onClick={() => setShowLogin(false)}>
            Sign Up
          </button>
        </p>
        <br/>
      </>
    ) : (
      <div className="lSignUp">
        <SignUpForm onLogin={onLogin} />
        <p className="Sd">
          <em>Already have an account?</em>
          <button className='access_btn' onClick={() => setShowLogin(true)}>
            Log In
          </button>
        </p>
      </div>
    )}
    </div>
  )
}

export default Login