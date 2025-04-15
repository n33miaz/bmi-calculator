import { StyleSheet } from "react-native";
import { cores } from "./Cores";

export const estilosGlobais = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: cores.fundo,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  containerScroll: {
    flexGrow: 1,
    backgroundColor: cores.fundo,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    color: cores.azul,
    marginBottom: 10,
    textAlign: "center",
  },
  texto: {
    fontSize: 17,
    color: cores.textoClaro,
    textAlign: "center",
    marginBottom: 25,
    lineHeight: 24,
  },
});
