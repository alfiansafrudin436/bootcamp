import React, { useState } from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import { CustomColor } from '../../components/Reusable'
import Routes from '../../routes/routes'

const Landingpage = () => {
    const[waktu, setWaktu]=useState(0)
    setTimeout(()=>{
        setWaktu(1)
    }, 3000)

    return (
        
        <View style={styles.container}>
            {waktu==1?
                <Routes screen="Login"/>
            :
                <View>
                    <Text style={styles.text}>theAPPS</Text>
                    <ActivityIndicator
                    size={40}
                    color={CustomColor.white}
                    />
                </View>
            }
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
