import { View, Text, Image, StyleSheet } from "react-native";

export function CardAnime({
    id = "0",
    imagem = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtz9VybUWGNZp8DdMSUjmu7MpR6w_ckDHFjg&s",
    nome = "Não informado",
    universo = "Não informado"
}) {
    return (
        <View style={estilo.container}>
            <View style={estilo.cardPersonagem}>
                <Image style={estilo.img} source={{ uri: imagem }}></Image>
                <Text style={estilo.nomePersonagem}>{nome}</Text>
                <Text style={estilo.universo}>{universo}</Text>
            </View>
        </View>
    )
}

const estilo = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#303030",
        alignItems: "center",
        justifyContent: "center",
    },
    img: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 10
  },

  cardPersonagem:{
    backgroundColor: "#1d1d1d",
    color: "#fff",
    padding: 10,
    marginBottom: 30,
    borderRadius: 10,
  },

  nomePersonagem:{
    color: "#fff",
    backgroundColor: "#c00277",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    margin: 5,
  },

  universo:{
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  }
});
