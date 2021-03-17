import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {
  CustomBtn,
  CustomBtnLoading,
  CustomColor,
  CustomInput,
  CustomHeaderProfile,
  CustomQuestion,
} from '../../components/Reusable';
import Routes from '../../../App';
const Profile = ({navigation}) => {
  const [active, setActive] = useState(false);
  const [fData, setfData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await AsyncStorage.getItem('fDataLogin');
        if (data !== null) {
          setfData(JSON.parse(data));
        console.log(fData.photo);

        }
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, []);
  const onLogout = () => {
    AsyncStorage.removeItem('fDataLogin');
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
          source={{uri:`${fData.photo}`}}
          styleImage={styles.image}
        />
      </View>
      <View style={{marginTop: 80, alignItems: 'center'}}>
        <Text style={styles.name}>
          {fData.firstName == '' ? 'First Name Empty' : fData.firstName}
        </Text>
        <Text style={styles.jobs}>
          {fData.jobs == '' ? 'Jobs Empty' : fData.jobs}
        </Text>
      </View>
      <View style={{marginTop: '20%'}}>
        <CustomInput
          text="Slogan"
          editable={false}
          value={fData.slogan == '' ? 'Slogan Empty' : fData.slogan}
          placeholder="Slogan"
        />
        <CustomInput
          text="Jobs"
          editable={false}
          value={fData.jobs == '' ? 'Jobs Empty' : fData.jobs}
          placeholder="Jobs"
        />
      </View>
      <View>
        {active ? (
          <CustomBtnLoading />
        ) : (
          <CustomBtn
            title="Go to Update Form"
            onPress={() => navigation.navigate('Edit Profile')}
          />
        )}
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
