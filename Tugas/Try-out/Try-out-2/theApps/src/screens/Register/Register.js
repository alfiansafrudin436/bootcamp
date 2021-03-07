import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {CustomBtn,CustomBtnLoading, CustomColor, CustomInput, CustomHeader, CustomQuestion} from '../../../src/components/Reusable'
import DataUser from '../../../Data.json'
// var fs = require('fs')
const Register = ({navigation}) => {
  const [active, setActive]=useState(false)
  const [name,setName]=useState('')
  const [email,setEmail]=useState('smatyashev1@reddit.com')
  const [password,setPassword]=useState('')
  const onSignUp=()=>{
      setActive(true)
      setTimeout(()=>{
          const fData=DataUser.find((f)=>f.email==email)
          if(fData){
            alert('Email Sudah Terdaftar')
            setActive(false)
          }else{
            DataUser.push({
              id:DataUser.length,
              first_name:name,
              last_name:'',
              email:email,
              password:password,
              slogan:'',
              gender:'',
              jobs:'',
              photo:''
            })
            // file.toObject(DataUser)
            setActive(false)
          }
        },2000)
        // fs.writeFile(`../../../Data.json`, JSON.stringify(DataUser), (err) => {
        //   if (err) console.log('Error writing file:', err) 
        //   else console.log(`Updating data with ID = ${id} success`)
        // })

  }
  console.log(DataUser)

  return (
    <View style={styles.container}>
        <CustomHeader title="Sign Up" onPress={()=>navigation.navigate("Login")} navigationTitle="Login"/>
        <View style={{marginTop:'20%'}}>
            <CustomInput
            onChangeText={(value)=>setName(value)}
            value={name}
            placeholder="Name"/>
            <CustomInput
            onChangeText={(value)=>setEmail(value)}
            value={email}
            placeholder="Email"/>
            <CustomInput
            onChangeText={(value)=>setPassword(value)}
            value={password}
            placeholder="Password"/>
        </View>
        <View>
            {active?
            <CustomBtnLoading/>
            :
            <CustomBtn title="Sign Up" onPress={()=>onSignUp()}/>
            }
        </View>
        <CustomQuestion title="Forgot your password ?"/>
    </View>
  )
}

export default Register

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    backgroundColor:CustomColor.white
  }
})
