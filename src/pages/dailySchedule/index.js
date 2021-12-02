import React from 'react';
import { StyleSheet, View, TouchableHighlight, Image, TouchableOpacity } from 'react-native';
import TextBold from '../../../src/components/TextBold'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import DailyCard from '../../components/DailyCard';

export default function dailySchedule() {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', width: '90%', justifyContent: 'space-between', flex: 0.2 }}>
        <TextBold size={24} > November 27 </TextBold>
        <TouchableOpacity>
          <Ionicons name="help-circle-outline" size={40} color={'#F8F8F8'} />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 0.7 }}>
        <DailyCard border="#8FFB8D" time="14:00pm" teams="RUTGER x UMASS" channel="Espn+" >
          <Ionicons name="checkmark-circle-outline" size={20} color={'#000000'} />
        </DailyCard>

        <DailyCard border="#8FFB8D" time="14:00pm" teams="RUTGER x UMASS" channel="Espn+" >
          <Ionicons name="checkmark-circle-outline" size={20} color={'#000000'} />
        </DailyCard>

        <DailyCard border="#8FFB8D" time="14:00pm" teams="RUTGER x UMASS" channel="Espn+" >
          <Ionicons name="checkmark-circle-outline" size={20} color={'#000000'} />
        </DailyCard>

        <DailyCard border="#8FFB8D" time="14:00pm" teams="RUTGER x UMASS" channel="Espn+" >
          <Ionicons name="checkmark-circle-outline" size={20} color={'#000000'} />
        </DailyCard>
        
      </View>
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
