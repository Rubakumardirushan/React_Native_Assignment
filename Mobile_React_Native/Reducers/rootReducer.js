// rootReducer.js
import { combineReducers } from 'redux';
import authReducers from './authReducers'; 
import productsReducer from './productsReducer';
const rootReducer = combineReducers({
  auth: authReducers,
  products: productsReducer,
  
});

export default rootReducer;
