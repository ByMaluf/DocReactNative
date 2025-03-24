import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Container, Content, Icon } from "./style";
import { Header } from "@components/Header";
import Button from "@components/Button";
import Input from "@components/Input";
import HighLight from "@components/Highlight";
import { groupCreate } from "@storage/group/groupCreate";

export function NewGroup() {

  const [group, setGroup] = useState('');
  const navigation = useNavigation();
  
  async function handleNew() {
    try {
      await groupCreate(group);
      navigation.navigate('players', { group });
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />
        <HighLight
          title="Nova Turma"
          subtitle="Crie a turma para adicionar as pessoas"
        />

        <Input
          placeholder="Nome da Turma"
          onChangeText={setGroup}
        />

        <Button
          title="Criar"
          style={{ marginTop: 20 }}
          onPress={handleNew}
        />
      </Content>
    </Container>
  );
}