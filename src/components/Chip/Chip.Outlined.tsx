import * as React from 'react';
import {Chip} from 'react-native-paper';

const ChipOutlined = () => (
  <Chip icon="information" onPress={() => console.log('Pressed')}>
    Example Chip
  </Chip>
);

export default ChipOutlined;
