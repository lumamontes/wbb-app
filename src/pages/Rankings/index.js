import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image, TouchableOpacity } from 'react-native';
import TextBold from '../../../src/components/TextBold'


export default function Rankings() {
  return (
    <View style={styles.container}>
      <TextBold size={38} > Rankings </TextBold>
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
