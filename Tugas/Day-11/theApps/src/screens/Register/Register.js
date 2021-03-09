import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  CustomBtn,
  CustomBtnLoading,
  CustomColor,
  CustomInput,
  CustomHeader,
  CustomQuestion,
} from '../../../src/components/Reusable';
import Routes from '../../routes/routes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import dataUser from '../../../Data.json'
const Register = ({navigation}) => {
  const [active, setActive] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [currentScreen, setCurrentScreen] = useState('Register');

  const onSignUp = async () => {
    setActive(true);
    setTimeout(() => {
      const searchData = dataUser.find((f) => f.email == email);
      console.log(searchData);
      if (searchData) {
        alert('Email Sudah Terdaftar');
        setActive(false);
      } else {
        let data = {
          id: dataUser.length,
          first_name: name,
          last_name: '',
          email: email,
          gender: '',
          slogan: '',
          jobs: '',
          photo: 'http://dummyimage.com/222x215.png/ff4444/ffffff',
          password: password,
        };
        if (data) {
          AsyncStorage.setItem('fDataRegister', JSON.stringify(data));
        }
        console.log(data);
        setCurrentScreen('Login');
        setActive(false);
      }
    }, 2000);
  };

  return (
    <View style={styles.container}>
      {currentScreen == 'Register' ? (
        <View>
          <CustomHeader
            title="Sign Up"
            onPress={() => setCurrentScreen('Login')}
            navigationTitle="Login"
          />
          <View style={{marginTop: '20%'}}>
            <CustomInput
              onChangeText={(value) => setName(value)}
              value={name}
              placeholder="Name"
            />
            <CustomInput
              onChangeText={(value) => setEmail(value)}
              value={email}
              placeholder="Email"
            />
            <CustomInput
              onChangeText={(value) => setPassword(value)}
              value={password}
              placeholder="Password"
            />
          </View>
          <View>
            {active ? (
              <CustomBtnLoading />
            ) : (
              <CustomBtn title="Sign Up" onPress={() => onSignUp()} />
            )}
          </View>
          <CustomQuestion title="Forgot your password ?" />
        </View>
      ) : (
        <Routes screen="Login" />
      )}
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: CustomColor.white,
  },
});
