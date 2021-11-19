import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import appReducers from './appReducers';
import authReducers from './authReducers';
import thunk from 'redux-thunk';
import cartReducer from './cartReducer';
import orderReducer from './orderReducer';
import wishlistReducer from './WishlistReducer';

export const store = createStore(
  combineReducers({
    userDetails: authReducers,
    appData: appReducers,
    cart: cartReducer,
    order: orderReducer,
    wishlist: wishlistReducer,
  }),
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ),
);

export default store;
