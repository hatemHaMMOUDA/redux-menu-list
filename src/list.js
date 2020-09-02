import React from 'react'

import Item from './item'
import NewModal from './newModal';
import {connect} from 'react-redux'
import { getList,deleteItem,updateItem } from "./redux/actions";
// const arr = [
//   {
//     id:0,
//     dish: "cousocus",
//     Img:
//       "couscous.jpg",
//     price: "20000 Dt",
//   },
//   {
//     id: 1,
//     dish: "Pizza",
// Img:  
//       "pizza.jpg",
//     price: "15000 Dt",
//   },
//   {
//     id: 2,
//     dish: "Mixed Grill",
//     Img:
//       "grillade.jpg",
//     price: "30000 Dt",
//   },
//   {
//     id:3,
//     dish: "Sea Food",
//     Img:
//       "seaFood.jpg",
//     price: "45000 Dt",
//   },
// ];


 

const  List =(props)=> {


 // const [list,setList]=useState(arr)  
const deleteThis=(id)=>{
    console.log("hello function: ",id)
    setList(list.filter((el)=>el.id!==id))
  }
    
const modifyDish =(item)=>{ 
props.updateItem(item)
  //setList(list.map((element,index)=>element.id===item.id?element=item:element))
console.log("item from list component",item)
} 

const addDish=(item)=>{ 
  props.addDish(item)
  console.log("itemList",item)
//setList([...list,item])
}


function arrLength(){ 
  console.log("this is the array length:",list)
}

      return (
        <div>
          <NewModal NewId={props.list.length} functAdd={addDish} />
          {props.list.length === 0 ? (
            <div className="m-auto">
              <span style={{ fontSize: 15, marginTop: 20 }}>no items !!</span>
            </div>
          ) : (
            <div className="element">
              {props.list.map((element, index) => (
                <Item
                  key={element.id}
                  item={element}
                  btnFunc={deleteThis}
                  modifyDish={modifyDish}
                />
              ))}
            </div>
          )}
        </div>
      );
    
}

 const mapStateToProps=(state)=>{ 
    return{list:state.items 
    }
  }

const NewList = connect (mapStateToProps,{getList,deleteItem,updateItem,addItem})(List)

export default NewList
