import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    marginTop: height * 0.05,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

function App() {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.welcomeText}>Welcome to IdealApp!</Text>
    </View>
  );
}

export default App;
