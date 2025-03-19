import { useState } from "react";
import { FlatList } from "react-native";
import { Container, Form, HeaderList, NumbersOfPlayers } from "./style";
import { Header } from "@components/Header";
import { Filter } from "@components/Filter";
import { ButtonIcon } from "@components/ButtonIcon";
import HighLight from "@components/Highlight";
import Input from "@components/Input";
import { PlayerCard } from "@components/PlayerCard";
import ListEmpty from "@components/ListEmpty";
import Button from "@components/Button";

export function Players() {

  const [team, setTeam] = useState('Time A');
  const [players, setPlayers] = useState([]);

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

      <HeaderList>
        <FlatList
          data={['Time A', 'Time B']}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />

        <NumbersOfPlayers>
          {players.length}
        </NumbersOfPlayers>
      </HeaderList>

      <FlatList
        data={players}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <PlayerCard
            name={item}
            onRemove={() => { }}
          />
        )}
        ListEmptyComponent={() => (
          <ListEmpty
            message='Não há pessoas nesse time.'
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={players.length === 0 ? { flex: 1 } : { paddingBottom: 100 }}
      />

      <Button
        title="Remover Turma"
        type="SECONDARY"
      />
    </Container>
  );
}