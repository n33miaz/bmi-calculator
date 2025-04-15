import { Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { cores } from "../constants/Cores";

interface Props {
  texto: string;
  onPress?: () => void; // Tornando onPress opcional, pois o Link o controla
}

const { width } = Dimensions.get('window');

export function BotaoCustomizado({ texto, onPress }: Props) {
  return (
    <TouchableOpacity style={estilos.botao} onPress={onPress}>
      <Text style={estilos.texto}>{texto}</Text>
    </TouchableOpacity>
  );
}

const estilos = StyleSheet.create({
  botao: {
    backgroundColor: cores.azul,
    paddingVertical: 15, // Um pouco mais de padding
    paddingHorizontal: 20,
    borderRadius: 10, // Menos arredondado
    marginTop: 25, // Mais espaço acima
    marginBottom: 10, // Espaço abaixo
    alignItems: "center",
    width: width * 0.85, // 85% da largura
    alignSelf: 'center',
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  texto: {
    color: cores.branco,
    fontWeight: "bold",
    fontSize: 18,
    textTransform: 'uppercase', // Texto em maiúsculas
  },
});