import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image, TouchableOpacity, Button, FlatList, ActivityIndicator } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TextBold from '../../../src/components/TextBold'
import TextBoldBlack from '../../../src/components/TextBoldBlack'
import RankCard from '../../components/RankCard'
import api from '../../services/api';
export default function Rankings() {
  const [rankings, setRankings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [year, setYear] = useState(2022);
  const LoadRankings = async () => {    // try{
    try {
      const response = await api.get(`polls/AP/${year}/rankings.json?api_key=tskk7v3wq7cnp6dhjafgp3h4`);
      setRankings(response.data);
    } catch (err) {
      console.log(err);
      setError(err)
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    LoadRankings();
  }, [year])

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#B3384D" />
      </View>
    )
  }

  if (error) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#B3384D" />
      </View>
    )
  }
  if (rankings?.rankings?.length > 0) {
    return (
      <View style={styles.container}>
        <TextBold size={18}>USA Today Coaches Poll</TextBold>
        <View style={styles.rankingsContainer}>
          <View>
            <FlatList
              data={rankings.rankings}
              keyExtractor={ranking => String(ranking.id)}
              showsVerticalScrollIndicator={false}
              renderItem={({item, index}) =>
              (
                <View key={index}>
                  <RankCard team={item.market} back="#D8D8D8" votes={item.fp_votes} rank={item.rank} />
                </View>
              )
              }
            >

            </FlatList>
          </View>
        </View>
      </View >
    );
  }


  return (
    <View style={styles.container}>
        <Text style={{"color" : "white"}}>No results found!</Text>
    </View>
  )
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
