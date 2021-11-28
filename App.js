import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image, TouchableOpacity } from 'react-native';
import TextBold from './src/components/TextBold'
import TextRegular from './src/components/TextRegular'
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

// react navigation installation
// yarn add @react-navigation/native
// expo install react-native-screens react-native-safe-area-context
// yarn add @react-navigation/native-stack

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.heroImage}
        source={{
          uri: 'https://i.imgur.com/vYqQYFq.png',
        }}
      />
      <TextBold size={38} > Explore information about women's basketball </TextBold>
      <TouchableOpacity style={styles.button}>
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', width: '100%' }}>
          <Text style={{ color: 'white', fontSize: 26 }}>Explore</Text>
          {/* <FontAwesome name="long-arrow-right" size={24} color="white" /> */}
          {/* <AntDesign name="swapright" size={24} color="white" /> */}
          <MaterialCommunityIcons name="chevron-triple-right" size={24} color="white" />
        </View>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'space-evenly',

  },
  heroImage: {
    width: '100%',
    height: 300,
  },
  button: {
    borderWidth: 1,
    borderColor: '#fff',
    width: 310,
    height: 60,
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  }

});
