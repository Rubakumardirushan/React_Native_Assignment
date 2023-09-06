// rootReducer.js
import { combineReducers } from 'redux';
import authReducers from './authReducers'; // Import your auth reducer here

// Combine all your reducers into a single root reducer
const rootReducer = combineReducers({
  auth: authReducers, // Replace 'auth' with your desired reducer name
  // Add other reducers if you have them
});

export default rootReducer;
