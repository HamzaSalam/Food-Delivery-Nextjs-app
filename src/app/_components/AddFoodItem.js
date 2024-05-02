import React, { useState } from 'react'

const AddFoodItem = (props) => {
    const [name,setName] = useState("")
    const [price,setPrice] = useState("")
    const [path,setPath] = useState("")
    const [description,setDescription] = useState("")
    const [error,setError]= useState(false)
    const handleAddFoodItem = async ()=>{
        console.log(name,price,path,description);
        if(!name || !price || !path || !description ){
            setError(true)
            return false
        }else{
            setError(false)
        }
        let resto_id;
        const resturentData = JSON.parse(localStorage.getItem("resturantUser"));
        if(resturentData){
            resto_id = resturentData._id
        } 
        let response = await fetch('http://localhost:3000/api/resturent/food',{
            method:"POST",
            body:JSON.stringify({name,price,img_path:path,description,resto_id})
        })
        response = await response.json();
        if(response.success){
            alert("Food item added")
            props.setAddItem(false) // ya redirect krny ka code ha jo k prop ho ka rha dashboard k page sy 
        }else{
            alert("Food item not added")
        }
    }
  return (
    <div className='container'>
      <h1>Add new food item</h1>
      <div className='input-wrapper'>
        <input type='text' className='input-field' placeholder='Enter Food name'
            value={name} onChange={(e)=>setName(e.target.value)}
        />
        {error && !name && <span className='input-error'> please enter valid name</span>}
      </div>
      <div className='input-wrapper'>
        <input type='text' className='input-field' placeholder='Enter Food price'
            value={price} onChange={(e)=>setPrice(e.target.value)}
        />
         {error && !price && <span className='input-error'> please enter valid price</span>}
      </div>
      <div className='input-wrapper'>
        <input type='text' className='input-field' placeholder='Enter Food image path'
            value={path} onChange={(e)=>setPath(e.target.value)}
        />
         {error && !path && <span className='input-error'> please enter valid image path</span>}
      </div>
      <div className='input-wrapper'>
        <input type='text' className='input-field' placeholder='Enter Food description'
            value={description} onChange={(e)=>setDescription(e.target.value)}
        />
         {error && !description && <span className='input-error'> please enter valid description</span>}
      </div>
      <div className='input-wrapper'>
       <button className='btn' onClick={handleAddFoodItem}>Add Food item</button>
      </div>
    </div>
  )
}

export default AddFoodItem
