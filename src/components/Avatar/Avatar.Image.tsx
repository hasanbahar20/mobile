import * as React from 'react';
import {Avatar} from 'react-native-paper';

const AvatarImage = ({children}) => {
  return <Avatar.Image size={48} source={children} />;
};
export default AvatarImage;
