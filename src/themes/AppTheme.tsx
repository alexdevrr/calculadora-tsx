import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: 'black',
  },

  contenedorScreen: {
    flex: 1,
    justifyContent: 'flex-end',
    marginHorizontal: 20,
  },

  historial: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 40,
    textAlign: 'right',
  },

  txtResultado: {
    color: 'white',
    fontSize: 60,
    textAlign: 'right',
    marginBottom: 20,
  },

  fila: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
