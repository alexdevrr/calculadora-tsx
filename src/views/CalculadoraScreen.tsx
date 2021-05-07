import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import BtnCalc from '../components/BtnCalc';
import {styles} from '../themes/AppTheme';

// interface Provider {
// posiciones: Array<string>;
// }

const CalculadoraScreen = () => {
  const [historial, setHistorial] = useState('0');
  const [numero, setNumero] = useState('0');

  const [entradas, setEntradas] = useState<string[]>([]);

  const limpiar = () => {
    setNumero('0');
  };

  const armarNumero = (value: string) => {
    if (numero.includes('.') && value === '.') return;

    setNumero(numero !== '0' || value === '.' ? numero + value : value);
    setEntradas([numero]);
  };

  const masMenos = () => {
    if (numero.includes('-')) {
      setNumero(numero.replace('-', ''));
    } else {
      setNumero('-' + numero);
    }
  };

  const btnDel = () => {
    setNumero(numero.substring(0, numero.length - 1));

    if (numero.length <= 1) {
      setNumero('0');
    }
  };

  return (
    <View style={styles.contenedorScreen}>
      <Text style={styles.historial}>{historial}</Text>
      <Text style={styles.txtResultado}>{numero}</Text>

      {/* Fila botones */}
      <View style={styles.fila}>
        {/* Primera fial */}
        <BtnCalc color="#A5A5A5" texto="C" accion={limpiar} />
        <BtnCalc color="#A5A5A5" texto="+/-" accion={masMenos} />
        <BtnCalc color="#A5A5A5" texto="del" accion={btnDel} />
        <BtnCalc color="#FEA00A" texto="/" accion={limpiar} />

        <BtnCalc texto="7" accion={armarNumero} />
        <BtnCalc texto="8" accion={armarNumero} />
        <BtnCalc texto="9" accion={armarNumero} />
        <BtnCalc color="#FEA00A" texto="X" accion={limpiar} />

        <BtnCalc texto="4" accion={armarNumero} />
        <BtnCalc texto="5" accion={armarNumero} />
        <BtnCalc texto="6" accion={armarNumero} />
        <BtnCalc color="#FEA00A" texto="-" accion={limpiar} />

        <BtnCalc texto="1" accion={armarNumero} />
        <BtnCalc texto="2" accion={armarNumero} />
        <BtnCalc texto="3" accion={armarNumero} />
        <BtnCalc color="#FEA00A" texto="+" accion={limpiar} />

        <BtnCalc texto="0" ancho accion={armarNumero} />
        <BtnCalc texto="." accion={armarNumero} />
        <BtnCalc color="#FEA00A" texto="=" accion={limpiar} />
      </View>
    </View>
  );
};

export default CalculadoraScreen;
