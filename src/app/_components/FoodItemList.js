import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const FoodItemList = () => {
  const [fooditem,setFoodItem] = useState();
  const router = useRouter()

  useEffect(()=>{
    loadFoodItems();
  }, []);

  const loadFoodItems = async ()=>{
    const resturentData = JSON.parse(localStorage.getItem('resturantUser'))
    const resto_id = resturentData._id
    console.log(resturentData._id)
    let response = await fetch("http://localhost:3000/api/resturent/food/"+resto_id)
    response = await response.json();
    if(response.success){
      setFoodItem(response.result)
    }else{
      alert("food item list not loading")
    }
  }

  const deleteFoodItem = async (id)=>{
    let response = await fetch("http://localhost:3000/api/resturent/food/"+id,{
      method:"delete"
    }
  );
  response = await response.json();
  if(response.success){
    loadFoodItems();
  }
  else{
    alert("food item not deleted")
  }
  }
  return (
    <div>
      <h1>Food items</h1>
      <table>
        <thead>
            <tr>
                <td>S.N</td>
                <td>Name</td>
                <td>Price</td>
                <td>Description</td>
                <td>Image</td>
                <td>Operations</td>
            </tr>
        </thead>
        <tbody>
        {
          fooditem && fooditem.map((items,keys)=>(
            <tr key={keys}>
                <td>{keys+1}</td>
                <td>{items.name}</td>
                <td>{items.price}</td>
                <td>{items.description}</td>
                <td><img src={items.img_path}/></td>
                <td><button onClick={()=>router.push('dashboard/'+items._id)}>Edit</button><button onClick={()=>deleteFoodItem(items._id)}>delete</button></td>
            </tr>
          ))
        }
           
        </tbody>
      </table>
    </div>
  )
}

export default FoodItemList
