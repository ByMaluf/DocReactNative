import { StyleSheet, Text, View } from 'react-native';
import { Container } from './style';

export function Groups() {
  return (
    <Container>
      <Text style={styles.text}>Groups</Text>
    </Container>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#FFF',
    fontSize: 32
  }
});
