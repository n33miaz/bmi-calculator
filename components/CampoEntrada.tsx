import { TextInput, Text, StyleSheet, View } from "react-native";
import { cores } from "../constants/Cores";

interface Props {
  label: string;
  placeholder: string;
  valor: string;
  onChangeText: (texto: string) => void;
  tipoTeclado?: 'default' | 'numeric' | 'email-address' | 'phone-pad';
  editavel?: boolean;
}

export function CampoEntrada({
  label,
  placeholder,
  valor,
  onChangeText,
  tipoTeclado = 'default',
  editavel = true,
}: Props) {
  return (
    <View style={estilos.container}>
      <Text style={estilos.label}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        style={[estilos.input, !editavel && estilos.inputDesabilitado]}
        value={valor}
        onChangeText={onChangeText}
        keyboardType={tipoTeclado}
        editable={editavel}
      />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    marginVertical: 10,
    width: "100%",
  },
  label: {
    fontSize: 16,
    marginBottom: 6,
    fontWeight: "bold",
    color: cores.texto,
  },
  input: {
    borderWidth: 1,
    borderColor: cores.cinza,
    borderRadius: 8, // Ajustado
    paddingVertical: 12, // Ajustado
    paddingHorizontal: 15, // Ajustado
    backgroundColor: cores.branco, // Fundo branco
    fontSize: 16, // Tamanho da fonte
    color: cores.texto,
  },
  inputDesabilitado: {
      backgroundColor: cores.cinzaClaro,
      color: cores.cinzaEscuro,
  }
});