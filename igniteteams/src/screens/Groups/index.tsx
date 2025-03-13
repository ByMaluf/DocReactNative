import { Text } from 'react-native';
import { Container } from './style';
import { Header } from '@components/Header';
import HighLight from '@components/Highlight';
import GroupCard from '@components/GroupCard';

export function Groups() {
  return (
    <Container>
      <Header />
      <HighLight title='Turmas' subtitle='Jogue com a sua turma' />
      <GroupCard title='Galera do Ignite' onPress={() => ''} />
    </Container>
  );
}
