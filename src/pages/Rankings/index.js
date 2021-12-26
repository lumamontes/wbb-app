import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image, TouchableOpacity, Button, FlatList } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TextBold from '../../../src/components/TextBold'
import TextBoldBlack from '../../../src/components/TextBoldBlack'
import RankCard from '../../components/RankCard'
import api from '../../services/api';
export default function Rankings() {
  const [rankings, setRankings] = useState({});

  const LoadRankings = async () => {    // try{
    try {
      const response = await api.get(`polls/US/2021/rankings.json?api_key=x4c6asbawqk5zw9uswgm3aqh`);
      const teste = await response.data;
      const { year, week, effective_time, rankings } = teste;
      setRankings(rankings);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    LoadRankings();
  }, [])

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
          <TextBoldBlack>{rankings[0].market} </TextBoldBlack>
          <TextBoldBlack>{rankings[0].fp_votes} Votes</TextBoldBlack>
        </View>

        <View>
          <FlatList
            data={rankings.slice(1, 25)}
            keyExtractor={ranking => String(ranking.id)}
            showsVerticalScrollIndicator={false}
            renderItem={({ item: ranking }) => 
            (
              <View>
              <RankCard team={ranking.market} back="#D8D8D8" votes={ranking.fp_votes} rank={ranking.rank} />
             </View>
            )}
          >


          </FlatList>
        </View>
      </View>
    </View >
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
