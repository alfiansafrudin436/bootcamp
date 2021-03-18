import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  CustomBtn,
  CustomBtnLoading,
  CustomColor,
  CustomInput,
  CustomHeaderProfile,
} from '../../components/Reusable';
import {useUser} from '@context/UserProvider';

const Profile = ({navigation}) => {
  const {
    data: {user},
  } = useUser();
  console.log(user);
  const onLogout = () => {
    AsyncStorage.removeItem('login');
    navigation.navigate('Login');
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: CustomColor.green,
          width: '100%',
          height: 180,
          top: 0,
        }}>
        <CustomHeaderProfile
          title="Profile"
          navigationTitle="Log out"
          onPress={() => onLogout()}
          cStyleNav={{color: CustomColor.white}}
          cStyleTitle={{color: CustomColor.white}}
          source={{
            uri: user.photo
              ? user.photo
              : 'https://ih1.redbubble.net/image.1730629917.3632/st,small,507x507-pad,600x600,f8f8f8.u2.jpg',
          }}
          styleImage={styles.image}
        />
      </View>
      <View style={{marginTop: 80, alignItems: 'center'}}>
        <Text style={styles.name}>
          {user.full_name == '' ? 'Name Empty' : user.full_name}
        </Text>
        <Text style={styles.jobs}>
          {user.email == '' ? 'Jobs Empty' : user.email}
        </Text>
      </View>
      <View style={{marginTop: '20%'}}>
        <CustomInput
          text="No Hp"
          editable={false}
          value={user.phone_number == '' ? 'Number Empty' : user.phone_number}
          placeholder="Slogan"
        />
        <CustomInput
          text="Role"
          editable={false}
          value={user.role == '' ? 'Jobs Empty' : user.role}
          placeholder="Jobs"
        />
      </View>
      <View>
        <CustomBtn
          title="Go to Update Form"
          onPress={() => navigation.navigate('Edit Profile')}
        />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CustomColor.white,
  },
  imageHide: {},
  image: {
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    position: 'absolute',
    alignSelf: 'center',
    borderColor: CustomColor.white,
    borderWidth: 4,
    top: 100,
  },
  name: {
    fontSize: 30,
    fontWeight: '700',
  },
  jobs: {
    fontSize: 16,
    fontWeight: '600',
  },
});
