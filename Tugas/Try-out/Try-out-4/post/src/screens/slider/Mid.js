import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import {RColor, RSkipRight, RButton, RTitleSlider, RDotFilled} from '@reusable';

const Mid = ({navigation}) => {
  return (
    <View style={styles.container}>
      <RSkipRight title="Skip" onPress={() => navigation.navigate('Login')} />
      <ImageBackground style={styles.img} source={require('../../img/2.png')} />

      <RTitleSlider
        title="Find course for you"
        subTitle="Quarantine is the perfect time to sepnd your day learning something new, from anywhere!"
      />
      <RDotFilled title="mid" CStyle={styles.CStyleDot} />
      <RButton
        title="Next"
        CStyle={styles.CStyleBtn}
        onPress={() => navigation.navigate('Right')}
      />
    </View>
  );
};
export default Mid;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: RColor.white,
  },
  img: {
    marginTop: 10,
    alignSelf: 'center',
    width: 300,
    height: 350,
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
