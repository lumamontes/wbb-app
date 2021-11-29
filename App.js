// In App.js in a new project

import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Landing from './src/pages/Landing';
import Home from './src/pages/Home';
import Rankings from './src/pages/Rankings';
// import Landing from './src/pages/Landing';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer headerShown={false} >
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen
          name="Landing"
          component={Landing}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Home" component={Home}
          // options={{
          //   headerShown: false,
          // }}
        />
        <Stack.Screen name="Rankings" component={Rankings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;