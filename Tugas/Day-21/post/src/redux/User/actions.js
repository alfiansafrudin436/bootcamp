import {SET_LOADING, SET_DATA, SET_ERROR} from './constan';
import instance from '@services/api';
import AsyncStorage from '@react-native-community/async-storage';

export const setData = data => {
  return {type: SET_DATA, data};
};

export const setLoading = data => {
  return {type: SET_LOADING, data};
};

export const setError = data => {
  return {type: SET_ERROR, data};
};

export default loginAction = data => dispatch => {
  dispatch(setLoading(true));
  instance
    .post(`/api/v1/auth/login`, {data})
    .then(res => {
      dispatch(setData(res.data.data));
    })
    .catch(err => {
      // console.log({err});
      dispatch(setError(err.response));
    })
    .finally(() => {
      dispatch(setLoading(false));
    });
};

