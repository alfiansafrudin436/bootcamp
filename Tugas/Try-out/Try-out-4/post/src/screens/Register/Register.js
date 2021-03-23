import React, {useState} from 'react';
import {Alert, Image, ScrollView, StyleSheet, View} from 'react-native';
import {RColor, RTitleSlider, RTextInput, RButton, RQuestion} from '@reusable';
import {useMutation} from '@apollo/client';
import {REGISTER} from '../../config/mutation/mutation';
import { GraphProvider } from '../../config/apollo';

const RegisterList = (props) => {
  const [blur, setBlur] = useState(true);
  const [name, setName] = useState('alfian');
  const [email, setEmail] = useState('alfian@gmail.com');
  const [password, setPassword] = useState('123456');

  const [register, {data, loading, error}] = useMutation(REGISTER);
  console.log({data, loading, error});
  const height = blur ? '35%' : 0;
  let navigation = props.navigation;
  const registerPress = () => {
    try {
      if (email == '' || password == '') {
        alert('Fill an Empty Field');
      } else {
        register({
          variables: {
            email: email,
            name: name,
            password: password,
          },
        });
        if (data.register.email !== null) {
          Alert.alert('Success', 'Register Sukses');
          navigation.navigate('Login');
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
        source={require('../../img/3.png')}
      />
      <RTitleSlider title="Register" />
      <ScrollView>
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
          placeholder="Password"
          CStyle={styles.CStyleInput}
          onChangeText={text => {
            setPassword(text);
          }}
          value={password}
          onBlur={() => setBlur(true)}
          onFocus={() => setBlur(false)}
        />
        <RButton title="Register" CStyle={{marginTop: 20}}
        onPress={()=>registerPress()} />
        <RQuestion
          title="Sign In"
          onPress={() => navigation.navigate('Login')}
        />
      </ScrollView>
    </View>
  );
};
const Register=({navigation})=>{
  return(
    <GraphProvider>
      <RegisterList navigation={navigation}/>
    </GraphProvider>
  )
}

export default Register;

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
