import * as React from 'react';
import {Text, TouchableRipple} from 'react-native-paper';

const Ripple = () => (
  <TouchableRipple
    onPress={() => console.log('Pressed')}
    rippleColor="rgba(0, 0, 0, .32)">
    <Text>Press anywhere</Text>
  </TouchableRipple>
);

export default Ripple;
