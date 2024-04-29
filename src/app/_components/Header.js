import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='header-wrapper'>
    <div className='logo'>
        <img style={{width:100}} src='https://w7.pngwing.com/pngs/205/720/png-transparent-free-delivery-delivery-take-out-online-food-ordering-restaurant-business-delivery-food-company-text-thumbnail.png'/>
    </div>
      <ul>
        <li>
            <Link href="/">Home</Link>
        </li>
        <li>
            <Link href="/">Login/SignUp</Link>
        </li>
        <li>
            <Link href="/">Profile</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
