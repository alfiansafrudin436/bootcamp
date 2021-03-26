import React, {useEffect, useState} from 'react';
import {
  Splash,
  Left,
  Mid,
  Right,
  Login,
  Register,
  Home,
  Profile,
  Logout,
  Detail,
} from '@screens';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {Icon} from './src/components/index';
import {Provider, useSelector} from 'react-redux';
import {store, persistor} from './src/redux/index';
import {PersistGate} from 'redux-persist/integration/react';
import { View } from 'react-native';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const horizontalAnimation = {
  gestureDirection: 'horizontal',
  headerShown: false,
  cardStyleInterpolator: ({current, layouts}) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
        ],
      },
    };
  },
};

const BottomTabs = () => {
    
  return (
    <Tabs.Navigator tabBarOptions={{style:{height:50, paddingTop:10, borderRadius:30, position:'absolute', bottom:10, marginLeft:'5%', marginRight:'5%'}}}>
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          title: '',
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Icon name="home" title="Home" size={focused ? 20 : 28} focused={focused} />
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
            <Icon name="user" title="Profile" size={focused ? 20: 28} focused={focused} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

const ListScreen = () => {
  const {isLogin} = useSelector(state => {
    return {
      isLogin: state.auth.isLogin,
    };
  });
  useEffect(() => {
    console.log({isLogin});
  }, [isLogin]);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLogin ? (
          <>
            <Stack.Screen
              name="Splash"
              component={Splash}
              options={horizontalAnimation}
            />
            <Stack.Screen
              name="Tab"
              component={BottomTabs}
              options={horizontalAnimation}
            />
            <Stack.Screen
              name="Detail"
              component={Detail}
              options={horizontalAnimation}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Splash"
              component={Splash}
              options={horizontalAnimation}
            />
            <Stack.Screen
              name="Left"
              component={Left}
              options={horizontalAnimation}
            />
            <Stack.Screen
              name="Mid"
              component={Mid}
              options={horizontalAnimation}
            />
            <Stack.Screen
              name="Right"
              component={Right}
              options={horizontalAnimation}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={horizontalAnimation}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={horizontalAnimation}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ListScreen />
      </PersistGate>
    </Provider>
  );
};

export default App;
