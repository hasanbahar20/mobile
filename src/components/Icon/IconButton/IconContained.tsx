import * as React from 'react';
import {IconButton, MD3Colors} from 'react-native-paper';

const IconContained = () => (
  <IconButton
    icon="camera"
    iconColor={MD3Colors.error50}
    size={20}
    onPress={() => console.log('Pressed')}
  />
);

export default IconContained;
