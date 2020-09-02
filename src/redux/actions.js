// action 1 :getListOfItems
// action 2:  delete
// action 3: update 
// action 4: add 
import {ADD_ITEM,GET_LIST,UPDATE_ITEM,DELETE_ITEM} from "./types" 


const getList=()=>{ 
    return dispatch =>{
        dispatch({type:GET_LIST})
    }
}
// deleteItem
const deleteItem=(id)=>{ return
dispatch=>{dispatch({type:DELETE_ITEM,paylod:"id"})
}}
// updateItem 

const updateItem=(item)=>{ return
    dispatch=>{dispatch({type:UPDATE_ITEM,payload:"item"}) 
}
} 
// addItem 

const addItem=(item)=>{ return
    dispatch=>{dispatch({type:ADD_ITEM,payload:item})}
}


export {getList,deleteItem,updateItem,addItem}