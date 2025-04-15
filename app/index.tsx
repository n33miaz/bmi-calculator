import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from "react-native";
import { Link } from "expo-router";
import { BotaoCustomizado } from "../components/BotaoCustomizado";
import { estilosGlobais } from "../constants/Estilos";
import { cores } from "../constants/Cores";

const { width } = Dimensions.get('window');
const buttonWidth = width * 0.4; // 40% da largura da tela

export default function TelaSelecaoGenero() {
  const [genero, setGenero] = useState<'masculino' | 'feminino' | null>(null);

  return (
    <View style={estilosGlobais.container}>
      <Text style={estilosGlobais.titulo}>Calculadora de IMC</Text>
      <Text style={styles.subtitulo}>Por favor, escolha seu gênero</Text>

      <View style={styles.containerGenero}>
        <TouchableOpacity
          style={[
            styles.botaoGenero,
            { width: buttonWidth, height: buttonWidth }, // Tamanho responsivo
            genero === "masculino" && styles.botaoGeneroSelecionado,
          ]}
          onPress={() => setGenero("masculino")}
        >
          <Image
            source={require("../assets/male.png")}
            style={styles.iconeGenero}
            resizeMode="contain"
          />
          <Text style={styles.textoGenero}>Masculino</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.botaoGenero,
            { width: buttonWidth, height: buttonWidth }, // Tamanho responsivo
            genero === "feminino" && styles.botaoGeneroSelecionado,
          ]}
          onPress={() => setGenero("feminino")}
        >
          <Image
            source={require("../assets/female.png")}
            style={styles.iconeGenero}
            resizeMode="contain"
          />
          <Text style={styles.textoGenero}>Feminino</Text>
        </TouchableOpacity>
      </View>

      <Link href="/tela2" asChild>
        <BotaoCustomizado texto="Continuar" />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  subtitulo: {
    fontSize: 18,
    color: cores.texto,
    marginBottom: 30,
    textAlign: "center",
  },
  containerGenero: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 40,
  },
  botaoGenero: {
    alignItems: "center",
    justifyContent: 'center',
    padding: 15,
    borderRadius: 15,
    backgroundColor: cores.cinzaClaro,
    borderWidth: 2,
    borderColor: "transparent",
  },
  botaoGeneroSelecionado: {
    borderColor: cores.azul,
    backgroundColor: "#d6e4ff",
  },
  iconeGenero: {
    width: '60%', // Proporcional ao botão
    height: '60%', // Proporcional ao botão
    marginBottom: 10,
  },
  textoGenero: {
    fontSize: 16,
    fontWeight: "bold",
    color: cores.texto,
  },
});