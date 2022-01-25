import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import ColorSettings from '../components/ColorSettings';

const COLOR_SETTING = 15;

const ColorBox = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const setColor = (color, change) => {
    switch (color) {
      case 'red':
        red + change > 255 || red + change < 0 
            ? null 
            : setRed(red + change);
        break;
      case 'green':
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
        break;
      case 'blue':
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
        break;
      default: 
        break;  
    }
  };

  return (
    <View>
      <ColorSettings
        onIncrease={() => setColor('red', + COLOR_SETTING)}
        onDecrease={() => setColor('red', -1 * COLOR_SETTING)}
        color="Red"
      />
      <ColorSettings
        onIncrease={() => setColor('green', + COLOR_SETTING)}
        onDecrease={() => setColor('green', -1 * COLOR_SETTING)}
        color="Green"
      />
      <ColorSettings
        onIncrease={() => setColor('blue', + COLOR_SETTING)}
        onDecrease={() => setColor('blue', -1 * COLOR_SETTING)}
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
