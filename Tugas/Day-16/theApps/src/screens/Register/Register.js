import React, {useState} from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import {
  CustomBtn,
  CustomBtnLoading,
  CustomColor,
  CustomInput,
  CustomHeader,
  CustomQuestion,
} from '../../components/Reusable';
import Routes from '../../../App';
import AsyncStorage from '@react-native-async-storage/async-storage';
import dataUser from '../../../Data.json';
import {validateEmail, validatePassword} from '../../Utils/Validasi';
import useForm from '../../lib/useForm';
const Register = ({navigation}) => {
  const [active, setActive] = useState(false);
  const [values, handleChangeValues] = useForm({
    name: '',
    email: '',
    password: '',
  });

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
            first_name: values.name,
            last_name: '',
            email: values.email,
            gender: '',
            slogan: '',
            jobs: '',
            photo: 'https://i.pinimg.com/564x/50/8c/01/508c010849ad7c393d0ce71d2ae4194c.jpg',
            password: values.password,
          };
          if (data) {
            AsyncStorage.setItem('fDataRegister', JSON.stringify(data));
            navigation.navigate('Login')
          }
          setActive(false);
        }
      }, 2000);
    }
  };

  return (
    <View style={styles.container}>
      <CustomHeader
        title="Sign Up"
        onPress={() => navigation.navigate('Login')}
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
