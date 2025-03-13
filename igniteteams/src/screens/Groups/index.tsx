import { Container } from './style';
import { Header } from '@components/Header';
import HighLight from '@components/Highlight';
import GroupCard from '@components/GroupCard';
import { useState } from 'react';
import { FlatList } from 'react-native';

export function Groups() {

  const [groups, setGroups] = useState<string[]>(['Galera da Rocket', 'Amigos', 'Família']);



  return (
    <Container>
      <Header />
      <HighLight title='Turmas' subtitle='Jogue com a sua turma' />

      <FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <GroupCard
            title={item} />
        )}
      />

    </Container>
  );
}
