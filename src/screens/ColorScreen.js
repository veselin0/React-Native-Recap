import React, {useState} from 'react';
import {View, Button, StyleSheet} from 'react-native';

const ColorScreen = () => {
    const [colors, setColors] = useState([]);

    return (
        <View>
            <Button title="Add a Color" onPress={() => {
                setColors([...colors, randomRgb()]);
            }} />
            <View style={{height: 100, width: 100, backgroundColor: randomRgb() }} />
        </View>
    );
};

const randomRgb = () => {
    const red = Math.round(Math.random() * 256);
    const green = Math.round(Math.random() * 256);
    const blue = Math.round(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({});

export default ColorScreen;