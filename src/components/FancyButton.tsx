import {Button} from 'react-native-paper';

export default function FancyButton(props) {
  return (
    <Button theme={{typescale: {labelLarge: {letterSpacing: 1}}}} {...props} />
  );
}
