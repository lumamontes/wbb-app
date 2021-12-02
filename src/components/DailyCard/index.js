import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import TextRegular from '../TextRegular';

export default function (props) {
    return (
        <View style={{display: 'flex', width: 316}}>
            <View style={{ borderRadius: 50, padding: 2, width: 24, height: 24, backgroundColor: props.border, alignItems: 'center', justifyContent: 'center', zIndex: 2, position: 'absolute', alignSelf: 'flex-end', marginTop: -12}}>
                {props.children}
            </View>
            <View style={{
                width: 307, height:
                    81, backgroundColor: "#232323", display: "flex", flexDirection: "row", alignItems: 'center',
                justifyContent: 'space-around', borderWidth: 1, borderColor: props.border, borderRadius: 8, zIndex: 1,
                position: 'relative'
            }}>
                <TextRegular size={14}> {props.time}</TextRegular>
                <TextRegular size={14}> {props.teams}</TextRegular>
                <TextRegular size={14}> {props.channel} votes</TextRegular>
            </View>
        </View>
    )
}