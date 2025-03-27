import { StatusBar } from 'react-native';
import { View } from 'react-native';
import { useFonts, Roboto_700Bold, Roboto_400Regular } from '@expo-google-fonts/roboto'
import { GluestackUIProvider, Text, Center } from '@gluestack-ui/themed'
import { config } from './config/gluestack-ui.config'
import Loading from '@components/Loading';

export default function App() {

  const [fontsLoaded] = useFonts({ Roboto_700Bold, Roboto_400Regular })

  return (
    <GluestackUIProvider config={config}>

      {!fontsLoaded ? (
        <Center flex={1} bg='$gray700'>
          <Text>Home</Text>
        </Center>
      ) : < Loading />}
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'transparent'}
        translucent
      />

    </GluestackUIProvider>
  );
}
