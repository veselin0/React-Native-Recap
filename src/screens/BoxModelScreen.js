import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const BoxModelScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <View style={styles.viewOneStyle}></View>
            <View style={styles.viewTwoStyle}></View>
            <View style={styles.viewThreeStyle}></View>
        </View>
    );
}; 

const styles = StyleSheet.create({
    viewStyle: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      height: 160
    
    },
    viewOneStyle: {
        backgroundColor: 'red',
        height: 80,
        width: 80
       
    },
    viewTwoStyle: {
        backgroundColor: 'green',
        height: 80,
        width: 80,
        alignSelf: 'flex-end',

    },
    viewThreeStyle: {
        backgroundColor: 'blue',
        height: 80,
        width: 80
     
    }
});

export default BoxModelScreen;