import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CustomColor } from '../../components/Reusable';

const Landingpage = ({navigation}) => {
  const getData = async () => {
    try {
      const data = await AsyncStorage.getItem('dataLogin');
      if (data == null) {
        navigation.navigate('Login');
      } else {
        navigation.navigate('Tabs');
      }
    } catch (e) {
      console.log(e);
    }
  };
  setTimeout(() => {
    getData();
  }, 3000);
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>theAPPS</Text>
        <ActivityIndicator size={40} color={CustomColor.white} />
      </View>
    </View>
  );
};

export default Landingpage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CustomColor.green,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 50,
    color: CustomColor.white,
    fontWeight: '700',
  },
});
