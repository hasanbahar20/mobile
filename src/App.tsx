import * as React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import BottomTabBar from './navigation/BottomTabBar';
import AppbarAction from './components/Appbar.action';
import {Colors, View} from 'react-native-ui-lib';
const App = () => {
  return (
    <SafeAreaView>
      <StatusBar
        backgroundColor={Colors.$backgroundDarkActive}
        barStyle="dark-content"
      />
      <View height={'100%'}>
        <AppbarAction />
        <BottomTabBar />
      </View>
    </SafeAreaView>
  );
};

export default App;
