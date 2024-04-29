'use client'
import React, { useState } from 'react'
import Login from '../_components/login'
import Signup from '../_components/signup'
import Header from '../_components/Header'
import './style.css'
import Footer from '../_components/Footer'

const page = () => {
    const [login,setLogin] = useState(true)
  return (
    <div className='container'>
    <Header/>
      <>
        <h1>Resturent Login/SignUp Page</h1>
        {
            login? <Login/> : <Signup/>
        }
        <div>
            
                <button className='button-link' onClick={()=>setLogin(!login)}>
                    {
                        login? "dont have account ?" : "Already have account "
                    }
                </button>
                
            
        </div>
        
        
        
      </>
      <Footer/>
    </div>
  )
}

export default page
