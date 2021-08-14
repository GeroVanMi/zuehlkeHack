import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

/**
 * @param route
 * @param navigation
 * @constructor
 */
export default function CompletedRound({route, navigation}) {

    let {activeRoundList} = route.params;

    return (
        <View style={styles.container}>
            <Text>Round completed!</Text>
            <Button title={'Show leaderboard'} onPress={() => navigation.navigate('Leaderboard', {activeRoundList})}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
