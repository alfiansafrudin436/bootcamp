import React, {useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
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
import useForm from '../../lib/useForm';
import { validateEmail, validatePassword } from '../../Utils/Validasi';

const Login = (props) => {
  const [currentScreen, setCurrentScreen] = useState('Login');
  const [active, setActive] = useState(false);
  const [values, handleChangeValues] = useForm({
    email: '',
    password: '',
  });

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
  const verifyUser = (dataUser) => {
    if (!validateEmail(values.email)) {
      Alert.alert('Invalid Email', 'You entered invalid email');
    } else if (validatePassword(values.password) < 6) {
      Alert.alert('Invalid Password', '6 Character of Password Required');
    } else if (values.email == '' || values.password == '') {
      alert('Please Fill Email and Password');
    }
    dataUser = JSON.parse(dataUser);
    setTimeout(() => {
      setActive(true);
      if (values.email == dataUser.email && values.password == dataUser.password) {
        const fData = {
          firstName: dataUser.first_name,
          lastName: dataUser.last_name,
          slogan: dataUser.slogan,
          jobs: dataUser.jobs,
          photo: dataUser.photo,
        };
        AsyncStorage.setItem('fDataLogin', JSON.stringify(fData));
        setCurrentScreen('Profile');
        setActive(false);
      } else {
        alert('Email and Password didnt Correct');
        setActive(false);
        handleChangeValues('');
        handleChangeValues('');
      }
    }, 2000);
  };
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
              formKey="email"
              onChange={handleChangeValues}
              value={values.email}
              placeholder="Email"
            />
            <CustomInput
              formKey="password"
              onChange={handleChangeValues}
              value={values.password}
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
