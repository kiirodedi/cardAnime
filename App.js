import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import { ScrollView } from 'react-native-web';

import { CardAnime } from "./components/cardAnime.js"
import personagens from "./data/personagens.json"

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
    <View style={styles.container}>
        <Text style={styles.titulo}>Personagens de anime</Text>
        {personagens.map((personagem) => (
          <CardAnime
            key={personagem.id}
            id={personagem.id}
            imagem={personagem.imagem}
            nome={personagem.nome}
            universo={personagem.universo}
          />
          ))}
      <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303030',
    alignItems: 'center',
    width: "100%",
  },

  titulo: {
    backgroundColor: "#c00277",
    width: "100%",
    height: 50,
    textAlign: "center",
    marginBottom: 20,
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
  },

  scrollContent: {
  alignItems: 'center',
  paddingBottom: 30,
},
});
