import axios from 'axios';
import {  Alert,} from 'react-native';
export const login = (credentials) => {

if(!(credentials.username ) && !(credentials.password)){
    Alert.alert('Enter Username and password'
    
    
    );
    console.log("checks username and password is null..?")
}
else if(!(credentials.password)){
    Alert.alert('Enter the password')
    console.log("checks  password is null..")
}
else if(!(credentials.username)){
    Alert.alert('Enter the username')
    console.log("checks username  is null..")
}

  return async (dispatch) => {
    try {
      const response = await axios.post(
        'https://fakestoreapi.com/auth/login',
        credentials
      );

      
      const token = response.data.token;
if(token){
    Alert.alert(`Hi ${credentials.username} Login is Success` )
    console.log("JWT token return pass...")
    credentials.navigation.navigate('LIST ALL AVAILABLE PRODUCTS')
   
}
      
      dispatch({ type: 'LOGIN_SUCCESS', payload: { token } });

    }
    
    catch (error) {

        Alert.alert('Incorrect Password or username')
      dispatch({ type: 'LOGIN_FAILURE', payload: { error: error.message } });
    }
  };
};
