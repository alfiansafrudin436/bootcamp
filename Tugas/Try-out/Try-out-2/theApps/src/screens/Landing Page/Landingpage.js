import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import { CustomColor } from '../../components/Reusable'

const Landingpage = ({navigation}) => {

    setTimeout(()=>{
        navigation.navigate("Login")
    }, 3000)

    return (
        <View style={styles.container}>
            <Text style={styles.text}>theAPPS</Text>
            <ActivityIndicator
            size={40}
            color={CustomColor.white}
            />
        </View>
    )
}

export default Landingpage

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:CustomColor.green,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontSize:50,
        color:CustomColor.white,
        fontWeight:'700'
    }
})
