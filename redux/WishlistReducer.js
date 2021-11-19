import {
  ADD_TO_WISHLIST,
  EMPTY_WISHLIST,
  REMOVE_FROM_WISHLIST,
} from './ActionTypes';
const initialState = {
  wishlist: [],
};
export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TO_WISHLIST:
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
