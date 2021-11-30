import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TextBold from '../../../src/components/TextBold'
import TextBoldBlack from '../../../src/components/TextBoldBlack'
import RankCard from '../../components/RankCard'

export default function Rankings() {
  return (
    <View style={styles.container}>
      <TextBold size={18}>USA Today Coaches Poll</TextBold>

      <View style={styles.rankingsContainer}>
        <View style={styles.firstContent}>
          <TextBoldBlack>1
              {/* <MaterialCommunityIcons name="crown" color='#B3384D' size={50}  /> */}
          </TextBoldBlack>
          <Image
            style={styles.firstRankedLogo}
            source={{
              uri: 'https://imgur.com/VDMSnH8.jpg',
            }}
          />
          <TextBoldBlack>South Carolina</TextBoldBlack>
          <TextBoldBlack>73 votes</TextBoldBlack>
        </View>

        <View>
          <RankCard team="South Carolina" back="#D8D8D8" votes="13" rank="2"/>
          <RankCard team="South Carolina" back="#D1D1D1" votes="13" rank="3"/>
          <RankCard team="South Carolina" back="#D8D8D8" votes="13" rank="4"/>
          <RankCard team="South Carolina" back="#D1D1D1" votes="13" rank="5" />
          <RankCard team="South Carolina" back="#D8D8D8" votes="13" rank="6"/>
          <RankCard team="South Carolina" back="#D1D1D1" votes="13" rank="7"/>
          <RankCard team="South Carolina" back="#D8D8D8" votes="13" rank="8"/>
          <RankCard team="South Carolina" back="#D1D1D1" votes="13" rank="9"/>
          <RankCard team="South Carolina" back="#D8D8D8" votes="13" rank="10"/>
          <RankCard team="South Carolina" back="#D1D1D1" votes="13" rank="11"/>
          <RankCard team="South Carolina" back="#D8D8D8" votes="13" rank="12"/>
          <RankCard team="South Carolina" back="#D1D1D1" votes="13" rank="13"/>
          <RankCard team="South Carolina" back="#D8D8D8" votes="13" rank="14"/>
          <RankCard team="South Carolina" back="#D1D1D1" votes="13" rank="15"/>
          <RankCard team="South Carolina" back="#D8D8D8" votes="13" rank="6"/>
          <RankCard team="South Carolina" back="#D1D1D1" votes="13" rank="6"/>
          <RankCard team="South Carolina" back="#D8D8D8" votes="13" rank="6"/>
        </View>
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
  },
  rankingsContainer: {
    flex: 1,
    alignItems: 'center',
    
    backgroundColor: '#D1D1D1',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    width: '100%'
  },
  firstRankedLogo: {
    width: 48,
    height: 53
  },
  firstContent: {
    display: 'flex',
    alignItems: 'center'
  }
});
