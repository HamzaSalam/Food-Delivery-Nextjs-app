import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const Signup = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [c_password,setc_password] = useState('')
  const [name,setName] = useState('')
  const [city,setCity] = useState('')
  const [address,setAddress] = useState('')
  const [contact,setContant] = useState('')
  const router = useRouter();
  const [error,setError] = useState(false)
  const [passwordError,setPasswordError] = useState(false)

  const handleSignup = async ()=>{
    if(password!==c_password){
      setPasswordError(true);
      return false
    }else{
      setPasswordError(false);
      
    }
    if(!email || !password || !c_password || !name || !city || !address || !contact){
      setError(true);
      return false
    }
    else{
      setError(false)
    }
   
    console.log(email,password,c_password,name,city,address,contact)
    let response = await fetch('http://localhost:3000/api/resturent',{
      method: "POST",
      body: JSON.stringify({email,password,name,city,address,contact})
    })
    response = await response.json()
    console.log(response);
    if(response.success){
      console.log(response);
      const {result} = response
      delete result.password
      localStorage.setItem("resturantUser",JSON.stringify(result))
      router.push("/resturent/dashboard")
    }

  }

  return (
    <div>
      <>
        <h1>SignUp page</h1>
        <div className='input-wrapper'>       
        <input type='email' placeholder='Enter Email id' className='input-field' 
          value={email} onChange={(e)=>setEmail(e.target.value)}
        />
        {
          error && !email && <span className='input-error'>Please enter valid email</span>
        }
        </div>
        <div className='input-wrapper'>
        <input type='password' placeholder='Enter Password' className='input-field'
          value={password} onChange={(e)=>setPassword(e.target.value)}
        />
        {
          passwordError && <span className='input-error'>Passowrd and Confirm Password not match</span>
        }
        {
          error && !password && <span className='input-error'>Please enter valid password</span>
        }
        </div>
        <div className='input-wrapper'>
        <input type='password' placeholder='Enter Confirm Password' className='input-field'
          value={c_password} onChange={(e)=>setc_password(e.target.value)}
        />
         {
          passwordError && <span className='input-error'>Passowrd and Confirm Password not match</span>
        }
        {
          error && !c_password && <span className='input-error'>Please enter valid confirm password</span>
        }
        </div>
        <div className='input-wrapper'>
        <input type='text' placeholder='Enter Resturent name' className='input-field'
          value={name} onChange={(e)=>setName(e.target.value)}
        />
         {
          error && !name && <span className='input-error'>Please enter valid resturent name</span>
        }
        </div>
        <div className='input-wrapper'>
        <input type='text' placeholder='Enter City' className='input-field'
          value={city} onChange={(e)=>setCity(e.target.value)}
        />
         {
          error && !city && <span className='input-error'>Please enter valid city name</span>
        }
        </div>
        <div className='input-wrapper'>
        <input type='text' placeholder='Enter Full address' className='input-field'
          value={address} onChange={(e)=>setAddress(e.target.value)}
        />
         {
          error && !address && <span className='input-error'>Please enter valid address</span>
        }
        </div>
        <div className='input-wrapper'>
        <input type='text' placeholder='Enter Contant no.' className='input-field'
          value={contact} onChange={(e)=>setContant(e.target.value)}
        />
         {
          error && !contact && <span className='input-error'>Please enter valid contant number</span>
        }
        </div>
        <div className='input-wrapper'>
            <button className='btn' onClick={handleSignup}>Register</button>
        </div>
      </>
    </div>
  )
}

export default Signup
