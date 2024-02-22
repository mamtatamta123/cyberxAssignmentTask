import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import BottomTabStack from './BottomTabStack';
import HomeScreen from '../screens/HomeScreen';

const MainStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="BottomTabStack" component={BottomTabStack} />
    </Stack.Navigator>
  );
};

export default MainStack;
