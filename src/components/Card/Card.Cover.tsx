import * as React from 'react';
import {Card} from 'react-native-paper';

const CardCover = () => (
  <Card>
    <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
  </Card>
);

export default CardCover;
