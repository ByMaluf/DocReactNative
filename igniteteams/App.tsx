import { StatusBar } from 'react-native';
import { Groups } from '@screens/Groups';
import { ThemeProvider } from 'styled-components';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Loading } from '@components/Loading';
import { NewGroup } from '@screens/NewGroup';
import { Players } from '@screens/Players';
import theme from './src/theme';

export default function App() {
  const [fontsLoadede] = useFonts({ Roboto_400Regular, Roboto_700Bold });
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'transparent'}
        translucent
      />
      {fontsLoadede ? <Players /> : <Loading />}
    </ThemeProvider>
  );
}

