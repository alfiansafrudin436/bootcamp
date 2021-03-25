import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {RColor, RSkipRight, RButton, RTitleSlider, RDotFilled} from '@reusable';


const Left = ({navigation}) => {
  return (
    <View style={styles.container}>
      <RSkipRight title="Skip" onPress={() => navigation.navigate('Login')} />
      <View style={styles.imgContainer}>
        <Image style={[styles.img]} source={require('../../img/1.png')} />
      </View>
      <RTitleSlider
        title="Learn Anytime Anywhere"
        subTitle="Quarantine is the perfect time to sepnd your day learning something new, from anywhere!"
      />
      <RDotFilled title="left" CStyle={styles.CStyleDot} />
      <RButton
        title="Next"
        CStyle={styles.CStyleBtn}
        onPress={() => navigation.navigate('Mid')}
      />
    </View>
  );
};
export default Left;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: RColor.white,
  },
  imgContainer: {width: '100%', height: 300},
  img: {
    marginTop: 10,
    alignSelf: 'center',
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  CStyleDot: {
    marginTop: 20,
    marginBottom: 20,
  },
  CStyleBtn: {
    position: 'absolute',
    bottom: 20,
  },
});
