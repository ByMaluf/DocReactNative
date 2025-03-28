import { VStack, Image, Center, Text, Heading, ScrollView } from "@gluestack-ui/themed";
import BackgroundImg from '@assets/background.png'
import Logo from '../assets/logo.svg'
import { Input } from "@components/input";
import Button from "@components/Button";

export default function SignUp() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
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

            <Text color={'$gray100'}>
              Treine sua mente e o seu corpo.
            </Text>
          </Center>


          <Center gap='$2' flex={1}>
            <Heading color="$gray100">Crie sua Conta</Heading>


            <Input placeholder="Nome" />

            <Input
              placeholder="E-mail"
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <Input
              placeholder="Senha"
              secureTextEntry
            />

            <Button title="Criar e acessar" />
          </Center>

          <Button title="Voltar para o login" variant="outline" mt={'$12'} />
        </VStack>
      </VStack>
    </ScrollView>
  );
}