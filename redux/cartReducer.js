import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from './ActionTypes';
const initialState = {
    cart: [],
    total: 0,
}
export default function(state=initialState, action) {
    switch(action.type){
        case ADD_TO_CART:
            return {
                ...state,
                cart: [action.payload, ...state.cart],
                total: state.total + Number(action.payload.price)
            }
            
        case EMPTY_CART:
            return {
                ...state,
                cart: [],
                total: 0
            }
        case REMOVE_FROM_CART:
            console.log("in reducers", action.index)
            return {
                ...state,
                cart: state.cart.filter((item, i) => i !== action.index),
                total: state.total - action.payload.price,
            }
        default:
            return state
    }
}