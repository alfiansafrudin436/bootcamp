import React, {createContext, useContext, useState} from 'react';
// import {api} from '@services/api';
import axios from 'axios';
import api from '../services/api';
const UserContext = createContext();

const UserProvider = ({children}) => {
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);
  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const login = async (username, password) => {
    const dataUser = {
      data: {
        username: username,
        password: password,
      },
    };
    setIsloading(true);
    await axios
      .post(`${api}/api/v1/auth/login`, dataUser)
      .then((res) => {
        setUsername(username);
        setPassword(password);
        setIsLogin(true), console.log(res);
        setUser(res.data.data);
        setIsloading(false);
      })
      .catch((err) => {
        setError(err);
        setIsloading(false);
      });
  };
  const value = {
    login,
    username,
    password,
    isLoading,
    data: {
      user,
      isLogin,
      error,
    },
  };
  console.log('USERCONTEXT', {isLogin});
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

const useUser = () => useContext(UserContext);
export {useUser, UserContext};
export default UserProvider;
