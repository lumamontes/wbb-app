import React, { useState } from 'react';
import { StyleSheet, View, TouchableHighlight, Image, Pressable, Modal, Text } from 'react-native';
import TextBold from '../../../src/components/TextBold'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import DailyCard from '../../components/DailyCard';
import Icon from '../../components/Icon';

export default function dailySchedule() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              style={[styles.button]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Ionicons name="close-outline" size={20} color={'white'} />
            </Pressable>
            <View style={styles.iconsContainer}>
              <Icon border="#8FFB8D" help="Game Finished!">
                <Ionicons name="checkmark-circle-outline" size={20} color={'#000000'} />
              </Icon>
              <Icon border="#F9FB8D" help="Game in progress">
                <Ionicons name="time-outline" size={20} color={'#000000'} />
              </Icon>
              <Icon border="#8DCDFB" help="Game not started yet">
                <MaterialCommunityIcons name="dots-horizontal-circle-outline" color={'#000000'} size={20} />
              </Icon>
              <Icon border="#FB8D8D" help="Game canceled :(">
                <MaterialCommunityIcons name="cancel" color={'#000000'} size={20} />
              </Icon>
            </View>
          </View>
        </View>
      </Modal>

      <View style={{ flexDirection: 'row', width: '90%', justifyContent: 'space-between', flex: 0.1 }}>
        <TextBold size={24} > November 27 </TextBold>
        <Pressable onPress={() => setModalVisible(true)}>
          <Ionicons name="help-circle-outline" size={40} color={'#F8F8F8'} />
        </Pressable>
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

  }, centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    width: 268,
    height: 320,
    backgroundColor: '#353535',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    alignSelf: 'flex-end'
  },
  iconsContainer: {
    width: '90%',
    height: '60%',
    justifyContent: 'space-between',
    marginTop: 22
  }

});
