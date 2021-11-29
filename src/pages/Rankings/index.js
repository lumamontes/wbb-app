import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image, TouchableOpacity } from 'react-native';
import TextBold from '../../../src/components/TextBold'
import TextRegular from '../../../src/components/TextRegular'

export default function Rankings() {
  return (
    <View style={styles.container}>
      <TextBold size={18}>USA Today Coaches Poll</TextBold>

      <View style={styles.rankingsContainer}>
        <View>
          <TextRegular>1</TextRegular>
          <Image 
              style={styles.firstRankedLogo}
              source={{
                uri: 'https://imgur.com/VDMSnH8.jpg',
              }}
          />
          <TextRegular>South Carolina</TextRegular>
          <TextRegular>73 votes</TextRegular>
        </View>

        <Text>x</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  rankingsContainer: {
    backgroundColor: '#D1D1D1',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    width: '100%',
    height: '50%'
  },
  firstRankedLogo: {
    width: 48,
    height: 53
  }
});
