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
  SIGNIN_USER,
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
  EMPTY_WISHLIST,
  UPDATE_CART,
} from './ActionTypes';
import axios from 'axios';
import Constants from './Constants';
import {Alert} from 'react-native';
import Toast from 'react-native-toast-message';
// import {URL, loginRoute, signupRoute, verifyCNICRoute} from '../config/const';

export const getProducts = page => async dispatch => {
  const url = `${Constants.URL.wc}products?per_page=100&exclude=8650&consumer_key=${Constants.Keys.ConsumerKey}&consumer_secret=${Constants.Keys.ConsumerSecret}`;
  try {
    let response = await axios.get(url);
    // console.log('response getProducts', response.data[0]);
    await dispatch({
      type: GET_PRODUCTS,
      payload: response.data,
    });
    return response.data;
  } catch (error) {
    console.log('error getProducts', error.message);
    Toast.show({
      type: 'error',
      text1: 'Error',
      text2: error,
      position: 'top',
    });
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
    console.log('error signup', error.response.data.message);
    Toast.show({
      type: 'error',
      text1: 'Signup Error',
      text2: error.response.data.message,
      position: 'top',
    });
  }
};

export const getUserById = id => async dispatch => {
  const url = `${Constants.URL.wc}customers/${id}`;
  try {
    console.log('in getuserbyId', id);
    let response = await axios.post(url, id);
    console.log('in getuserbyId got response', response);
    await dispatch({
      type: SIGNIN_USER,
      payload: response.data,
    });
    return response.data;
  } catch (error) {
    console.log('error getuserbyId', error.message);
  }
};

export const signin = body => async dispatch => {
  console.log('in login');
  const url = 'https://baseus.com.pk/wp-json/jwt-auth/v1/token';
  try {
    console.log('in signin', body);
    let response = await axios.post(url, body);
    console.log('in signin got response', response.data);
    await dispatch({
      type: SIGNIN_USER,
      payload: response.data,
    });
    return response.data;
  } catch (error) {
    console.log('error signin', error.response.data.message);
    Toast.show({
      type: 'error',
      text1: 'Signin Error',
      text2: error.response.data.message,
      position: 'top',
    });
  }
  // axios
  //   .post(url, body)
  //   .then(response => {
  //     console.log('in signin got response', response.data);
  //     // let token = response?.data?.data?.token;
  //     // console.log('token', token);
  //     // props.GetUser(response.data.id);
  //     dispatch({
  //       type: SIGNIN_USER,
  //       payload: response.data.data,
  //     });
  //   })
  //   .catch(error => {
  //     Alert.alert('Signin Error', error.response.data.message);
  //   });
};

export const addToCart = item => async dispatch => {
  try {
    // console.log('in addtoCart app actions', item, typeof dispatch);
    console.log('item in addToCart', item);

    await dispatch({
      type: ADD_TO_CART,
      payload: {...item, qty: 1},
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

export const updateCart = (item, operation) => async dispatch => {
  // console.log('in update cart', item, num);
  try {
    console.log('in updateCart app actions', item.qty, operation);

    await dispatch({
      type: UPDATE_CART,
      payload: item,
      // quantity: num,
      operation,
    });
    return item;
  } catch (error) {
    console.log('error in update', error);
  }
};

export const addToWishlist = item => async dispatch => {
  try {
    // console.log('in addtoCart app actions', item, typeof dispatch);

    await dispatch({
      type: ADD_TO_WISHLIST,
      payload: item,
    });
    Toast.show({
      type: 'success',
      text1: 'Successful',
      text2: 'Item added to wishlist',
      position: 'top',
    });
    return item;
  } catch (error) {
    console.log('error', error);
  }
};
export const removefromWishlist = (item, id) => async dispatch => {
  // console.log('in remove items app action', id);
  dispatch({
    type: REMOVE_FROM_WISHLIST,
    payload: item,
    index: id,
  });
};
export const emptyWishlist = () => async dispatch => {
  dispatch({
    type: EMPTY_WISHLIST,
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
