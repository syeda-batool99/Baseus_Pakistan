/* eslint-disable prettier/prettier */
import {
  SIGNUP_USER,
  CLEAR_USER,
  GET_CATEGORIES,
  GET_PRODUCTS,
  ADD_ORDER,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  EMPTY_CART,
  GET_REVIEWS,
  GET_PRODUCT_VARIATIONS,
  GET_SEARCHED_PRODUCTS,
} from './ActionTypes';
import axios from 'axios';
import Constants from './Constants';
import {Alert} from 'react-native';
// import {URL, loginRoute, signupRoute, verifyCNICRoute} from '../config/const';

export const getProducts = () => async dispatch => {
  const url = `${Constants.URL.wc}products?per_page=30&consumer_key=${Constants.Keys.ConsumerKey}&consumer_secret=${Constants.Keys.ConsumerSecret}`;
  try {
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
  try {
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

export const getProductsByCategory = categoryId => async dispatch => {
  const url = `${Constants.URL.wc}products?category=${categoryId}&consumer_key=${Constants.Keys.ConsumerKey}&consumer_secret=${Constants.Keys.ConsumerSecret}`;
  try {
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

export const getProductsBySearch = searchString => async dispatch => {
  const url = `${Constants.URL.wc}products?search=${searchString}&consumer_key=${Constants.Keys.ConsumerKey}&consumer_secret=${Constants.Keys.ConsumerSecret}`;
  try {
    let response = await axios.get(url);
    // console.log('response getProductsSearch', response.data);
    await dispatch({
      type: GET_SEARCHED_PRODUCTS,
      payload: response.data,
    });
    return response.data;
  } catch (error) {
    console.log('error getSearchProducts', error);
  }
};

export const getProductById = productId => async dispatch => {
  const url = `${Constants.URL.wc}products/${productId}?consumer_key=${Constants.Keys.ConsumerKey}&consumer_secret=${Constants.Keys.ConsumerSecret}`;
  try {
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

export const getProductVariations = productId => async dispatch => {
  const url = `${Constants.URL.wc}products/${productId}/variations?consumer_key=${Constants.Keys.ConsumerKey}&consumer_secret=${Constants.Keys.ConsumerSecret}`;
  try {
    let response = await axios.get(url);
    // console.log('response getProducts', response.data[0]);
    await dispatch({
      type: GET_PRODUCT_VARIATIONS,
      payload: response.data,
    });
    return response.data;
  } catch (error) {
    console.log('error get product variation', error);
  }
};

export const getReviewsOfProduct = productId => async dispatch => {
  const url = `${Constants.URL.wc}products/${productId}/reviews?consumer_key=${Constants.Keys.ConsumerKey}&consumer_secret=${Constants.Keys.ConsumerSecret}`;
  try {
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

// export const getCoupons = () => async dispatch => {
//   const url = `${Constants.URL.wc}coupons?consumer_key=${Constants.Keys.ConsumerKey}&consumer_secret=${Constants.Keys.ConsumerSecret}`;
//   try {
//     let response = await axios.get(url);
//     // console.log('response getReviews', response.data[0]);
//     await dispatch({
//       type: GET_REVIEWS,
//       payload: response.data,
//     });
//     return response.data;
//   } catch (error) {
//     console.log('error getCoupons', error);
//   }
// };

export const signup = body => async dispatch => {
  const url = `${Constants.URL.wc}customers?consumer_key=${Constants.Keys.ConsumerKey}&consumer_secret=${Constants.Keys.ConsumerSecret}`;
  try {
    console.log('in signup', body);
    let response = await axios.post(url, body);
    console.log('in signup got response', response);
    await dispatch({
      type: SIGNUP_USER,
      payload: response.data,
    });
    return response.data;
  } catch (error) {
    console.log('error signup', error.message);
    Alert.alert('Error', 'This account already exists. Please Signin', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  }
};

// export const signin = (body) => async (dispatch) => {
//   const url = `${Constants.URL.wc}customers?consumer_key=${Constants.Keys.ConsumerKey}&consumer_secret=${Constants.Keys.ConsumerSecret}`;
//   try {
//     console.log('in signup', body);
//     let response = await axios.post(url, body);
//     console.log('in signup got response', response);
//     await dispatch({
//       type: SIGNUP_USER,
//       payload: response.data,
//     });
//     return response.data;
//   } catch (error) {
//     console.log('error signup', error);
//   }
// };

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

export const logout = () => async dispatch => {
  dispatch({
    type: CLEAR_USER,
  });
};
