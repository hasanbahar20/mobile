import * as React from 'react';
import {BottomNavigation} from 'react-native-paper';
import HomeScreen from '../screens/HomeScreen';
import MainScreen from '../screens/MainScreen';
import HelpUs from '../screens/HelpUs';
import Icons from 'react-native-vector-icons';
const routes = [
  {
    key: 'home',
    title: 'Home',
    focusedIcon: 'home',
    unfocusedIcon: 'home-alert-outline',
  },
  {key: 'Search', title: 'Search', focusedIcon: 'home-search-outline'},
  {key: 'recents', title: 'Recents', focusedIcon: 'history'},
  {
    key: 'notifications',
    title: 'Settings',
    focusedIcon: 'account-settings',
    unfocusedIcon: 'account-circle-outline',
  },
  {
    key: 'helpus',
    title: 'Help',
    focusedIcon: 'help-box',
    unfocusedIcon: 'help-network',
  },
];

const BottomTabBar = () => {
  const [index, setIndex] = React.useState(0);

  const renderScene = BottomNavigation.SceneMap({
    home: () => <HomeScreen />,
    Search: () => <MainScreen />,
    recents: () => <HomeScreen />,
    notifications: () => <HomeScreen />,
    helpus: () => <HelpUs />,

  });

  return (
    <BottomNavigation
      sceneAnimationEnabled
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default BottomTabBar;
