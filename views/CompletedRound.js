import React from 'react';
import { Button, StyleSheet, Text, View, FlatList } from 'react-native';

const Item = ({ word }) => (
    <View style={styles.item}>
        <Text style={styles.word}>{word}</Text>
    </View>
);



/**
 * @param route
 * @param navigation
 * @constructor
 */
export default function CompletedRound({ route, navigation }) {



    let { activeRoundList } = route.params;
    console.log(activeRoundList.rounds[activeRoundList.currentRoundIndex].words);

    const wordsSorted = Object.values(activeRoundList.rounds[activeRoundList.currentRoundIndex].words).sort((a, b) => b.length - a.length);
    console.log(wordsSorted);
    const renderWordItem = ({ item }) => (
        <Item word={item} />
    );
    const wordsWithPoints = [];
    for (let index in wordsSorted) {
        console.log("Word: " + wordsSorted[index]);
        let wordCount = wordsSorted[index].length;
        let newWord = wordsSorted[index] + " " + wordCount + "pt.";
        wordsWithPoints.push(newWord);
    }
    console.log(wordsWithPoints);

    return (
        <View style={styles.container}>
            <Text>Round completed!</Text>
            <FlatList
                data={wordsWithPoints}
                renderItem={renderWordItem}
                keyExtractor={item => item}
                style={styles.wordList}
            />
            <Button title={'Show leaderboard'} onPress={() => navigation.navigate('Leaderboard', { activeRoundList })} />
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
    wordList: {
        marginTop: 80,
        borderColor: '#777',
        borderWidth: 2,
        borderRadius: 15,
        minWidth: 200,
        height: 200,
    },
    item: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 10,
        margin: 10,
        height: 40,
        backgroundColor: '#CCC',

    },
    word: {
        color: '#000',
    }
});
