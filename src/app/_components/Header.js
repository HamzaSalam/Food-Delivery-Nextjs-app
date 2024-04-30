'use client'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

import React, { useEffect, useState } from 'react'

const Header = () => {
  const [details,setDetails] = useState()
  const router = useRouter()
  const pathname = usePathname()
  useEffect(()=>{
    let data = localStorage.getItem("resturantUser")
    if(!data && pathname == "/resturent/dashboard" ){
        router.push('/resturent')
    } else if(data && pathname == "/resturent"){
      router.push("/resturent/dashboard")
    }
    else{
      setDetails(JSON.parse(data))
    }
},[])
const logout = ()=>{
  localStorage.removeItem("resturantUser")
  router.push('/resturent')
}
  return (
    <div className='header-wrapper'>
    <div className='logo'>
        <img style={{width:100}} src='https://w7.pngwing.com/pngs/205/720/png-transparent-free-delivery-delivery-take-out-online-food-ordering-restaurant-business-delivery-food-company-text-thumbnail.png'/>
    </div>
      <ul>
        <li>
            <Link href="/">Home</Link>
        </li>
        {
          details && details.name ?
         <>
         <li>
            <button onClick={logout}>Logout</button>
        </li> 
          <li>
            <Link href="/">Profile</Link>
        </li> 
         </>
        :
        <li>
            <Link href="/">Login/SignUp</Link>
        </li>
        }
        
      
      </ul>
    </div>
  )
}

export default Header
