import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export default function ActiveRound({navigation}) {
    return (
        <View style={styles.container}>
            <Text>Round ongoing!</Text>
            <Button title={'Stop round'} onPress={() => navigation.navigate('CompletedRound')}/>
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
