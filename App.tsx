import * as React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import BottomTabBar from './src/navigation/BottomTabBar';
import AppbarAction from './src/components/Appbar.action';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={'#ffc486'} barStyle="dark-content" />
      <View style={{height: '100%'}}>
        <AppbarAction />
        <BottomTabBar />
      </View>
    </SafeAreaView>
  );
};

export default App;
