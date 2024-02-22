import {View, Text} from 'react-native';
import React from 'react';
import MainStack from './src/shells/MainStack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
const App = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
    // <HomeScreen />
    // <LoginScreen />
  );
};

export default App;
