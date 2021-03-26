import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {RColor, RHeader} from '@reusable';
import {useSelector} from 'react-redux';

const Profile = ({navigation}) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const {list} = useSelector(state => {
    return {
      list: state.auth.list,
    };
  });

  return (
    <View style={styles.container}>
      <RHeader title="Profile" onPress={() => navigation.goBack()} />
      <View style={{marginTop: '50%', justifyContent: 'center'}}>
        <View style={styles.imgContainer}>
          <Image
            style={{width: '100%', height: '100%', borderRadius:60}}
            source={require('../../img/9.png')}
          />
        </View>
        <Text style={styles.txt}>{list.full_name}</Text>
        <Text style={styles.txt}>{list.email}</Text>
        <Text style={styles.txt}>{list.phone_number}</Text>
      </View>
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
  imgContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: 'center',
    borderColor: RColor.blue,
    borderWidth: 4,
  },
  txt: {
    fontSize: 20,
    alignSelf: 'center',
    color: RColor.orange,
  },
});
