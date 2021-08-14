import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export default function Leaderboard({navigation}) {
    return (
        <View style={styles.container}>
            <Text>Leaderboard!</Text>
            <Button title={'Start new Round'} onPress={() => navigation.navigate('Home')}/>
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
