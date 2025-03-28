import { VStack, Image, Center, Text, Heading } from "@gluestack-ui/themed";
import BackgroundImg from '@assets/background.png'
import Logo from '../assets/logo.svg'
import { Input } from "@components/input";

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

      <VStack flex={1} px={"$10"} pb="$16">

        <Center my="$24">
          <Logo />

          <Text>
            Treine sua mente e o seu corpo.
          </Text>
        </Center>


        <Center gap='$2'>
          <Heading color="$gray100">Acesse a conta</Heading>
          <Input placeholder="E-mail" />
          <Input placeholder="Senha" />
        </Center>
      </VStack>
    </VStack>
  );
}