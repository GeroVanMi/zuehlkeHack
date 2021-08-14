import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from '@react-navigation/stack';
import ActiveRound from "./views/ActiveRound";
import CompletedRound from "./views/CompletedRound";
import Leaderboard from "./views/Leaderboard";
import Home from "./views/Home";
import PlayerList from "./models/PlayerList";

const Stack = createStackNavigator();

// noinspection JSUnusedGlobalSymbols // This is the main entry point for the App.
export default function App() {

    window.playerList = new PlayerList();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} options={{title: 'Welcome'}} />
                <Stack.Screen name="ActiveRound" component={ActiveRound}/>
                <Stack.Screen name="CompletedRound" component={CompletedRound}/>
                <Stack.Screen name="Leaderboard" component={Leaderboard}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// });
