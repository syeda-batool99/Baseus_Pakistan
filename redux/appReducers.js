/* eslint-disable prettier/prettier */
import {
  GET_CATEGORIES,
  GET_PRODUCTS,
  GET_REVIEWS,
  GET_PRODUCT_VARIATIONS,
  GET_SEARCHED_PRODUCTS,
} from './ActionTypes';

const initialState = {
  Products: [],
  Categories: [],
  Reviews: [],
  ProductVariations: [],
  searchedProducts: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      // console.log('action.payload', action.payload);
      return {
        ...state,
        Products: action.payload,
      };
    case GET_CATEGORIES:
      // console.log('action.payload', action.payload);
      return {
        ...state,
        Categories: action.payload,
      };
    case GET_REVIEWS:
      // console.log('action.payload', action.payload);
      return {
        ...state,
        Reviews: action.payload,
      };
    case GET_PRODUCT_VARIATIONS:
      // console.log('action.payload', action.payload);
      return {
        ...state,
        ProductVariations: action.payload,
      };
    case GET_SEARCHED_PRODUCTS:
      // console.log('action.payload', action.payload);
      return {
        ...state,
        searchedProducts: action.payload,
      };
    default:
      return state;
  }
}
