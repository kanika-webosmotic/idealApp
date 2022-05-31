import React, { useEffect } from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import ImageViewer from './src/components/ImageViewer';
import Colors from './src/configs/color';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: Colors.LIGHTGREY,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: height * 0.05,
  },
});

const App = () => {
  const text = 'hello';
  const logSomeText = () => {
    console.log('some text');
  };

  useEffect(() => {
    logSomeText();
    console.log({ text });
  }, []);

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.welcomeText}>Welcome to IdealApp!</Text>
      <ImageViewer />
    </View>
  );
};

export default App;
