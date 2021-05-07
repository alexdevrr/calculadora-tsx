import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

interface Props {
  color?: string;
  texto: string;
  ancho?: boolean;
  accion: (numeroTexto: string) => void;
}

const BtnCalc = ({color = '#333333', texto, ancho, accion}: Props) => {
  return (
    <TouchableOpacity onPress={() => accion(texto)}>
      <View
        style={{
          ...styles.boton,
          backgroundColor: color,
          width: ancho ? 210 : 100,
        }}>
        <Text
          style={{
            ...styles.textBoton,
            color: color === '#A5A5A5' ? 'black' : 'white',
            textAlign: ancho ? 'left' : 'center',
            paddingLeft: ancho ? 40 : 0,
          }}>
          {texto}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  boton: {
    width: 100,
    height: 100,
    borderRadius: 100,
    justifyContent: 'center',
    marginBottom: 18,
    marginHorizontal: 5,
  },

  textBoton: {
    color: 'white',
    fontSize: 35,
    textAlign: 'center',
  },
});

export default BtnCalc;
