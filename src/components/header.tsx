/* eslint-disable react-native/no-inline-styles */
import { DarkTheme } from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const WavyHeader = () => {
  return (
    <View>
      <Svg height="500" width="100%" style={{position: 'absolute', top: 0}}>
        <Path
          d="M0,0 L0,64 C150,200 300,30 450,128 L450,0 Z"
          fill={DarkTheme.colors.border}
          strokeWidth="10"
        />
      </Svg>
    </View>
  );
};

export default WavyHeader;
