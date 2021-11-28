import React from 'react';
import { Text } from 'react-native';
import AppLoading from 'expo-app-loading';

import {
    useFonts,
    Poppins_400Regular
} from '@expo-google-fonts/poppins'

export default function (props) {
    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
      });
      if (!fontsLoaded) {
        return <AppLoading />;
      } else {
    return (
        <Text style={{fontFamily:'Poppins_400Regular', color: 'white', fontSize: props.size }} {...props}>{props.children}</Text>
    )
      }
}

