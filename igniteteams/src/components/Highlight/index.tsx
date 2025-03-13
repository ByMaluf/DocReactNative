import { Text } from "react-native";
import { Container, Title, SubTitle } from './style';

type Props = {
  title: string;
  subtitle: string;
}

export default function HighLight({ title, subtitle }: Props) {
  return (
    <Container>
      <Title>
        <Text>
          {title}
        </Text>
      </Title>
      <SubTitle>
        <Text>
          {subtitle}
        </Text>
      </SubTitle>
    </Container>
  );
}