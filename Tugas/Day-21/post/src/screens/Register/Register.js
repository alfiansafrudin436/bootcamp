import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Alert, StyleSheet, View} from 'react-native';
import {
  RColor,
  RTitleSlider,
  RTextInput,
  RButton,
  RQuestion,
  RButtonLoading,
} from '@reusable';
import {useDispatch, useSelector} from 'react-redux';
import {registerAction} from '../../redux/Auth/actions';

const Register = ({navigation}) => {
  const [blur, setBlur] = useState(true);
  const [username, setUsername] = useState('alfian123');
  const [name, setName] = useState('alfian123');
  const [phoneNumber, setPhoneNumber] = useState('12345678910');
  const [password, setPassword] = useState('123456');
  const [email, setEmail] = useState('alfian@gmail.com');

  const dispatch = useDispatch();
  const {list, loading, error} = useSelector(state => {
    return {
      list: state.auth.list,
      loading: state.auth.loading,
    };
  });

  const registerPress = () => {
    if (email == '' || password == '') {
      alert('Fill an Empty Field');
    } else {
      dispatch(registerAction(name, username, password, phoneNumber, email));
      // setTimeout(()=>{
      //   if (error) {
      //     Alert.alert('Error', `${error}`);
      //   } else {
      //     Alert.alert('Massege', list);
      //     navigation.navigate('Login');
      //   }
      // },2000)
    }
  };
  return (
    <View style={styles.container}>
      <RTitleSlider title="Register" CStyleContainer={{marginTop: 10}} />
      <View style={styles.containerBody}>
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
          placeholder="Name"
          CStyle={styles.CStyleInput}
          onChangeText={text => {
            setName(text);
          }}
          value={name}
          onBlur={() => setBlur(true)}
          onFocus={() => setBlur(false)}
        />
        <RTextInput
          placeholder="Email"
          CStyle={styles.CStyleInput}
          onChangeText={text => {
            setEmail(text);
          }}
          value={email}
          onBlur={() => setBlur(true)}
          onFocus={() => setBlur(false)}
        />
        <RTextInput
          placeholder="Phone Number"
          CStyle={styles.CStyleInput}
          onChangeText={text => {
            setPhoneNumber(text);
          }}
          value={phoneNumber}
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
        {loading ? (
          <RButtonLoading CStyle={{marginTop: 20}} />
        ) : (
          <RButton
            title="Register"
            CStyle={{marginTop: 20}}
            onPress={() => registerPress()}
          />
        )}
        <RQuestion
          title="Sign In"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: RColor.white,
  },
  containerBody: {width: '100%', height: '100%', justifyContent: 'center'},
  CStyleInput: {
    marginBottom: 20,
  },
});
