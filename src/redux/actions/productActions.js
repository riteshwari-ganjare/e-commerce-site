import { ActionType } from "../constants/action-type";
export const setProduct=products=>{
    return{
        type:ActionType.SET_PRODUCTS,
        payload:products
    }
}
export const selectProduct=products=>{
    return{
        type:ActionType.SELECTED_PRODUCTS,
        payload:products
    }
}
export const removeSelectProduct=()=>{
    return{
        type:ActionType.REMOVE_SELECTED_PRODUCTS
    }
}