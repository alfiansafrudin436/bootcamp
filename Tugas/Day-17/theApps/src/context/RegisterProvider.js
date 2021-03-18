import React, {createContext, useContext, useState} from 'react';
// import {api} from '@services/api';
import axios from 'axios';
import api from '../services/api';
const RegisterContext = createContext();

const RegisterProvider = ({children}) => {
  const [status, setStatus] = useState({});
  const [error, setError] = useState(null);
  const [isLogin, setIsLogin] = useState(false);

  const register = async (name, username, password, noHp, email) => {
    const dataUser = {
      data: {
        full_name: name,
        username: username,
        password: password,
        phone_number: noHp,
        email: email,
      },
    };
    await axios
      .post(`${api}/api/v1/auth/signup`, dataUser)
      .then((res) => {
        console.log(res);
        setStatus(res.data.data.status);
      })
      .catch((err) => {
        setError(err.response.data.message);
        console.log({err});
      });
  };
  const value = {
    register,
    data: {
      status,
      error,
    },
  };
  return (
    <RegisterContext.Provider value={value}>
      {children}
    </RegisterContext.Provider>
  );
};

const useRegister = () => useContext(RegisterContext);
export {useRegister, RegisterContext};
export default RegisterProvider;
