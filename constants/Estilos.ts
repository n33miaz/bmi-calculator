import { StyleSheet } from "react-native";
import { cores } from "./Cores";

export const estilosGlobais = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: cores.fundo,
    alignItems: "center",
    justifyContent: "center", // Centraliza verticalmente por padrão
    paddingHorizontal: 20, // Padding horizontal
    paddingVertical: 30, // Padding vertical
  },
  containerScroll: {
    flexGrow: 1, // Permite que o conteúdo cresça e use scroll
    backgroundColor: cores.fundo,
    alignItems: "center",
    justifyContent: "center", // Mantém centralizado se o conteúdo for pequeno
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  titulo: {
    fontSize: 30, // Ligeiramente menor
    fontWeight: "bold",
    color: cores.azul,
    marginBottom: 10,
    textAlign: "center",
  },
  texto: {
    fontSize: 17, // Ligeiramente menor
    color: cores.textoClaro, // Cor mais suave
    textAlign: "center",
    marginBottom: 25, // Mais espaço
    lineHeight: 24, // Melhor legibilidade
  },
});