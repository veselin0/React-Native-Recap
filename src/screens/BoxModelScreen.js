import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const BoxModelScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>BoxModel Screen</Text>
        </View>
    );
}; 

const styles = StyleSheet.create({
    viewStyle: {
       borderWidth: 3,
       borderColor: 'black' 
    },
    textStyle: {
        borderWidth: 10,
       borderColor: 'red',
       margin: 20,
    }
});

export default BoxModelScreen;