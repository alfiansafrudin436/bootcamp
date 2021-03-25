import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {
  RColor,
  RTitleSlider,
  RTextInput,
  RButton,
  RQuestion,
  RButtonLoading,
} from '@reusable';
import {useDispatch, useSelector} from 'react-redux';
import login from '../../redux/Auth/actions';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const [blur, setBlur] = useState(true);
  const [username, setUsername] = useState('alfian');
  const [password, setPassword] = useState('alfian');

  const {list, loading, isLogin} = useSelector(state => {
    return {
      list: state.auth.list,
      loading: state.auth.loading,
      isLogin: state.auth.isLogin,
    };
  });

  const height = blur ? 300 : 0;
  const loginPress = () => {
    try {
      if (username == '' || password == '') {
        alert('Fill an Empty Field');
      } else {
        dispatch(
          login({
            username,
            password,
          }),
        );
        if (isLogin) {
          navigation.navigate('Tab');
        } else {
          Alert.alert('Alert', `${error}`);
        }
      }
    } catch (error) {
      Alert.alert('Alert', `${error}`);
    }
  };
  return (
    <View style={styles.container}>
      <View style={[styles.imgContainer, {height: height}]}>
        <Image style={[styles.img]} source={require('../../img/4.png')} />
      </View>
      <RTitleSlider title="Login" />
      <ScrollView>
        <View style={{flex: 1}}>
          <RTextInput
            placeholder="Username"
            CStyle={styles.CStyleInput}
            onChangeText={text => {
              setUsername(text);
            }}
            value={username}
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
            <RButtonLoading />
          ) : (
            <RButton title="Login" onPress={() => loginPress()} />
          )}
          <RQuestion
            title="Sign Up"
            onPress={() => navigation.navigate('Register')}
          />
        </View>
      </ScrollView>
    </View>
  );
};
export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: RColor.white,
  },
  imgContainer: {width: '100%', height: 300},
  img: {
    marginTop: 10,
    alignSelf: 'center',
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  CStyleInput: {
    marginTop: 20,
  },
});


