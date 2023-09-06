import React, { useState } from 'react';
import { View, Text, StyleSheet ,TextInput} from 'react-native';
import { WingBlank,Button } from '@ant-design/react-native';

import { useDispatch } from 'react-redux';
import { login } from '../Actions/authAction';

const Login = ({ navigation }) =>{
  
    const [before,after]=useState('')
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState(''); 
    const dispatch = useDispatch();
    const handleLogin = () => {
      const credentials = { username, password ,navigation};
      dispatch(login(credentials))
   
    };



  return (
    
    <View style={styles.container}>
      <WingBlank>

        <Text style={styles.title}>LOGIN PAGE</Text>

        <TextInput style={styles.inputbox}
        value={username}
        placeholder='  USERNAME'  onChangeText={(text) => setUsername(text)}></TextInput>

        <TextInput
        placeholder='  PASSWORD'onChangeText={(text) => setPassword(text)}  style={styles.inputbox}
        secureTextEntry
        ></TextInput>

        <Button style={styles.buttons} onPress={handleLogin} >LOG IN</Button>

        <Text style={styles.results}
        >{before}</Text>

      </WingBlank>
    </View>
   

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6678BA',
    marginBottom:40,
    marginRight:20,
    marginLeft:20,
    marginTop:40,
    borderRadius: 30, 
    borderWidth: 1, 
    
    
    
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
   marginLeft:30,
   
   marginTop:155,
   fontFamily:'Raleway',
   color:'white',
   borderColor: 'black',
   
  },
  inputbox:{
    marginTop:30,
    marginLeft:20,
    marginRight:20,
    borderRadius: 35, 
    borderWidth: 2, 
    borderColor: 'black',
    textAlign:'auto',
    fontSize:20,
    padding:15,
     color:'black',
     backgroundColor: 'white',
    
  },
  buttons:{
    backgroundColor:'white',
marginTop:25,
marginRight:70,
marginLeft:70,
borderRadius: 30,
borderColor: 'black',
borderWidth: 2,
  },
  results:{
marginTop:90,
marginLeft:30,
fontSize:20,
fontWeight:'bold',

  }
});

export default Login;
