import { Container, Form } from "./style";
import { Header } from "@components/Header";
import { ButtonIcon } from "@components/ButtonIcon";
import HighLight from "@components/Highlight";
import Input from "@components/Input";

export function Players() {
  return (
    <Container>
      <Header showBackButton />
      <HighLight
        title={'Nome da turma'}
        subtitle={'Adicione a galera e separe os times'}
      />

      <Form>
        <Input
          placeholder='Nome da Pessoas'
          autoCorrect={false}
        />
        <ButtonIcon icon={`add`} />
      </Form>
    </Container>
  );
}