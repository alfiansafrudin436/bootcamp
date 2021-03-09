import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login/Login';
import Register from '../screens/Register/Register';
import Profile from '../screens/Profile/Profile';
import EditProfile from '../screens/Profile/EditProfile';
import Landingpage from '../screens/Landing Page/Landingpage';

const Stack= createStackNavigator()
// const StackList=()=>{
//     return(
//         <NavigationContainer>
//             <Stack.Navigator>
//                 <Stack.Screen name="Landingpage" component={Landingpage} options={{headerShown:false}}/>
//                 <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
//                 <Stack.Screen name="Register" component={Register} options={{headerShown:false}}/>
//                 <Stack.Screen name="Profile" component={Profile} options={{headerShown:false}}/>
//                 <Stack.Screen name="Edit Profile" component={EditProfile} options={{headerShown:false}}/>
//             </Stack.Navigator>
//         </NavigationContainer>
//     )
// }
const Routes = (props) => {
    let currentScreen=<Landingpage/>
     if(props.screen=="Login"){
        currentScreen=<Login/>
    }else if(props.screen=="Profile"){
        currentScreen=<Profile data={props.data}/>
    }else if(props.screen=="Register"){
        currentScreen=<Register/>
    }else if(props.screen=="Edit Profile"){
        currentScreen=<EditProfile/>
    }
    return (
        <View style={{width:'100%', height:'100%'}}>
            {currentScreen}
        </View>
    )
}

export default Routes

const styles = StyleSheet.create({})
