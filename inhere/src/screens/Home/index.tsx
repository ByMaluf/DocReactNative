import { Text, TextInput, View, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { styles } from './styles';
import { Participant } from '../../components/Participant';

export default function Home() {

  const participants = ['Brenno', 'Vini', 'Diego', 'Biro', 'Ana', 'Isa', 'Jack', 'Brunno', 'Brunna'];

  function handleParticipantAdd() {
    console.log('Adicionou um participante');
  }

  function handleParticipantRemove(name: string) {
    console.log(`Removeu participante ${name}`)
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

      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) =>
          <Participant
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
          </Text>
        )}
      />

      {/* <ScrollView showsVerticalScrollIndicator={false}>
        {
          participants.map((participant, index) => (
            <Participant
              key={participant}
              name={participant}
              onRemove={() => handleParticipantRemove(participant)}
            />
          ))
        }
      </ScrollView> */}
    </View>
  );
}