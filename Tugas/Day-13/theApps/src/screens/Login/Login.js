import React, {useState} from 'react';
import { StyleSheet, View} from 'react-native';
import {
  CustomBtn,
  CustomColor,
  CustomInput,
  CustomHeader,
  CustomQuestion,
  CustomBtnLoading,
} from '../../../src/components/Reusable';
import Routes from '../../../App';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useLogin from '../../lib/useLogin';


const Login = (props) => {
  const [currentScreen, setCurrentScreen] = useState('Login');
  const [active, setActive] = useState(false);
  const [email, password, handleChangeEmail, handleChangePassword]=useLogin('')

  const onSignIn = async () => {
    try {
      const dataUser = await AsyncStorage.getItem('fDataRegister');
      if (dataUser !== null) {
        return verifyUser(dataUser);
      }
    } catch (e) {
      console.log(e);
    }
  };
  // const verifyUser = (dataUser) => {
  //   dataUser = JSON.parse(dataUser);
  //   setTimeout(() => {
  //     setActive(true);
  //     if (email == dataUser.email && password == dataUser.password) {
  //       const fData = {
  //         firstName: dataUser.first_name,
  //         lastName: dataUser.last_name,
  //         slogan: dataUser.slogan,
  //         jobs: dataUser.jobs,
  //         photo: dataUser.photo,
  //       };
  //       AsyncStorage.setItem('fDataLogin', JSON.stringify(fData));
  //       setCurrentScreen('Profile');
  //       setActive(false);
  //     } else {
  //       alert('Email and Password didnt Correct');
  //       setActive(false);
  //       handleChangeEmail('');
  //       handleChangePassword('');
  //     }
  //   }, 2000);
  // };
  return (
    <View style={styles.container}>
      {currentScreen == 'Login' ? (
        <View>
          <CustomHeader
            title="Sign In"
            onPress={() => setCurrentScreen('Register')}
            navigationTitle="Sign Up"
          />
          <View style={{marginTop: '20%'}}>
            <CustomInput
              onChangeText={(email) => handleChangeEmail(email)}
              value={email}
              placeholder="Email"
            />
            <CustomInput
              onChangeText={(password) => handleChangePassword(password)}
              value={password}
              placeholder="Password"
            />
          </View>
          <View>
            {active ? (
              <CustomBtnLoading />
            ) : (
              <CustomBtn title="Sign In" onPress={() => onSignIn()} />
            )}
          </View>
          <CustomQuestion title="Forgot your password ?" />
        </View>
      ) : currentScreen == 'Profile' ? (
        <Routes screen="Profile" />
      ) : (
        <Routes screen="Register" />
      )}
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: CustomColor.white,
  },
});
