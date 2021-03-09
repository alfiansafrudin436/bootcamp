import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  CustomBtn,
  CustomColor,
  CustomInput,
  CustomHeader,
  CustomQuestion,
  CustomBtnLoading,
} from '../../../src/components/Reusable';
import Routes from '../../routes/routes';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Login = (props) => {
  const [active, setActive] = useState(false);
  const [email, setEmail] = useState('alfian@gmail.com');
  const [password, setPassword] = useState('alfian');
  const [currentScreen, setCurrentScreen] = useState('Login');
  const [fDataRegister, setfDataRegister] = useState([]);

  const getData = async () => {
    try {
      const dataUser = await AsyncStorage.getItem('fDataRegister');
      if (dataUser !== null) {
        return setfDataRegister(JSON.parse(dataUser));
      }
    } catch (e) {
      console.log(e);
    }
  };

  const onSignIn = () => {
    setActive(true);
    if (getData()) {
        // console.log(getData())
        setTimeout(() => {
          try {
            const data = [fDataRegister].find(
              (f) => f.email == email && f.password == password,
            );
            if (data) {
              const fData=({
                firstName: data.first_name,
                lastName: data.last_name,
                slogan: data.slogan,
                jobs: data.jobs,
                photo: data.photo,
              });
              AsyncStorage.setItem('fDataLogin', JSON.stringify(fData));
              setCurrentScreen('Profile');
              setActive(false);
            } else {
              alert('Username atau Password Salah');
              setActive(false);
            //   setEmail('');
            //   setPassword('');
            }
          } catch {}
        }, 2000);
    }else{
        alert('Username atau Password Salah');
        setActive(false);
    }
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
              onChangeText={(email) => setEmail(email)}
              value={email}
              placeholder="Email"
            />
            <CustomInput
              onChangeText={(password) => setPassword(password)}
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
        <Routes screen="Profile"/>
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
