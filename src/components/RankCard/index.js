import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import TextBoldBlack from '../TextBoldBlack';
import TextBold from '../TextBold';

export default function (props) {
    return (
        <View style={{
            width: '100%', height:
                50, backgroundColor: props.back, display: "flex", flexDirection: "row", alignItems: 'center',
                justifyContent: 'space-between',padding: 10
        }}>
            <View style={styles.numberContainer}>
                <TextBold> {props.rank}</TextBold>
            </View>
            <TextBoldBlack size={18}  > {props.team}</TextBoldBlack>
            <TextBoldBlack size={18}  > {props.votes} votes</TextBoldBlack>
        </View>
    )
}
const styles = StyleSheet.create({
    homeImage: {
        width: 271,
        height: 93,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
    },
    numberContainer: {
        backgroundColor: '#B3384D',
        width: 40,
        height: 35,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    }
});