import React, { useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import {CustomBtn,CustomBtnLoading, CustomColor, CustomInput, CustomHeader, CustomQuestion} from '../../../src/components/Reusable'
import Routes from '../../routes/routes'
const Profile = ({navigation, route}) => {
    const [active, setActive]=useState(false)
    const [currentScreen, setCurrentScreen]=useState('Profile')

    // const {firsName,lastName,slogan,jobs,photo}=route.params
    return (
    <View style={styles.container}>
        {currentScreen=="Profile"?
        <View>
            <View style={{
                backgroundColor:CustomColor.green,
                width:'100%',
                height:180,
                top:0
            }}> 
                <CustomHeader title="Profile" 
                navigationTitle="Log out"
                // onPress={()=>navigation.navigate("Login")}
                cStyleNav={{color:CustomColor.white}} 
                cStyleTitle={{color:CustomColor.white}}
                source={{uri:`data:image/jpeg;base64,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`}}
                styleImage={styles.image}
                />
            </View>
            <View style={{marginTop:80, alignItems:'center'}}>
                <Text style={styles.name}>Joko Widodo</Text>
                <Text style={styles.jobs}>Presiden</Text>
            </View>
            <View style={{marginTop:'20%'}}>
                <CustomInput
                text="Slogan"
                editable={false}
                // value={slogan}
                placeholder="Slogan"/>
                <CustomInput
                text="Jobs"
                editable={false}
                // value={jobs}
                placeholder="Jobs"/>

            </View>
            <View>
                {active?
                <CustomBtnLoading/>
                :
                <CustomBtn title="Go to Update Form" onPress={()=>setCurrentScreen('Edit Profile')}/>
                }
            </View>
        </View>
        :
        <Routes screen="Edit Profile"/>
        }
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
