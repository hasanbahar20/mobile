import {ActivityIndicator, MD2Colors} from 'react-native-paper';
import * as React from 'react';

const Loader = () => {
  return (
    <ActivityIndicator
      animating={true}
      color={MD2Colors.blue700}
      size="large"
    />
  );
};
export default Loader;
