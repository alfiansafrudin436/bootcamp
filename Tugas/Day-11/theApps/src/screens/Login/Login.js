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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [currentScreen, setCurrentScreen] = useState('Login');

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
    console.log(dataUser)
    dataUser=JSON.parse(dataUser)
    setActive(true);
        setTimeout(() => {
            if (email==dataUser.email && password==dataUser.password) {
              const fData=({
                firstName: dataUser.first_name,
                lastName: dataUser.last_name,
                slogan: dataUser.slogan,
                jobs: dataUser.jobs,
                photo: dataUser.photo,
              });
              AsyncStorage.setItem('fDataLogin', JSON.stringify(fData));
              setCurrentScreen('Profile');
              setActive(false);
            } else if(email==''||password==''){
              alert('Please Fill Email and Password');
              setActive(false);
            }else {
              alert('Email and Password didnt Correct');
              setActive(false);
              setEmail('');
              setPassword('');
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
