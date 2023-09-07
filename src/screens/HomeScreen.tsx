/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {useTheme, withTheme} from 'react-native-paper';
const HomeScreen = () => {
  const theme = useTheme();

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} />
  );
};

export default withTheme(HomeScreen);
