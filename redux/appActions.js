import {
  SIGNIN_USER,
  SIGNUP_USER,
  CLEAR_USER,
  GET_CATEGORIES,
  GET_PRODUCTS,
  ADD_ORDER,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  EMPTY_CART,
} from './ActionTypes';
import {products} from '../shared/Products';
import {categories} from '../shared/Categories';
// import {URL, loginRoute, signupRoute, verifyCNICRoute} from '../config/const';

export const getProducts = () => async dispatch => {
  dispatch({
    type: GET_PRODUCTS,
    payload: products,
  });
};

export const getCategories = () => async dispatch => {
  dispatch({
    type: GET_CATEGORIES,
    payload: categories,
  });
};

export const addToCart = item => async dispatch => {
  try {
    console.log('in addtoCart app actions', item,typeof dispatch);

    await dispatch({
      type: ADD_TO_CART,
      payload: item,
    });
    return item;
  } catch (error) {
    console.log('error', error);
  }
  
};
export const removeItem = (item,id) => async dispatch => {
  console.log('in remove items app action', id)
  dispatch({
    type: REMOVE_FROM_CART,
    payload: item,
    index:id
  });
};
export const emptyCart = () => async dispatch => {
  dispatch({
    type: EMPTY_CART,
  });
};

export const addOrder = data => async dispatch => {
  dispatch({
    type: ADD_ORDER,
    payload: data,
  });
};
// export const login = (body) => async (dispatch) => {
//   try {
//     // console.log('in Login', body);
//     // let response = await axios.post(`${URL}${loginRoute}`, body);
//     // console.log('response', response.data);

//     await dispatch({
//       type: SIGNIN_USER,
//       payload: response.data.result,
//     });
//     return response.data.result;
//   } catch (error) {
//     console.log('error signin', error);
//     if (error?.response?.data?.result) {
//       console.log('error123 signin : ', error.response.data);
//       return {error: error.response.data.result};
//     }
//   }
// };

// export const signup = (body) => async (dispatch) => {
//   try {
//     console.log('in authActions in function', body);
//     let response = await axios.post(`${URL}${signupRoute}`, body);
//     console.log('in authActions got response', response);

//     await dispatch({
//       type: SIGNUP_USER,
//       payload: response.data.result,
//     });

//     return response.data.result;
//   } catch (error) {
//     if (error?.response?.data?.result) {
//       console.log('error123 signin : ', error.response.data);
//       return {error: error.response.data.result};
//     }
//   }
// };

// export const verifyCNIC = async (body) => {
//   try {
//     console.log('in authActions in verifyCNIC', body);
//     let response = await axios.post(`${URL}${verifyCNICRoute}`, body);
//     console.log('in authActions got response verifyCNIC', response);

//     // await dispatch({
//     //   type: VERIFY_CNIC,
//     //   payload: response.data.result,
//     // });

//     return response.data;
//   } catch (error) {
//     if (error?.response?.data?.result) {
//       console.log('error123 Route : ', error.response.data);
//       return {error: error.response.data.result};
//     }
//   }
// };

// export const logout = () => async (dispatch) => {
//   dispatch({
//     type: CLEAR_USER,
//   });
// };
