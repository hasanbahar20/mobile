import * as React from 'react';
import {Appbar} from 'react-native-paper';
import {Platform} from 'react-native';

const More_Icon = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

const AppbarAction = () => {
  return (
    <Appbar.Header>
      <Appbar.Content title="AppBar" />
      <Appbar.Action icon="magnify" onPress={() => {}} />
      <Appbar.Action icon={More_Icon} onPress={() => {}} />
    </Appbar.Header>
  );
};
export default AppbarAction;
