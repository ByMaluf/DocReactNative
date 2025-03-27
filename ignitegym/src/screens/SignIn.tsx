import { VStack, Image, Center, Text } from "@gluestack-ui/themed";
import BackgroundImg from '@assets/background.png'
import Logo from '../assets/logo.svg'

export default function SignIn() {
  return (
    <VStack flex={1} bg="$gray700">
      <Image
        w={'$full'}
        h={624}
        source={BackgroundImg}
        defaultSource={BackgroundImg}
        alt='Pessoas Treinando'
        position="absolute"
      />

      <Center my="$24">
        <Logo />

        <Text>

        </Text>
      </Center>
    </VStack>
  );
}