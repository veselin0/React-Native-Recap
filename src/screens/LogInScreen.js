import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

const LogInScreen = () => {
  const [pass, setPass] = useState('');

  return (
    <View>
      <Text style={styles.text}>Enter Password:</Text>
      <TextInput
        style={styles.input}
        autoCorrect={false}
        autoCapitalize="none"
        value={pass}
        onChangeText={newPass => setPass(newPass)}
      />

      {pass.length < 5 ? (
        <Text style={styles.text}>
          Password must be longer than 5 characters
        </Text>)
       : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 10,
    borderColor: 'black',
    borderWidth: 2,
  },
  text: {
    margin: 10,
  },
});

export default LogInScreen;
