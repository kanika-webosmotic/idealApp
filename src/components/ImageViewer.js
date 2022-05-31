import React from 'react';
import { Image, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  imageStyle: {
    height: width * 0.8,
    width: width * 0.8,
  },
});

const ImageViewer = () => {
  return <Image style={styles.imageStyle} source={{ uri: 'https://picsum.photos/200/300' }} />;
};

export default ImageViewer;
