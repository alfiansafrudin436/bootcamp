import React, {useEffect, useState} from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {RColor} from '@reusable';
import {useMutation} from '@apollo/client';
import {LOGIN} from '../../config/mutation/mutation';
import AsyncStorage from '@react-native-community/async-storage';
import {GraphProvider} from '../../config/apollo';

const Profile = () => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(async () => {
    try {
      const valueRaw = await AsyncStorage.getItem('user');
      console.log({valueRaw});
      setLoading(true);
      if (valueRaw !== null) {
        const value = JSON.parse(valueRaw);
        console.log(value);
        setUser(value);
      }
    } catch (error) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Text style={{fontSize: 28, fontWeight: 'bold'}}>Profile</Text>
      </View>
      {user == null ? (
        <>
          <ActivityIndicator
            style={{alignSelf: 'center', justifyContent: 'center'}}
            size={30}
            color={RColor.orange}
          />
          <Text style={{alignSelf:'center', color:RColor.orange}}>Loadi Profile</Text>
        </>
      ) : (
        <View style={{alignSelf: 'center', justifyContent: 'center'}}>
          <Text style={styles.txt}>{user.login.name}</Text>
          <Text style={styles.txt}>{user.login.email}</Text>
        </View>
      )}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: RColor.white,
    flex: 1,
  },
  containerHeader: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    marginLeft: '10%',
    marginRight: '10%',
  },
  txt:{
      fontSize:28,
      color:RColor.orange
  }
});
