import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import ImageViewer from './src/components/ImageViewer';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: height * 0.05,
  },
});

const App = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.welcomeText}>Welcome to IdealApp!</Text>
      <ImageViewer />
    </View>
  );
};

export default App;
