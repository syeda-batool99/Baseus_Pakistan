import Toast from 'react-native-toast-message';
import {
  ADD_TO_CART,
  EMPTY_CART,
  REMOVE_FROM_CART,
  UPDATE_CART,
} from './ActionTypes';
const initialState = {
  cart: [],
  total: 0,
};
export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      var {payload} = action;
      console.log('action.payload in case', action.payload);
      var item = state.cart.find(product => product.id === payload.id);
      if (item) {
        Toast.show({
          type: 'error',
          //   text1: 'Error',
          text2:
            'Item already added to cart. Please update item quantity from cart',
          position: 'top',
        });
        return {
          ...state,
        };
      }
      return {
        ...state,
        cart: [action.payload, ...state.cart],
        total: state.total + Number(action.payload.price),
      };
    case UPDATE_CART:
      item = state.cart.find(product => product.id === action.payload.id);
      if (item) {
        if (!action.operation && item.qty == 1) {
          return {
            ...state,
            cart: state.cart.filter(item => item.id !== action.payload.id),
            total: state.total - action.payload.price,
          };
        }
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload.id
              ? {
                  ...item,
                  qty: action.operation ? item.qty + 1 : item.qty - 1,
                }
              : item,
          ),
          total: action.operation
            ? state.total + Number(action.payload.price)
            : state.total - Number(action.payload.price),
        };
      }
      return {
        ...state,
        cart: [action.payload, ...state.cart],
        total: state.total + Number(action.payload.price),
      };

    case EMPTY_CART:
      return {
        ...state,
        cart: [],
        total: 0,
      };
    case REMOVE_FROM_CART:
      console.log('in reducers', action.index);
      return {
        ...state,
        cart: state.cart.filter((item, i) => i !== action.index),
        total: state.total - action.payload.price,
      };
    default:
      return state;
  }
}
