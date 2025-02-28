import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

function Item(props: any) {
  return (
    <View
      style={{
        backgroundColor: props.bgColor,
        borderRadius: 16,
        marginTop: 16,
        marginRight: 16,
        padding: 16,
        width: '100%',
      }}
    >
      <Text style={{ fontWeight: "700" }}>{props.text}</Text>
    </View>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Minha Jornada no React Native</Text>
      <View style={styles.ItemGrid}>
        <Item text='Fundamentos do React Native' bgColor='#00ff97'></Item>
        <Item text='Expo e Expo CLI' bgColor='#00ff97'></Item>
        <Item text='Estilização com StyleSheet' bgColor='#00ff97'></Item>
        <Item text='Navegação' bgColor='#f64348'></Item>
        <Item text='ScrollView' bgColor='#f64348'></Item>
        <Item text='Periféricos' bgColor='#f64348'></Item>
        <Item text='Styled Componensts' bgColor='#f64348'></Item>
        <Item text='Temas e estilos globais' bgColor='#f64348'></Item>
        <Item text='Consumo de APIs' bgColor='#f64348'></Item>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "flex-start",
    paddingHorizontal: 16,
    paddingTop: 80,
  },
  titulo: {
    fontSize: 24,
    borderBottomColor: "#121212",
    borderBottomWidth: 1,
    color: "#121212",
    paddingBottom: 8,
  },
  ItemGrid: {
    flexDirection: 'row',
    flexWrap: "wrap",
    marginTop: 10,
  },
});
