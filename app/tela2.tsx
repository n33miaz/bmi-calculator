import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import Slider from "@react-native-community/slider";
import { Link } from "expo-router";
import { BotaoCustomizado } from "../components/BotaoCustomizado";
import { estilosGlobais } from "../constants/Estilos";
import { cores } from "../constants/Cores";

const { width } = Dimensions.get("window");

export default function TelaFormulario() {
  const [peso, setPeso] = useState(70);
  const [altura, setAltura] = useState(170);
  const [idade, setIdade] = useState(25);

  const BotaoIncrementoDecremento = ({
    onPress,
    texto,
  }: {
    onPress: () => void;
    texto: string;
  }) => (
    <TouchableOpacity style={styles.botaoIncDec} onPress={onPress}>
      <Text style={styles.botaoIncDecTexto}>{texto}</Text>
    </TouchableOpacity>
  );

  return (
    <View
      style={[estilosGlobais.container, { justifyContent: "space-around" }]}
    >
      <Text style={styles.subtitulo}>Por favor, ajuste os valores</Text>

      <View style={styles.linha}>
        <View style={styles.card}>
          <Text style={styles.label}>Peso (kg)</Text>
          <Text style={styles.valor}>{peso}</Text>
          <View style={styles.botoesContainer}>
            <BotaoIncrementoDecremento
              onPress={() => setPeso((p) => Math.max(10, p - 1))}
              texto="-"
            />
            <BotaoIncrementoDecremento
              onPress={() => setPeso((p) => p + 1)}
              texto="+"
            />
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>Idade</Text>
          <Text style={styles.valor}>{idade}</Text>
          <View style={styles.botoesContainer}>
            <BotaoIncrementoDecremento
              onPress={() => setIdade((i) => Math.max(1, i - 1))}
              texto="-"
            />
            <BotaoIncrementoDecremento
              onPress={() => setIdade((i) => i + 1)}
              texto="+"
            />
          </View>
        </View>
      </View>

      <View style={[styles.card, styles.cardAltura]}>
        <Text style={styles.label}>Altura (cm)</Text>
        <Text style={styles.valor}>{altura.toFixed(0)}</Text>
        <Slider
          style={styles.slider}
          minimumValue={100}
          maximumValue={250}
          step={1}
          value={altura}
          onValueChange={setAltura}
          minimumTrackTintColor={cores.rosa}
          maximumTrackTintColor={cores.cinza}
          thumbTintColor={cores.azul}
        />
      </View>

      <Link href="/tela3" asChild>
        <BotaoCustomizado texto="Calcular" />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  subtitulo: {
    fontSize: 20,
    color: cores.texto,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 15,
  },
  linha: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: "5%",
    marginBottom: 15,
  },
  card: {
    backgroundColor: cores.branco,
    borderRadius: 15,
    padding: 15,
    alignItems: "center",
    width: width * 0.42,
    minHeight: 170,
    justifyContent: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  cardAltura: {
    width: "90%",
    minHeight: 150,
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: cores.texto,
    marginBottom: 8,
    fontWeight: "bold",
  },
  valor: {
    fontSize: 38,
    fontWeight: "bold",
    color: cores.azul,
    marginBottom: 12,
  },
  botoesContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    marginTop: 5,
  },
  botaoIncDec: {
    backgroundColor: cores.rosa,
    width: 45,
    height: 45,
    borderRadius: 22.5,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 15,
  },
  botaoIncDecTexto: {
    color: cores.branco,
    fontSize: 24,
    fontWeight: "bold",
    lineHeight: 28,
  },
  slider: {
    width: "95%",
    height: 40,
    marginTop: 5,
  },
});
