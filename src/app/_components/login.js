import React from 'react'

const Login = () => {
  return (
    <div>
      <>
        <h3>Login page</h3>
        <div className='input-wrapper'>       
        <input type='email' placeholder='Enter Email id' className='input-field'/>
        </div>
        <div className='input-wrapper'>
        <input type='password' placeholder='Enter Password' className='input-field'/>
        </div>
        <div className='input-wrapper'>
            <button className='btn'>Login</button>
        </div>
      </>
    </div>
  )
}

export default Login
