import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import favicon from '../assets/favicon.png'



const ImageExample = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={favicon}
      />
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />

    </View>
  );
};

export default ImageExample;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});
