import React, {useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {RColor, RTitleSlider, RTextInput, RButton, RQuestion} from '@reusable';
import {GraphProvider} from '../../config/apollo';
import {useMutation} from '@apollo/client';
import {LOGIN} from '../../config/mutation/mutation';
import Profile from '../Profile/Profile';

const LoginChildren = props => {
  const [blur, setBlur] = useState(true);
  const [email, setEmail] = useState('alfian@gmail.com');
  const [password, setPassword] = useState('123456');
  const [login, {data, loading, error}] = useMutation(LOGIN);

  const height = blur ? '40%' : 0;
  let navigation = props.navigation;
  const loginPress = () => {
    try {
      if (email == '' || password == '') {
        alert('Fill an Empty Field');
      } else {
        login({
          variables: {
            email: email,
            password: password,
          },
        });
        if (data.login.token !== null) {
          AsyncStorage.setItem('token', data.login.token);
          AsyncStorage.setItem('user', JSON.stringify(data));
          navigation.navigate('Tab');
        }
      }
    } catch (error) {
      Alert.alert('Alert', `${error}`);
    }
  };
  return (
    <View style={styles.container}>
      <Image
        style={[styles.img, {height: height}]}
        source={require('../../img/1.png')}
      />
      <RTitleSlider title="Login" />
      <ScrollView>
        <RTextInput
          placeholder="Username"
          CStyle={styles.CStyleInput}
          onChangeText={text => {
            setEmail(text);
          }}
          value={email}
          onBlur={() => setBlur(true)}
          onFocus={() => setBlur(false)}
        />
        <RTextInput
          placeholder="Password"
          CStyle={styles.CStyleInput}
          onChangeText={text => {
            setPassword(text);
          }}
          value={password}
          onBlur={() => setBlur(true)}
          onFocus={() => setBlur(false)}
        />
        <RQuestion title="Forgot Password ? " />
        {loading ? (
          <ActivityIndicator size={30} color={RColor.orange} />
        ) : (
          <RButton title="Login" onPress={() => loginPress()} />
        )}
        <RQuestion
          title="Sign Up"
          onPress={() => navigation.navigate('Register')}
        />
      </ScrollView>
    </View>
  );
};
const Login = ({navigation}) => {
  return (
    <GraphProvider>
      <LoginChildren navigation={navigation} />
    </GraphProvider>
  );
};
export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: RColor.white,
  },
  img: {
    marginTop: 10,
    alignSelf: 'center',
    width: '80%',
  },
  CStyleInput: {
    marginTop: 20,
  },
});
