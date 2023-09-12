const initialState = {
    isAuthenticated: false,
    token: null,
    error: null,
  };
  
  const authReducers = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          isAuthenticated: true,
          token: action.payload.token,
          error: null,
        };
      case 'LOGIN_FAILURE':
        return {
          ...state,
          isAuthenticated: false,
          token: null,
          error: action.payload.error,
        };
      default:
        return state;
    }
  };
  
  export default authReducers;
  
