import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {CustomBtn, CustomColor, CustomInput, CustomHeader, CustomQuestion, CustomBtnLoading} from '../../../src/components/Reusable'
import DataUser from '../../../Data.json'
const Login = ({navigation}) => {
    const [active, setActive]=useState(false)
    const [email, setEmail]=useState('smatyashev1@reddit.com')
    const [password, setPassword]=useState('KTDMBhl9Kx')
    const onSignIn=()=>{
            setActive(true)
            setTimeout(()=>{
                const fData = DataUser.find((f)=> f.email==email && f.password==password)
                console.log(fData)
                if(fData){
                    navigation.navigate('Profile',{
                        firsName:fData.first_name,
                        lastName:fData.last_name,
                        slogan:fData.slogan,
                        jobs:fData.jobs,
                        photo:fData.photo,
                    })
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
            <CustomHeader title="Sign In" onPress={()=>navigation.navigate("Register")} navigationTitle="Sign Up"/>
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
