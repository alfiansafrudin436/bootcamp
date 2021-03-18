import React, {useContext, useState} from 'react';
import {Alert, StyleSheet, View, Text} from 'react-native';
import {
  CustomBtn,
  CustomColor,
  CustomInput,
  CustomHeader,
  CustomQuestion,
  CustomBtnLoading,
} from '../../components/Reusable';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import useForm from '../../lib/useForm';
import {validateEmail, validatePassword} from '../../Utils/Validasi';
import useGetData from '../../lib/useGetData';
import api from '../../api/api';
import {Context} from '../../context/Context';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
  const [active, setActive] = useState(false);
  const [values, handleChangeValues] = useForm({
    email: '',
    password: '',
  });
  const {response, err, isLoading} = useGetData({
    url: `${api}users`,
    method: `get`,
  });
  const verifyUser = () => {
    if (!validateEmail(values.email)) {
      Alert.alert('Invalid Email', 'You entered invalid email');
    } else if (validatePassword(values.password) < 6) {
      Alert.alert('Invalid Password', '6 Character of Password Required');
    } else if (values.email == '' || values.password == '') {
      alert('Please Fill Email and Password');
    } else {
      setActive(true);
      setTimeout(() => {
        let filter = response.find((f) => f.email == values.email);
        if (filter !== null) {
          AsyncStorage.setItem('dataLogin', JSON.stringify(filter))
          navigation.navigate('Tabs');
          setActive(false);
        } else {
          alert('Email and Password didnt Correct');
          setActive(false);
          handleChangeValues('');
          handleChangeValues('');
        }
      }, 2000);
    }
  };
  return (
    <View style={styles.container}>
      <CustomHeader
        title="Sign In"
        onPress={() => navigation.navigate('Register')}
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
      <Context.Provider value={values.email}>
        {/* <Routes/> */}
      </Context.Provider>
      <View>
        {active ? (
          <CustomBtnLoading />
        ) : (
          <CustomBtn title="Sign In" onPress={() => verifyUser()} />
        )}
      </View>
      <CustomQuestion title="Forgot your password ?" />
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
