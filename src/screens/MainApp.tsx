/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SettingsScreen from './SettingsScreen';
import HomeScreen from './HomeScreen';
import SummaryScreen from './SummaryScreen';
import React from 'react';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // İcon setini belirttik
import FavoritiesScreen from './FavoritiesScreen';
import {useTheme, withTheme} from 'react-native-paper';

const Tab = createBottomTabNavigator();

const MainApp = () => {
  const theme = useTheme();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: theme.colors.backdrop,
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            color = theme.colors.backdrop;
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'cogs' : 'cogs';
            } else if (route.name === 'Favori') {
              iconName = focused ? 'heart' : 'heart';
            } else if (route.name === 'Summary') {
              iconName = focused ? 'navicon' : 'navicon';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarLabel: ({color}) => {
            return (
              <Text style={{fontFamily: 'sans-serif-medium', color}}>
                {route.name}
              </Text>
            );
          },
        })}
        initialRouteName="Home">
        <Tab.Screen
          options={{headerShown: false}}
          name="Summary"
          component={SummaryScreen}
        />
        <Tab.Screen
          options={{headerShown: false}}
          name="Home"
          component={HomeScreen}
        />
        <Tab.Screen
          options={{headerShown: false}}
          name="Favori"
          component={FavoritiesScreen}
        />
        <Tab.Screen
          options={{headerShown: false}}
          name="Settings"
          component={SettingsScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default withTheme(MainApp);
