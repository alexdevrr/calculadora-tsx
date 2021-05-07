import React from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import {styles} from './src/themes/AppTheme';
import CalculadoraScreen from './src/views/CalculadoraScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.fondo}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <CalculadoraScreen />
    </SafeAreaView>
  );
};

export default App;
