import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const Login = () => {
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  const [error,setError] = useState()
  const router = useRouter()

  const handlelogin = async ()=>{
    if(!email || !password){
      setError(true)
      return false
    }
    else{
      setError(false)
    }
    console.log(email,password);

    let response = await fetch('http://localhost:3000/api/resturent',{
      method:'POST',
      body:JSON.stringify({email,password,login:true})
    });
    response = await response.json();
    if(response.success){
      const {result} = response;
      delete result.password;
      localStorage.setItem("resturantUser",JSON.stringify(result))
      router.push("/resturent/dashboard")
      alert("Login successfully")
    }
    else{
      alert("Login not successfully")
    }
  }
  return (
    <div>
      <>
        <h3>Login page</h3>
        <div className='input-wrapper'>       
        <input type='email' placeholder='Enter Email id' className='input-field' 
          value={email} onChange={(e)=>setEmail(e.target.value)}
        />
        {error && !email && <span className='input-error'> please enter valid email</span>}
        </div>
        <div className='input-wrapper'>
        <input type='password' placeholder='Enter Password' className='input-field'
          value={password} onChange={(e)=>setPassword(e.target.value)}
        />
        {error && !password && <span className='input-error'> please enter valid password</span>}
        </div>
        <div className='input-wrapper'>
            <button className='btn' onClick={handlelogin}>Login</button>
        </div>
      </>
    </div>
  )
}

export default Login
