import * as React from 'react';
import MainApp from './src/screens/MainApp';
import {useTheme} from 'react-native-paper';
export default function Main() {
  const theme = useTheme();
  return (
    // <PaperProvider theme={theme}>
    <MainApp theme={theme} />
    // </PaperProvider>
  );
}
