import React from 'react';
import {Text, StyleSheet, View, Button, TouchableOpacity} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>Hi, Gocho!</Text>
      <Button
        title="Go to Components Demo"
        onPress={() => navigation.navigate('Components')}
      />
      <Button
        title="Go to List Demo"
        onPress={() => navigation.navigate('List')}
      />
      <Button
        title="Go to Image Demo"
        onPress={() => navigation.navigate('Image')}
      />
      <Button
        title="Go to Counter Demo"
        onPress={() => navigation.navigate('Counter')}
      />
      <Button
        title="Go to Color Demo"
        onPress={() => navigation.navigate('Colors')}
      />
      <Button
        title="Go to Color Box Demo"
        onPress={() => navigation.navigate('SetColor')}
      />
      <Button
        title="Go to Text Input Demo"
        onPress={() => navigation.navigate('Text')}
      />
      <Button
        title="Go to Log In Demo"
        onPress={() => navigation.navigate('LogIn')}
      />
      <Button
        title="Go to Box Model Demo"
        onPress={() => navigation.navigate('BoxModel')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
