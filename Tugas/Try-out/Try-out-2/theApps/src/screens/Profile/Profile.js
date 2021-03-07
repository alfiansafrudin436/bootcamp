import React, { useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import {CustomBtn,CustomBtnLoading, CustomColor, CustomInput, CustomHeader, CustomQuestion} from '../../../src/components/Reusable'
const Profile = ({navigation, route}) => {
    const [active, setActive]=useState(false)
    const {firsName,lastName,slogan,jobs,photo}=route.params
    return (
    <View style={styles.container}>
        <View style={{
            backgroundColor:CustomColor.green,
            width:'100%',
            height:180,
            top:0
        }}> 
            <CustomHeader title="Profile" 
            navigationTitle="Log out"
            onPress={()=>navigation.navigate("Login")}
            cStyleNav={{color:CustomColor.white}} 
            cStyleTitle={{color:CustomColor.white}}
            source={{uri:`${photo}`}}
            styleImage={styles.image}
            />
        </View>
        <View style={{marginTop:80, alignItems:'center'}}>
            <Text style={styles.name}>{firsName} {lastName}</Text>
            <Text style={styles.jobs}>{jobs}</Text>
        </View>
        <View style={{marginTop:'20%'}}>
            <CustomInput
            text="Slogan"
            editable={false}
            value={slogan}
            placeholder={slogan}/>
            <CustomInput
            text="Jobs"
            editable={false}
            value={jobs}
            placeholder="Jobs"/>

        </View>
        <View>
            {active?
            <CustomBtnLoading/>
            :
            <CustomBtn title="Go to Update Form" onPress={()=>navigation.navigate('Edit Profile')}/>
            }
        </View>
    </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:CustomColor.white
    },
    imageHide:{

    },
    image:{
        width:130,
        height:130,
        borderRadius:130/2,
        position:'absolute',
        alignSelf:'center',
        borderColor:CustomColor.white,
        borderWidth:4,
        top:100
    },
    name:{
        fontSize:30,
        fontWeight:'700'
    },
    jobs:{
        fontSize:16,
        fontWeight:'600'
    }
})
