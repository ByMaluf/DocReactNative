import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Participant } from '../../components/Participant';

export default function Home() {

  function handleParticipantAdd() {
    console.log('Vc clicou no botão de adicionar');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do Evento
      </Text>
      <Text style={styles.eventDate}>
        Sexta, 4 de Novembro de 2025.
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Nome do Participante'
          placeholderTextColor="#6B6B6B"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <Participant />
      <Participant />
      <Participant />
      <Participant />
    </View>
  );
}