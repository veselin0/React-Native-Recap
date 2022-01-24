import React from 'react';

import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
    const friends = [
        { name: "friend_1", age: 28},
        { name: "friend_2", age: 29},
        { name: "friend_3", age: 38},
        { name: "friend_4", age: 48},
        { name: "friend_5", age: 27},
        { name: "friend_6", age: 49},
        { name: "friend_7", age: 18},
        { name: "friend_8", age: 200},
        { name: "friend_9", age: 80},
        { name: "friend_10", age: 218},
        { name: "friend_11", age: 26},
    ];
    return (
        <FlatList
            horizontal={false}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            keyExtractor={(friend) => friend.name}
            data={friends}
            renderItem={({ item }) => {
                return <Text style={styles.textStyle} >{item.name} - Age {item.age}</Text>;
            }}
        />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;
