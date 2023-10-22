import * as React from 'react';
import {List, MD3Colors} from 'react-native-paper';

const ListItemsIcon = () => (
  <>
    <List.Icon color={MD3Colors.tertiary70} icon="folder" />
    <List.Icon color={MD3Colors.tertiary70} icon="equal" />
    <List.Icon color={MD3Colors.tertiary70} icon="calendar" />
  </>
);

export default ListItemsIcon;
