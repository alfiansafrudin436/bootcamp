import React, {useState} from 'react';
import {Alert, ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  CustomBtn,
  CustomBtnLoading,
  CustomColor,
  CustomInput,
  CustomHeader,
  CustomQuestion,
} from '../../components/Reusable';
import {validateEmail, validatePassword} from '@utils/Validasi';
import useForm from '@lib/useForm';
import RegisterProvider, {useRegister} from '@context/RegisterProvider';
const RegisterForm = (props) => {
  const [active, setActive] = useState(false);
  const [values, handleChangeValues] = useForm({
    name: '',
    username: '',
    password: '',
    noHp: '',
    email: '',
  });
  const {
    register,

    data: {status, error},
  } = useRegister();

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
        register(
          values.name,
          values.username,
          values.password,
          values.noHp,
          values.email,
        );
        console.log(error);
        if (error !== null) {
          Alert.alert('Warning', `${error}`);
        }
        if (status !== null) {
          Alert.alert('Succes', `Register ${status}`);
        }
        setActive(false);
      }, 2000);
    }
  };

  return (
    <View style={styles.container}>
      <CustomHeader
        title="Sign Up"
        onPress={props.onPress}
        navigationTitle="Login"
      />
      <ScrollView>
        <View style={{marginTop: '20%'}}>
          <CustomInput
            text="Full Name"
            formKey="name"
            onChange={handleChangeValues}
            value={values.name}
            placeholder="Name"
          />
          <CustomInput
            text="Username"
            formKey="username"
            onChange={handleChangeValues}
            value={values.username}
            placeholder="Username"
          />
          <CustomInput
            text="Email"
            formKey="email"
            onChange={handleChangeValues}
            value={values.email}
            placeholder="Email"
          />
          <CustomInput
            text="Password"
            formKey="password"
            onChange={handleChangeValues}
            value={values.password}
            placeholder="Password"
          />
          <CustomInput
            text="No Handphone"
            formKey="noHp"
            onChange={handleChangeValues}
            value={values.noHp}
            placeholder="No Handphone"
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
      </ScrollView>
    </View>
  );
};
const Register = ({navigation}) => {
  return (
    <RegisterProvider>
      <RegisterForm onPress={()=>navigation.navigate('Login')}/>
    </RegisterProvider>
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
