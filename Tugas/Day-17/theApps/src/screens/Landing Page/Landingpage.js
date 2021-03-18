import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CustomColor} from '../../components/Reusable';
import {useUser} from '@context/UserProvider';

const Landingpage = ({navigation}) => {
  const {data: {isLogin}} = useUser();
  setTimeout(() => {
    isLogin ? navigation.navigate('Tabs') : navigation.navigate('Login');
  }, 5000);
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
