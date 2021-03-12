import React, {useState} from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import {
  CustomBtn,
  CustomBtnLoading,
  CustomColor,
  CustomInput,
  CustomHeader,
  CustomQuestion,
} from '../../../src/components/Reusable';
import Routes from '../../../App';
import AsyncStorage from '@react-native-async-storage/async-storage';
import dataUser from '../../../Data.json';
import {validateEmail, validatePassword} from '../../Utils/Validasi';
import useForm from '../../lib/useForm';
const Register = ({navigation}) => {
  const [active, setActive] = useState(false);
  const [currentScreen, setCurrentScreen] = useState('Register');
  const [values, handleChangeValues] = useForm({
    name: '',
    email: '',
    password: '',
  });
  // const getData=()=>{
  //   try {
  //     const dataUser = await AsyncStorage.getItem('fDataRegister');
  //     if (dataUser !== null) {
  //       return onSignUp(dataUser);
  //     }
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  const onSignUp = async () => {
    if ((values.name, values.email, values.password == '')) {
      Alert.alert('Input Required', 'Please Fill an Empty Input');
    } else if (!validateEmail(values.email)) {
      Alert.alert('Invalid Email', 'You entered invalid email');
    } else if (validatePassword(values.password) < 6) {
      Alert.alert('Invalid Password', '6 Character of Password Required');
    } else {
      setActive(true);
      setTimeout(() => {
        const searchData = dataUser.find((f) => f.email == values.email);
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
    }
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
              formKey="name"
              onChange={handleChangeValues}
              value={values.name}
              placeholder="Name"
            />
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
