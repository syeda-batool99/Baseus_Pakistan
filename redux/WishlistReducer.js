import {
  ADD_TO_WISHLIST,
  EMPTY_WISHLIST,
  REMOVE_FROM_WISHLIST,
} from './ActionTypes';
import Toast from 'react-native-toast-message';

const initialState = {
  wishlist: [],
};
export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      var {payload} = action;
      var item = state.wishlist.find(product => product.id === payload.id);
      if (item) {
        Toast.show({
          type: 'error',
          //   text1: 'Error',
          text2: 'Item already added to wishlist',
          position: 'top',
        });
        return {
          ...state,
        };
      }
      return {
        ...state,
        wishlist: [action.payload, ...state.wishlist],
      };

    case EMPTY_WISHLIST:
      return {
        ...state,
        wishlist: [],
      };
    case REMOVE_FROM_WISHLIST:
      return {
        ...state,
        wishlist: state.wishlist.filter((item, i) => i !== action.index),
      };
    default:
      return state;
  }
}
