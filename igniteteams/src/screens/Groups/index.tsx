import { Container } from './style';
import { Header } from '@components/Header';
import HighLight from '@components/Highlight';
import GroupCard from '@components/GroupCard';
import ListEmpty from '@components/ListEmpty';
import { useEffect, useState, useCallback } from 'react';
import { FlatList } from 'react-native';
import Button from '@components/Button';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { groupsGetAll } from '@storage/group/groupsGetAll';

export function Groups() {

  const [groups, setGroups] = useState<string[]>([]);
  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate('new')
    // navigate('players', { group: 'Galera do Ignite' });
  }

  async function fetchGroups() {
    try {
      const data = await groupsGetAll();
      setGroups(data);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    console.log('UseEffect executou')
    fetchGroups();
  }, [])

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
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty
            message='Que tal cadastrar a primeira turma?'
          />
        )}
        showsVerticalScrollIndicator={false}
      />

      <Button
        title='Criar nova turma'
        onPress={handleNewGroup}
      />

    </Container>
  );
}
