import {SET_LOADING, SET_DATA, SET_ISLOGIN, SET_ERROR} from './constan';
import instance from '@services/api';
import AsyncStorage from '@react-native-community/async-storage';

export const setData = data => {
  return {type: SET_DATA, data};
};

export const setLoading = data => {
  return {type: SET_LOADING, data};
};

export const setIsLogin = data => {
  return {type: SET_ISLOGIN, data};
};

export const setError = data => {
  return {type: SET_ERROR, data};
};

export default loginAction = data => dispatch => {
  dispatch(setLoading(true));
  instance
    .post(`/api/v1/auth/login`, {data})
    .then(res => {
      AsyncStorage.setItem('token', res.data.data.token);
      AsyncStorage.setItem('user', JSON.stringify(res.data.data));
      dispatch(setData(res.data.data));
      dispatch(setIsLogin(true));
      console.log("WKWKWKWK");

    })
    .catch(err => {
      console.log({err});
      dispatch(setError(err.response));
      dispatch(setIsLogin(false));
    })
    .finally(() => {
      dispatch(setLoading(false));
    });
};
export const registerAction = (
  name,
  username,
  password,
  noHp,
  email,
) => dispatch => {
  const dataUser = {
    data: {
      full_name: name,
      username: username,
      password: password,
      phone_number: noHp,
      email: email,
    },
  };
  dispatch(setLoading(true));
  instance
    .post(`/api/v1/auth/signup`, dataUser)
    .then(res => {
      dispatch(setData(res.data));
    })
    .catch(err => {
      dispatch(setError(err.response.data.message));
    })
    .finally(() => {
      dispatch(setLoading(false));
    });
};
