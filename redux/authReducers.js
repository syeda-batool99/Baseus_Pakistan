import {SIGNIN_USER, SIGNUP_USER, CLEAR_USER,GET_CATEGORIES, GET_PRODUCTS} from './ActionTypes';

const initialState = {
  user: null,
  isloggedIn: false,
  token: null,
  userType: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SIGNUP_USER:
      return {
        ...state,
        user: action.payload.userCreated,
        token: action.payload.token,
        isloggedIn: true,
        userType: action.payload.userCreated.userType,
        
      };
    case SIGNIN_USER:
      console.log('action.payload', action.payload);
      return {
        ...state,
        user: action.payload.userExist,
        userType: action.payload.userType,
        token: action.payload.token,
        isloggedIn: true,
        
      };
    case CLEAR_USER:
      return {
        ...state,
        user: null,
        isloggedIn: false,
        token: null,
        userType: undefined,
       
      };
    default:
      return state;
  }
}
