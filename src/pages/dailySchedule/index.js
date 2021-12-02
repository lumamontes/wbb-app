import React from 'react';
import { StyleSheet, View, TouchableHighlight, Image, TouchableOpacity } from 'react-native';
import TextBold from '../../../src/components/TextBold'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import DailyCard from '../../components/DailyCard';

export default function dailySchedule() {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', width: '90%', justifyContent: 'space-between', flex: 0.1 }}>
        <TextBold size={24} > November 27 </TextBold>
        <TouchableOpacity>
          <Ionicons name="help-circle-outline" size={40} color={'#F8F8F8'} />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 0.9, justifyContent: 'space-around' }}>
        <DailyCard border="#8FFB8D" time="14:00pm" teams="RUTGER x UMASS" channel="Espn+" >
          <Ionicons name="checkmark-circle-outline" size={20} color={'#000000'} />
        </DailyCard>

        <DailyCard border="#8FFB8D" time="14:00pm" teams="RUTGER x UMASS" channel="Espn+" >
          <Ionicons name="checkmark-circle-outline" size={20} color={'#000000'} />
        </DailyCard>

        <DailyCard border="#F9FB8D" time="14:00pm" teams="RUTGER x UMASS" channel="Espn+" >
          <Ionicons name="time-outline" size={20} color={'#000000'} />
        </DailyCard>

        <DailyCard border="#8DCDFB" time="14:00pm" teams="RUTGER x UMASS" channel="Espn+" >
          <MaterialCommunityIcons name="dots-horizontal-circle-outline" color={'#000000'} size={20} />
        </DailyCard>

        <DailyCard border="#FB8D8D" time="14:00pm" teams="RUTGER x UMASS" channel="Espn+" >
          <MaterialCommunityIcons name="cancel" color={'#000000'} size={20} />
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
    justifyContent: 'space-around',
    padding: 10

  },

});
