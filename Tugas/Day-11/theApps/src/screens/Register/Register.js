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
const Register = ({navigation}) => {
  const [active, setActive] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('smatyashev1@reddit.com');
  const [password, setPassword] = useState('');
  const [currentScreen, setCurrentScreen] = useState('Register');
  const [fDataRegister, setfDataRegister] = useState([]);

  const onSignUp = async () => {
    setActive(true);
    try {
      const data = await AsyncStorage.getItem('fDataRegister');
      if (data !== null) {
        setfDataRegister(JSON.parse(data));
        console.log('DATA', data);
        Register()
      }else{
        Register()
      }
    } catch (e) {
      console.log(e);
    }
  };
  const Register = () => {
    setTimeout(() => {
      const data = fDataRegister.find((f) => f.email == email);
      console.log(data);
      if (data) {
        alert('Email Sudah Terdaftar');
        setActive(false);
      } else {
        let Data = {
          id: fDataRegister.length,
          first_name: name,
          last_name: '',
          email: email,
          gender: '',
          slogan: '',
          jobs: '',
          photo: 'http://dummyimage.com/222x215.png/ff4444/ffffff',
          password: password,
        };
        if (Data) {
          AsyncStorage.setItem('fDataRegister', JSON.stringify(Data));
        }
        console.log(Data);
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
