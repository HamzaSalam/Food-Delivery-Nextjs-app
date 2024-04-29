import React, { useState } from 'react'

const Signup = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [c_password,setc_password] = useState('')
  const [name,setName] = useState('')
  const [city,setCity] = useState('')
  const [address,setAddress] = useState('')
  const [contact,setContant] = useState('')

  const handleSignup = ()=>{
    console.log(email,password,c_password,name,city,address,contact)
  }

  return (
    <div>
      <>
        <h1>SignUp page</h1>
        <div className='input-wrapper'>       
        <input type='email' placeholder='Enter Email id' className='input-field' 
          value={email} onChange={(e)=>setEmail(e.target.value)}
        />
        </div>
        <div className='input-wrapper'>
        <input type='password' placeholder='Enter Password' className='input-field'
          value={password} onChange={(e)=>setPassword(e.target.value)}
        />
        </div>
        <div className='input-wrapper'>
        <input type='password' placeholder='Enter Confirm Password' className='input-field'
          value={c_password} onChange={(e)=>setc_password(e.target.value)}
        />
        </div>
        <div className='input-wrapper'>
        <input type='text' placeholder='Enter Resturent name' className='input-field'
          value={name} onChange={(e)=>setName(e.target.value)}
        />
        </div>
        <div className='input-wrapper'>
        <input type='text' placeholder='Enter City' className='input-field'
          value={city} onChange={(e)=>setCity(e.target.value)}
        />
        </div>
        <div className='input-wrapper'>
        <input type='text' placeholder='Enter Full address' className='input-field'
          value={address} onChange={(e)=>setAddress(e.target.value)}
        />
        </div>
        <div className='input-wrapper'>
        <input type='text' placeholder='Enter Contant no.' className='input-field'
          value={contact} onChange={(e)=>setContant(e.target.value)}
        />
        </div>
        <div className='input-wrapper'>
            <button className='btn' onClick={handleSignup}>Register</button>
        </div>
      </>
    </div>
  )
}

export default Signup
