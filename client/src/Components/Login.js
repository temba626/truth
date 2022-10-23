import React, { useState } from 'react'
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import "../Css/Login.css"

function Login({onLogin}) {

    const [showLogin, setShowLogin] = useState(true);

  return (
    <div className='access'>
    {showLogin ? (
      <>
        <LoginForm onLogin={onLogin} />
        <p>
          <em>Don't have an account?</em>
          <button className='access_btn' onClick={() => setShowLogin(false)}>
            Sign Up
          </button>
        </p>
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