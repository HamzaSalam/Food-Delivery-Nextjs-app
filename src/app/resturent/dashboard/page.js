'use client'
import Header from '@/app/_components/Header'
import './../style.css'
import AddFoodItem from '@/app/_components/AddFoodItem'
import { useState } from 'react'
import FoodItemList from '@/app/_components/FoodItemList'

const Page = () => {
  const [addItem,setAddItem] = useState(false);
  return (
    <div>
    <Header/>
    <button onClick={()=>setAddItem(true)}>Add Food</button>
    <button onClick={()=>setAddItem(false)}>Dashboard</button>
    {
      // edr jo prop dala ha wo redirect k ly use kea ha Add food item k paga ma taky add food k 
      // bad change ho jay page
      addItem?  <AddFoodItem setAddItem={setAddItem}/> : <FoodItemList/>
    }
   
      
    </div>
  )
}

export default Page
