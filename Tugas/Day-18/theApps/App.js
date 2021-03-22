import React, {useContext, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './src/screens/Home/Home';
import Login from './src/screens/Login/Login';
import Register from './src/screens/Register/Register';
import Profile from './src/screens/Profile/Profile';
import EditProfile from './src/screens/Profile/EditProfile';
import Landingpage from './src/screens/Landing Page/Landingpage';
import {Icon} from './src/components/Reusable';
import UserProvider, {useUser} from '@context/UserProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          title: '',
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Icon name="file" size={25} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={Profile}
        options={{
          title: '',
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Icon name="user" size={25} focused={focused} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

const StackList = () => {
  const {
    login,
    username,
    password,
    data: {isLogin, user},
  } = useUser();

  const value = {
    username,
    password,
    user,
  };
  if (isLogin == true) {
    AsyncStorage.setItem('login', JSON.stringify(value));
  }
  const [sigIn, setSigIn] = useState(null);
  const getData = async () => {
    try {
      const dataRaw = await AsyncStorage.getItem('login');
      const data = JSON.parse(dataRaw);
      console.log('ASYNC LOGIN', {data});
      data.username && data.password !== null
        ? setSigIn(true)
        : setSigIn(false);
      login(data.username, data.password);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <NavigationContainer>
      {isLogin || sigIn ? (
        <Stack.Navigator>
          <Stack.Screen
            name="Landingpage"
            component={Landingpage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Tabs"
            component={BottomTabs}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Edit Profile"
            component={EditProfile}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="Landingpage"
            component={Landingpage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};
const Routes = () => {
  return (
    <UserProvider>
      <StackList />
    </UserProvider>
  );
};

export default Routes;
