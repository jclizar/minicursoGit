/* eslint-disable prettier/prettier */

import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native';
import salusIcon from './images/salus.png';


const App: () => React$Node = () => {


    return (
        <View>
            <View style={usp.header}>
                <Image style={usp.image} source={salusIcon}></Image>
            </View>
            <View>
                <Text style={usp.sectionTitle} >Bem vindos</Text>
                <TouchableOpacity>
                    <Text>Oficina de React Native</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const usp = StyleSheet.create({
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'red',
    },
    header: {
        backgroundColor: 'gray',
    },
    image: {
        width: 130,
        height: 50,
    }
});

export default App;
