import * as React from 'react';
import {View} from 'react-native';
import {Checkbox} from 'react-native-paper';

const CheckboxItem = ({children}) => (
  <View>
    <Checkbox.Item label="Item" status={children} />
  </View>
);

export default CheckboxItem;
