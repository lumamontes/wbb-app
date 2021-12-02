import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import TextRegular from '../TextRegular';

export default function (props) {
    return (
        <View style={{flexDirection: "row"}}>
            <View style={{ marginRight: 8, borderRadius: 50, padding: 2, width: 24, height: 24, backgroundColor: props.border, alignItems: 'center', justifyContent: 'center'}}>
                {props.children}
            </View>
             <TextRegular>{props.help}</TextRegular>
        </View>
    )
}