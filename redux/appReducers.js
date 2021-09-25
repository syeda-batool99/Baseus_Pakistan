import {GET_CATEGORIES, GET_PRODUCTS} from './ActionTypes';
import {products} from '../shared/Products';
import {categories} from '../shared/Categories';

const initialState = {
  Products: products,
  Categories: categories
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        Products: products
        
      };
    case GET_CATEGORIES:
      console.log('action.payload', action.payload);
      return {
        ...state,
        Categories: categories
        
      };
    default:
      return state;
  }
}
