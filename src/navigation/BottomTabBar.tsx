import * as React from 'react';
import {BottomNavigation} from 'react-native-paper';
import HomeScreen from '../screens/HomeScreen';
import MainScreen from '../screens/MainScreen';
import HelpUs from '../screens/HelpUs';

const routes = [
  {
    key: 'music',
    title: 'Favorites',
    focusedIcon: 'heart',
    unfocusedIcon: 'heart-outline',
  },
  {key: 'albums', title: 'Albums', focusedIcon: 'album'},
  {key: 'recents', title: 'Recents', focusedIcon: 'history'},
  {
    key: 'notifications',
    title: 'Notifications',
    focusedIcon: 'bell',
    unfocusedIcon: 'bell-outline',
  },
  {
    key: 'helpus',
    title: 'Help',
    focusedIcon: 'bell',
    unfocusedIcon: 'bell-outline',
  },
];

const BottomTabBar = () => {
  const [index, setIndex] = React.useState(0);

  const renderScene = BottomNavigation.SceneMap({
    music: () => <HomeScreen />,
    albums: () => <MainScreen />,
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
