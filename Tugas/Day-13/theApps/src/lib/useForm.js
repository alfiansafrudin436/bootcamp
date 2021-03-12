import {useState} from 'react';
import {Alert} from 'react-native';
import {validateEmail, validatePassword} from '../Utils/Validasi';

const useForm = (initialValues) => {
  const [values, setValues] = useState({
    ...initialValues,
  });
  // if (!validateEmail(email)) {
  //   Alert.alert('Invalid Email', 'You entered invalid email');
  // } else if (validatePassword(password) < 6) {
  //   Alert.alert('Invalid Password', '6 Character of Password Required');
  // } else if (email == '' || password == '') {
  //   alert('Please Fill Email and Password');
  // }
  const handleChangeValues = (key, value) => {
    setValues({...values, [key]: value});
  };
  console.log({values})
  return [values, handleChangeValues];
};
export default useForm;
