import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Image, StyleSheet, Text, View} from 'react-native';
import {RColor} from '@reusable';
import AsyncStorage from '@react-native-community/async-storage';

const Profile = () => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const getData = async () => {
    const rawDataUser = await AsyncStorage.getItem('user');
    const dataUser = JSON.parse(rawDataUser);
    if (dataUser) {
      console.log(dataUser);
      setUser(dataUser);
      setLoading(false)
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Text style={{fontSize: 28, fontWeight: 'bold'}}>Profile</Text>
      </View>
      {loading ? (
        <View style={{flex:1, justifyContent:'center'}}>
          <ActivityIndicator
            style={{alignSelf: 'center', justifyContent: 'center'}}
            size={30}
            color={RColor.orange}
          />
          <Text style={{alignSelf: 'center', color: RColor.orange}}>
            Loading Profile
          </Text>
        </View>
      ) : (
        <View style={{marginTop: '50%', justifyContent: 'center'}}>
          <View style={{width:120, height:120, borderRadius:60, alignSelf:'center', borderColor:RColor.orange, borderWidth:4}}>
            <Image style={{width:'100%', height:'100%', borderRadius:45}} source={require('../../img/9.png')}/>
          </View>
          <Text style={styles.txt}>{user.full_name}</Text>
          <Text style={styles.txt}>{user.email}</Text>
          <Text style={styles.txt}>{user.phone_number}</Text>

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
