import { ADD_ITEM, GET_LIST, UPDATE_ITEM, DELETE_ITEM } from "./types" 

const INITIAL_STATE = {items: [
   {
        id: 0,
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
        id: 3,
        dish: "Sea Food",
        Img:
            "seaFood.jpg",
        price: "45000 Dt",
    },
] 
}

const reducer =(state= INITIAL_STATE,action)=>{ 
    switch(action.type)
    {case GET_LIST:
    return {...state}
    case DELETE_ITEM:
    return {...state,items:state.filter((el)=>el.id!==action.payload)}
        case UPDATE_ITEM:
            return { ...state,items:items.map((el) => el.id ===action.payload.id ? payload : el) }
        case ADD_ITEM:
            return{...state,items:[...state.items,action.payload]}

default: return state 
}
} 

export default reducer;