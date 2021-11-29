import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import TextBold from '../TextBold';

export default function (props) {

    return (
        <View style={{ width: 271, height: 128, borderRadius: 8, backgroundColor: props.background, display: "flex", alignItems: 'center' }}>
            <Image
                style={styles.homeImage}
                source={{
                    uri: props.url,
                }}
            />
            <TextBold size={18}  > {props.text}</TextBold>
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
});