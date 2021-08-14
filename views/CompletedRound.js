import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export default function CompletedRound({navigation}) {
    return (
        <View style={styles.container}>
            <Text>Round completed!</Text>
            <Button title={'Show leaderboard'} onPress={() => navigation.navigate('Leaderboard')}/>
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
