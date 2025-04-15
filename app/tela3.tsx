import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { Link, useLocalSearchParams } from "expo-router";
import { BotaoCustomizado } from "../components/BotaoCustomizado";
import { estilosGlobais } from "../constants/Estilos";
import { cores } from "../constants/Cores";

export default function TelaResultado() {
  // Pegando dados (simulados aqui, poderiam vir da tela anterior)
  // const { peso, altura, idade, genero } = useLocalSearchParams(); // Exemplo se dados fossem passados

  // Valores fixos para demonstração visual
  const imc = 22.5; // Exemplo
  const classificacao = "Peso Normal"; // Exemplo
  const resumoDados = "Altura: 170 cm - Peso: 70 kg - Idade: 25"; // Exemplo

  let corClassificacao = cores.verde; // Cor padrão para Normal
  if (classificacao === "Abaixo do Peso") corClassificacao = cores.amarelo;
  if (classificacao === "Sobrepeso") corClassificacao = cores.laranja;
  if (classificacao === "Obesidade") corClassificacao = cores.vermelho;

  return (
    <ScrollView contentContainerStyle={estilosGlobais.containerScroll}>
      <View style={estilosGlobais.container}>
        <Text style={styles.tituloResultado}>Seu Resultado</Text>

        <View style={styles.cardResultado}>
          <Text
            style={[styles.labelClassificacao, { color: corClassificacao }]}
          >
            {classificacao.toUpperCase()}
          </Text>
          <Text style={styles.valorIMC}>{imc.toFixed(1)}</Text>

          <Text style={styles.labelFaixaNormal}>Faixa de IMC normal:</Text>
          <Text style={styles.textoFaixaNormal}>18.5 - 24.9 kg/m2</Text>

          <Image
            source={require("../assets/bmibar.png")}
            style={styles.imagemBarra}
            resizeMode="contain"
          />

          <Text style={styles.textoResumo}>
            Seu IMC está na faixa considerada normal. Continue mantendo hábitos
            saudáveis!
          </Text>
          <Text style={styles.dadosInseridos}>{resumoDados}</Text>
        </View>

        <Link href="/" asChild>
          <BotaoCustomizado texto="Fechar" />
        </Link>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  tituloResultado: {
    fontSize: 28,
    fontWeight: "bold",
    color: cores.azul,
    marginBottom: 20,
    textAlign: "center",
  },
  cardResultado: {
    backgroundColor: cores.branco,
    borderRadius: 15,
    paddingVertical: 25,
    paddingHorizontal: 20,
    marginVertical: 20,
    alignItems: "center",
    width: "90%",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
  },
  labelClassificacao: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  valorIMC: {
    fontSize: 65,
    fontWeight: "bold",
    color: cores.azul,
    marginBottom: 20,
  },
  labelFaixaNormal: {
    fontSize: 15,
    color: cores.cinzaEscuro,
    marginBottom: 4,
  },
  textoFaixaNormal: {
    fontSize: 16,
    color: cores.texto,
    fontWeight: "bold",
    marginBottom: 20,
  },
  imagemBarra: {
    width: "100%",
    height: 30,
    marginVertical: 15,
  },
  textoResumo: {
    fontSize: 15,
    color: cores.texto,
    textAlign: "center",
    lineHeight: 21,
    marginTop: 15,
    marginBottom: 15,
  },
  dadosInseridos: {
    fontSize: 14,
    color: cores.cinzaEscuro,
    marginTop: 10,
    fontStyle: "italic",
  },
});
