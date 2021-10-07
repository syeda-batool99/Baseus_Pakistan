import {GET_CATEGORIES, GET_PRODUCTS, GET_REVIEWS} from './ActionTypes';

const initialState = {
  Products: [],
  Categories: [],
  Reviews: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      // console.log('action.payload', action.payload);
      return {
        ...state,
        Products: action.payload
        
      };
    case GET_CATEGORIES:
      // console.log('action.payload', action.payload);
      return {
        ...state,
        Categories: action.payload
        
      };
      case GET_REVIEWS:
      // console.log('action.payload', action.payload);
      return {
        ...state,
      Reviews: action.payload
        
      };
    default:
      return state;
  }
}
