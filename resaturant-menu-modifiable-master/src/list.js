import React, { useState } from 'react'

import Item from './item'

const arr = [
  {
    id:0,
    dish: "cousocus",
    Img:
      "couscous.jpg",
    price: "20000 Dt",
  },
  {
    id: 1,
    dish: "Pizza",
Img:  
      "pizza.jpg",
    price: "15000 Dt",
  },
  {
    id: 2,
    dish: "Mixed Grill",
    Img:
      "grillade.jpg",
    price: "30000 Dt",
  },
  {
    id:3,
    dish: "Sea Food",
    Img:
      "seaFood.jpg",
    price: "45000 Dt",
  },
];

const  List =(props)=> {
const [list,setList]=useState(arr)  
const deleteThis=(id)=>{
    console.log("hello function: ",id)
    setList(list.filter((el)=>el.id!==id))
  }
    
const modifyDish =(item)=>{ 
console.log("item from list component",item)
setList(list.map((element,index)=>element.id===item.id?element=item:element))
} 


      return (list.length == 0 ? <div className="m-auto"><span  style={{ fontSize: 15,marginTop:20 }}>no items !!</span></div> :
            <div className="element" >
            {list.map((element, index) => <Item key={element.id} item={element} btnFunc={deleteThis} modifyDish={modifyDish}/>)}
            </div>
        )
    
}

export default List
