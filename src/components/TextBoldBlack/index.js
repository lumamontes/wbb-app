import React from 'react';
import { Text } from 'react-native';
import AppLoading from 'expo-app-loading';

import {
    useFonts,
    Poppins_400Regular,
    Poppins_700Bold
} from '@expo-google-fonts/poppins'

export default function (props) {

    let [fontsLoaded] = useFonts({
        Poppins_700Bold,
      });
      if (!fontsLoaded) {
        return <AppLoading />;
      } else {
    return (
        <Text style={{fontFamily:'Poppins_700Bold', color: 'black' , fontSize: props.size }} {...props}>{props.children}</Text>
    )
      }
}

  
