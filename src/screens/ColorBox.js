import React, {useReducer} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import ColorSettings from '../components/ColorSettings';

const COLOR_SETTING = 15;

const reducer = (state, action) => {
    switch (action.colorToChange) {
        case 'red':
            return {...state, red: state.red + action.amount};
        case 'green':
            return {...state, green: state.green + action.amount};
        case 'blue':
            return {...state, blue: state.blue + action.amount};
        default: 
            return state;           
    }
};

const ColorBox = () => {
    
    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});
    const {red, green, blue} = state;
    
  return (
    <View>
      <ColorSettings
        onIncrease={() => dispatch({colorToChange: 'red', amount: COLOR_SETTING})}
        onDecrease={() => dispatch({colorToChange: 'red', amount: -1 * COLOR_SETTING})}
        color="Red"
      />
      <ColorSettings
        onIncrease={() => dispatch({colorToChange: 'green', amount: COLOR_SETTING})}
        onDecrease={() => dispatch({colorToChange: 'green', amount: -1 * COLOR_SETTING})}
        color="Green"
      />
      <ColorSettings
        onIncrease={() => dispatch({colorToChange: 'blue', amount: COLOR_SETTING})}
        onDecrease={() => dispatch({colorToChange: 'blue', amount: -1 * COLOR_SETTING})}
        color="Blue"
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorBox;
