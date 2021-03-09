import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {CustomBtn, CustomColor, CustomInput, CustomHeader, CustomQuestion, CustomBtnLoading} from '../../../src/components/Reusable'
import DataUser from '../../../Data.json'
import Routes from '../../routes/routes'
const Login = (props) => {
    const [active, setActive]=useState(false)
    const [email, setEmail]=useState('smatyashev1@reddit.com')
    const [password, setPassword]=useState('KTDMBhl9Kx')
    const [currentScreen, setCurrentScreen]=useState('Login')
    const [data,setData]=useState()
    const onSignIn=()=>{
            setActive(true)
            setTimeout(()=>{
                const fData = DataUser.find((f)=> f.email==email && f.password==password)
                console.log(fData)
                if(fData){
                    setData({
                        firstName:fData.first_name,
                        lastName:fData.last_name,
                        slogan:fData.slogan,
                        jobs:fData.jobs,
                        photo:fData.photo,
                    })

                    setCurrentScreen('Profile')
                    setActive(false)
                }else{
                    alert('Username dan Password Salah')
                    setActive(false)
                    setEmail('')
                    setPassword('')
                }
            },2000)
    }
    return (
        <View style={styles.container}>
        {currentScreen=="Login"?
            <View>
                <CustomHeader title="Sign In" onPress={()=>setCurrentScreen('Register')} navigationTitle="Sign Up"/>
                <View style={{marginTop:'20%'}}>
                    <CustomInput
                        onChangeText={(email)=>setEmail(email)}
                        value={email}
                        placeholder="Email"/>
                    <CustomInput
                        onChangeText={(password)=>setPassword(password)}
                        value={password}
                        placeholder="Password"/>
                </View>
                <View>
                    {active?
                    <CustomBtnLoading/>
                    :
                    <CustomBtn title="Sign In"
                    onPress={()=>onSignIn()}
                    />
                    }
                </View>
                <CustomQuestion title="Forgot your password ?"/>
            </View>
            :currentScreen=="Profile"?
            <Routes screen="Profile" data={data} />
            : 
            <Routes screen="Register"/>
            }
        </View>

    )
    }

    export default Login

    const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        backgroundColor:CustomColor.white
    }
    })
