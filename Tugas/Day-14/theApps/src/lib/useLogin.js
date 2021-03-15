import {useState} from 'react';
import {Alert} from 'react-native';
import {validateEmail, validatePassword} from '../Utils/Validasi';

const useLogin = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  if (!validateEmail(email)) {
    Alert.alert('Invalid Email', 'You entered invalid email');
  } else if (validatePassword(password) < 6) {
    Alert.alert('Invalid Password', '6 Character of Password Required');
  } else if (email == '' || password == '') {
    alert('Please Fill Email and Password');
  }
  return [email, setEmail, password, setPassword];
};
export default useLogin;
