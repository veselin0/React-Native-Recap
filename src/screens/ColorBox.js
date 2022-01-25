import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import ColorSettings from '../components/ColorSettings';

const COLOR_SETTING = 15;

const ColorBox = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  return (
    <View>
      <ColorSettings
        onIncrease={() => setRed(red + COLOR_SETTING)}
        onDecrease={() => setRed(red - COLOR_SETTING)}
        color="Red"
      />
      <ColorSettings
        onIncrease={() => setGreen(green + COLOR_SETTING)}
        onDecrease={() => setGreen(green - COLOR_SETTING)}
        color="Green"
      />
      <ColorSettings
        onIncrease={() => setBlue(blue + COLOR_SETTING)}
        onDecrease={() => setBlue(blue - COLOR_SETTING)}
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
