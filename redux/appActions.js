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
  GET_REVIEWS
} from './ActionTypes';
import axios from 'axios';
import {categories} from '../shared/Categories';
import Constants from './Constants';
// import {URL, loginRoute, signupRoute, verifyCNICRoute} from '../config/const';

export const getProducts = () => async dispatch => {
  const url = `${Constants.URL.wc}products?per_page=30&consumer_key=${Constants.Keys.ConsumerKey}&consumer_secret=${Constants.Keys.ConsumerSecret}`;
  try{
    let response = await axios.get(url);
    // console.log('response getProducts', response.data[0]);
    await dispatch({
      type: GET_PRODUCTS,
      payload: response.data,
    });
    return response.data;
  } catch (error) {
    console.log('error getProducts', error);
  }
};


export const getCategories = () => async dispatch => {
  const url = `${Constants.URL.wc}products/categories?consumer_key=${Constants.Keys.ConsumerKey}&consumer_secret=${Constants.Keys.ConsumerSecret}`;
  try{
    let response = await axios.get(url);
    // console.log('response getProducts', response.data[0]);
    await dispatch({
      type: GET_CATEGORIES,
      payload: response.data,
    });
    return response.data;
  } catch (error) {
    console.log('error getCategories', error);
  }
};

export const getProductsByCategory = (categoryId) => async dispatch => {
  const url = `${Constants.URL.wc}products?category=${categoryId}&consumer_key=${Constants.Keys.ConsumerKey}&consumer_secret=${Constants.Keys.ConsumerSecret}`;
  try{
    let response = await axios.get(url);
    // console.log('response getProducts', response.data[0]);
    await dispatch({
      type: GET_CATEGORIES,
      payload: response.data,
    });
    return response.data;
  } catch (error) {
    console.log('error getCategories', error);
  }
};

export const getProductById = (productId) => async dispatch => {
  const url = `${Constants.URL.wc}products/${productId}?consumer_key=${Constants.Keys.ConsumerKey}&consumer_secret=${Constants.Keys.ConsumerSecret}`;
  try{
    let response = await axios.get(url);
    // console.log('response getProducts', response.data[0]);
    await dispatch({
      type: GET_PRODUCTS,
      payload: response.data,
    });
    return response.data;
  } catch (error) {
    console.log('error getproductbyid', error);
  }
};

export const getReviewsOfProduct = (productId) => async dispatch => {
  const url = `${Constants.URL.wc}products/${productId}/reviews?consumer_key=${Constants.Keys.ConsumerKey}&consumer_secret=${Constants.Keys.ConsumerSecret}`;
  try{
    let response = await axios.get(url);
    // console.log('response getReviews', response.data[0]);
    await dispatch({
      type: GET_REVIEWS,
      payload: response.data,
    });
    return response.data;
  } catch (error) {
    console.log('error getReviews', error);
  }
};

export const addToCart = item => async dispatch => {
  try {
    console.log('in addtoCart app actions', item, typeof dispatch);

    await dispatch({
      type: ADD_TO_CART,
      payload: item,
    });
    return item;
  } catch (error) {
    console.log('error', error);
  }
};
export const removeItem = (item, id) => async dispatch => {
  console.log('in remove items app action', id);
  dispatch({
    type: REMOVE_FROM_CART,
    payload: item,
    index: id,
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
