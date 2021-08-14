import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity, KeyboardAvoidingView, FlatList, Keyboard } from 'react-native';
import RoundList from "../models/RoundList";
import { Picker, PickerItem } from 'react-native-woodpicker';

const Item = ({ name }) => (
    <View style={styles.item}>
        <Text style={styles.name}>{name}</Text>
    </View>
);

/**
 *
 * @param navigation
 * @param {RoundList} activeRoundList
 * @constructor
 */
export default function Home({route, navigation}) {
    // TODO: Get the round list from the settings.
    let activeRoundList = route.params ? route.params.activeRoundList : new RoundList(10);

    const [pickedData, setPickedData] = useState();

    const availableRoundLengths = [
        {label: "5", value: 1},
        {label: "10", value: 2},
        {label: "15", value: 3},
        {label: "20", value: 4}
    ];

    const [player, setPlayer] = useState();
    const handleAddPlayer = () => {
        Keyboard.dismiss();
        window.playerList.addPlayer(player);
        setPlayer(null);
        console.log(window.playerList.players);
    }

    const renderPlayerNameItem = ({ item }) => (
        <Item name={item.name} />
    );

    return (
        <View style={styles.container}>
            <Text>Home</Text>

            <FlatList
                data={Object.values(window.playerList.players)}
                renderItem={renderPlayerNameItem}
                keyExtractor={item => item.name}
            />
            <Text style={styles.amountLabel}>Runden:</Text>
            <Picker
                item={pickedData}
                items={availableRoundLengths}
                onItemChange={setPickedData}
                title="Wähle die Anzahl Runden"
                placeholder="Wähle die Rundenanzahl"
                isNullable
            />
            <KeyboardAvoidingView
                behavior={"padding"}
                style={styles.writeTaskWrapper}
            >
                <TextInput style={styles.input} placeholder={'Einen Spieler hinzufügen'} value={player} onChangeText={text => setPlayer(text)} />
                <TouchableOpacity onPress={() => handleAddPlayer()}>
                    <View style={styles.addWrapper}>
                        <Text style={styles.addText}>+</Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
            <KeyboardAvoidingView style={styles.buttonWrapper}>
                <TouchableOpacity onPress={() => navigation.navigate('ActiveRound', {activeRoundList})}>
                    <View style={styles.startButton}>
                        <Text style={styles.buttonText}>Start</Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    writeTaskWrapper: {
        position: 'absolute',
        bottom: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#fff',
        borderRadius: 60,
        borderColor: '#C0C0C0',
        borderWidth: 1,
        width: 250,
    },
    addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: '#fff',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1,
    },
    buttonWrapper: {
        position: 'absolute',
        bottom: 150,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    startButton: {
        width: 150,
        height: 50,
        backgroundColor: '#55AAFF',
        borderRadius: 8,
        borderColor: '#C0C0C0',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 20,
    }
});
