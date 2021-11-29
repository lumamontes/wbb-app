import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image, TouchableOpacity } from 'react-native';
import TextBold from '../../../src/components/TextBold'

import HomeCard from '../../components/HomeCard';
import { Picker } from '@react-native-picker/picker';

const leagues = ['Ncaaw'];

export default function Home({ navigation }) {
  const [league, setLeague] = useState();
  const handleValueChange = (itemValue, itemIndex) => setLeague(itemValue)

  return (
    <View style={styles.container}>
      <Picker
        mode={'dropdown'}
        dropdownIconColor={'white'}
        selectedValue={league}
        style={styles.pickerStyles}
        onValueChange={handleValueChange}>
        {
          leagues.map(league => <Picker.Item key={league} label={league} value={league} />)
        }
      </Picker>
      <HomeCard background='#B3384D' url='https://imgur.com/3AYcMVm.jpg' text='Daily Schedule' />
      <HomeCard background='#E38B99' url='https://imgur.com/ABqirT5.jpg' text='Season Schedule' />
      <HomeCard background='#5E1D28' url='https://imgur.com/zX2Fgvz.jpg' text='Ranking' />
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
  pickerStyles: {
    width: '30%',
    backgroundColor: 'transparent',
    color: 'white'
  }

});
