import { Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { cores } from "../constants/Cores";

interface Props {
  texto: string;
  onPress?: () => void;
}

const { width } = Dimensions.get("window");

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
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 25,
    marginBottom: 10,
    alignItems: "center",
    width: width * 0.85,
    alignSelf: "center",
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
    textTransform: "uppercase",
  },
});
