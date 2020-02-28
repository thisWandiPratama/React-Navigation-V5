import 'react-native-gesture-handler';

import * as React from 'react';
 
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

import Screen1 from './src/screen/screen1';

import Screen2 from './src/screen/screen2';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Screen1" component={Screen1} />

        <Stack.Screen name="Screen2" component={Screen2} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;