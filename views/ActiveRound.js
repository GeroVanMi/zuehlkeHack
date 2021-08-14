import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

/**
 * @param route
 * @param navigation
 * @constructor
 */
export default function ActiveRound({route, navigation}) {

    let {activeRoundList} = route.params;

    return (
        <View style={styles.container}>
            <Text>Round ongoing!</Text>
            <Button title={'Stop round'} onPress={() => navigation.navigate('CompletedRound', {activeRoundList})}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',        alignItems: 'center',
        justifyContent: 'center',
    },
});
