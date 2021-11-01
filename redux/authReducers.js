/* eslint-disable prettier/prettier */
import {SIGNIN_USER, SIGNUP_USER, CLEAR_USER} from './ActionTypes';

const initialState = {
  user: null,
  isloggedIn: false,
  role: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SIGNUP_USER:
      return {
        ...state,
        user: action.payload,
        isloggedIn: true,
        userType: action.payload.role,
      };
    case SIGNIN_USER:
      console.log('action.payload', action.payload);
      return {
        ...state,
        user: action.payload,
        isloggedIn: true,
        userType: action.payload.role,
      };
    case CLEAR_USER:
      return {
        ...state,
        user: null,
        isloggedIn: false,
        userType: undefined,
      };
    default:
      return state;
  }
}
