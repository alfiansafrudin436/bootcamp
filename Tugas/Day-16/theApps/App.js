import React, {useContext, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './src/screens/Home/Home';
import Login from './src/screens/Login/Login';
import Register from './src/screens/Register/Register';
import Profile from './src/screens/Profile/Profile';
import EditProfile from './src/screens/Profile/EditProfile';
import Landingpage from './src/screens/Landing Page/Landingpage';
import Detail from './src/screens/Home/Detail/Detail';
import {Icon} from './src/components/Reusable';
import {Context} from './src/context/Context';
import MyArticle from './src/screens/Home/MyArticle';
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
            <Icon name="home" size={25} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="MyArticle"
        component={MyArticle}
        options={{
          title: '',
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Icon name="articles" size={25} focused={focused} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

const StackList = () => {
  return (
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
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const Routes = () => {
  return (
    <NavigationContainer>
      {/* <Context.Provider value={sign}> */}
      <StackList />
      {/* </Context.Provider> */}
    </NavigationContainer>
  );
};

export default Routes;
