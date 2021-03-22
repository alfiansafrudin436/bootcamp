import React, {useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {
  CustomBtn,
  CustomColor,
  CustomInput,
  CustomHeader,
  CustomQuestion,
  CustomBtnLoading,
} from '../../components/Reusable';
import UserProvider, {useUser} from '@context/UserProvider';
import useForm from '@lib/useForm';
import {validatePassword} from '@utils/Validasi';

const Login = ({navigation}) => {
  const {login, isLoading} = useUser();
  const [values, handleChangeValues] = useForm({
    username: 'alfian',
    password: 'alfian',
  });
  const verifyUser = () => {
    if (validatePassword(values.password) < 6) {
      Alert.alert('Invalid Password', '6 Character of Password Required');
    } else if (values.username == '' || values.password == '') {
      alert('Please Fill uUername and Password');
    } else {
      login(values.username, values.password);
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
          formKey="username"
          onChange={handleChangeValues}
          value={values.username}
          placeholder="Username"
        />
        <CustomInput
          formKey="password"
          onChange={handleChangeValues}
          value={values.password}
          placeholder="Password"
        />
      </View>
      <View>
        {isLoading ? (
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
