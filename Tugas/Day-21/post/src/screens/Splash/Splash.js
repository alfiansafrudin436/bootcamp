import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {RColor, RTitleSlider, RTextInput, RButton, RQuestion} from '@reusable';

const Splash = ({navigation}) => {
  setTimeout(() => {
    navigation.navigate('Tab');
  }, 3000);

  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image style={[styles.img]} source={require('../../img/0.png')} />
      </View>
      {}
      <RTitleSlider title="BEBE Luck" />
    </View>
  );
};
export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: RColor.white,
    justifyContent: 'center',
  },
  imgContainer: {
    width: '100%',
    height: 300,
    marginBottom: '10%',
  },
  img: {
    marginTop: 10,
    alignSelf: 'center',
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});
