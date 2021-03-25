import React, {useEffect, useState} from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {RColor} from '@reusable';
import AsyncStorage from '@react-native-community/async-storage';

const Profile = () => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const getData = async () => {
    const rawDataUser = await AsyncStorage.getItem('user');
    const dataUser =JSON.parse(rawDataUser)
    if (dataUser) {
      setUser(dataUser);
      setLoading(false);
    }
  };
  useEffect(() => {
    getData();
    console.log(user);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Text style={{fontSize: 28, fontWeight: 'bold'}}>Profile</Text>
      </View>
      {loading ? (
        <>
          <ActivityIndicator
            style={{alignSelf: 'center', justifyContent: 'center'}}
            size={30}
            color={RColor.orange}
          />
          <Text style={{alignSelf: 'center', color: RColor.orange}}>
            Loading Profile
          </Text>
        </>
      ) : (
        <View style={{marginTop: '50%', justifyContent: 'center'}}>
          {/* <Text style={styles.txt}>{user.login.name}</Text>
          <Text style={styles.txt}>{user.login.email}</Text> */}
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
  txt: {
    fontSize: 20,
    alignSelf: 'center',
    color: RColor.orange,
  },
});
