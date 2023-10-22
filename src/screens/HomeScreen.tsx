/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {View, Text} from 'react-native';
import {useTheme} from 'react-native-paper';

const HomeScreen = () => {
  const theme = useTheme();
  return (
    <View
      style={{
        backgroundColor: theme.colors.background,
        padding: 16,
        height: '100%',
      }}>
      <View
        style={{
          backgroundColor: theme.colors.error,
          height: 50,
          justifyContent: 'center',
        }}>
        <Text style={{color: theme.colors.tertiary}}>Home Screen</Text>
      </View>
      <View
        style={{
          backgroundColor: theme.colors.error,
          height: 50,
          justifyContent: 'center',
        }}>
        <Text style={{color: theme.colors.scrim}}>Home Screen</Text>
      </View>
      <View
        style={{
          backgroundColor: theme.colors.error,
          height: 50,
          justifyContent: 'center',
        }}>
        <Text style={{color: theme.colors.surfaceVariant}}>Home Screen</Text>
      </View>
      <View
        style={{
          backgroundColor: theme.colors.error,
          height: 50,
          justifyContent: 'center',
        }}>
        <Text style={{color: theme.colors.outline}}>Home Screen</Text>
      </View>
    </View>
  );
};

export default HomeScreen;
