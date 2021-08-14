import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

/**
 * @param route
 * @param navigation
 * @constructor
 */
export default function ActiveRound({route, navigation}) {

    let {activeRoundList} = route.params;

    setTimeout(function() { navigation.navigate('CompletedRound', {activeRoundList}); }, 30 * 1000);
    
    let data = [];
    let activeLetters = activeRoundList.getActiveRound().letters
    for (let i = 0; i < activeLetters.length; i++) {
        let letter = activeLetters[i];
        data.push({id: i, value: letter})
    }
    console.log(data)
    

    console.log(activeRoundList.getActiveRound())

    const LetterItem = ({ letter }) => (
        <View>
            <Text style={styles.letter}>{letter}</Text>
        </View>
    );

    const renderLetterItem = ({ item }) => (
        <LetterItem letter={item.value} />
    );

    return (
        <View style={styles.container}>
            <View style={styles.topBoxContainer}>
                <FlatList
                    data={data}
                    renderItem={renderLetterItem}
                    keyExtractor={item => item.id}
                    numColumns={3}
                ></FlatList>
            </View>
            <View style={styles.botBoxContainer}>
            <FlatList
                    data={data}
                    renderItem={renderLetterItem}
                    keyExtractor={item => item.id}
                    numColumns={3}
                ></FlatList>
            </View>
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
    topBoxContainer: {
        borderWidth: 2,
        borderEndColor: "black",

        width:'80%',
        height: '40%',
        marginLeft: 100,
        marginRight: 100,
        alignItems: 'center',
        justifyContent: 'center',
        transform: [{ rotate: '180deg'}]
    },
    botBoxContainer: {
        borderWidth: 2,
        borderEndColor: "black",

        width:'80%',
        height: '40%',
        marginLeft: 100,
        marginRight: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    letter: {
        width: 80,
        height: 80,
        margin: 10,
        textAlign: 'center',
        paddingTop: 15,
        fontSize: 30,
        fontWeight: 'bold',
        borderColor: 'grey',
    }
});