import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/views/HomeScreen';
import DetailsScreen from './src/views/DetailsScreen';
import CardScreen from './src/views/CardScreen';

import { StatusBar } from 'react-native';
import COLOR from './src/const/colour';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLOR.white} barStyle="dark-content"/>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen  name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        <Stack.Screen name="CardScreen" component={CardScreen} />        
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;