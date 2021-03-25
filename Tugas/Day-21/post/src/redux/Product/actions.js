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

const fetchProduct = () => async dispatch => {
  dispatch(setLoading(true));
  let token = await AsyncStorage.getItem('token');
  instance
    .get(`/api/v1/product`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(res => {
      // console.log(res);
      dispatch(setData(res.data.data));
    })
    .catch(err => {
      console.log(err.response);
      dispatch(setError(err.response));
    })
    .finally(() => {
      dispatch(setLoading(false));
    });
};
export default fetchProduct;
