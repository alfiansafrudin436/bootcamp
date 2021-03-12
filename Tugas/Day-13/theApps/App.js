import React from 'react'
import { StyleSheet, View } from 'react-native'
import Login from './src/screens/Login/Login';
import Register from './src/screens/Register/Register';
import Profile from './src/screens/Profile/Profile';
import EditProfile from './src/screens/Profile/EditProfile';
import Landingpage from './src/screens/Landing Page/Landingpage';

// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// const Stack= createStackNavigator()
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
        currentScreen=<Profile/>
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
