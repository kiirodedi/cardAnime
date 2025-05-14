import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { CardAnime } from "./components/cardAnime.js"
import personagens from "./data/personagens.json"

export default function App() {
  return (
    <View style={styles.container}>
      {
        personagens.map((personagem) => (
          <CardAnime
            key={personagem.id}
            id = {personagem.id}
            imagem = {personagem.imagem}
            universo = {personagem.universo}
          />
        ))
      }
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
