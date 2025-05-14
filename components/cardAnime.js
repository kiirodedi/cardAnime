import { View, Text, Image } from "react-native";

export function CardAnime({
    id = "0",
    imagem,
    nome = "Não informado",
    universo = "Não informado"
}) {
    return (
        <View>
            <Text>Id: {id}</Text>
            <Image style={estilo.img} source={{ uri: imagem }}></Image>
            <Text>Nome: {nome}</Text>
            <Text>Universo: {universo}</Text>
        </View>
    )
}