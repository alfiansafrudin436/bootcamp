import React, {useEffect} from 'react';
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
import CreatePost from './src/screens/CreatePost/CreatePost';
import {Provider, useSelector} from 'react-redux';
import store from './src/redux/store';
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
      <Tabs.Screen
        name="Logout"
        component={Logout}
        options={{
          title: '',
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Icon name="sign-out" size={25} focused={focused} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

const ListScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const App = () => {
  return (
    <Provider store={store}>
      <ListScreen />
    </Provider>
  );
};

export default App;
