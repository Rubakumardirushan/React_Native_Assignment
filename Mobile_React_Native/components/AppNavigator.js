import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from '../store';

import Login from './Login';
import About from './About';
import Sort from './Sort';
import Search from './Search';
import Limit from './Limit';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Provider store={store}>
  <NavigationContainer>
    <Stack.Navigator initialRouteName="LOGIN PAGE">
      <Stack.Screen name="LOGIN PAGE" component={Login} />
      <Stack.Screen name="LIST ALL AVAILABLE PRODUCTS" component={About} />
      <Stack.Screen name="sortlist" component={Sort}/>
      <Stack.Screen name="SearchScreen" component={Search}/>
      <Stack.Screen name="LimitScreen" component={Limit}/>
    </Stack.Navigator>
  </NavigationContainer>
  </Provider>
);

export default AppNavigator;
