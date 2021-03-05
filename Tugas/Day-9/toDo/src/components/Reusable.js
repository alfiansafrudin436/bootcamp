import React from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Color from './Color'
const Header = (props) => {
    return (
        <View style={styles.containerHeader}> 
            <Text style={styles.headerText}>{props.title}</Text>
            <TouchableOpacity style={styles.containerIconHeader}> 
                <Icon name="list" size={22} color={Color.white}/>
            </TouchableOpacity>
        </View>
    )
}

const Input = (props) => {
    return (
        <TextInput style={styles.txtInput}
        value={props.value}
        onChangeText={props.onChangeText}
        placeholder={props.placeholder}
        />
    )
}
const Card = (props) => {
    return (
        <View style={styles.containerCard}>
            <Text style={styles.cardText}>{props.todo}</Text>
            <TouchableOpacity style={styles.containerIconDelete} onPress={props.onPressDelete} > 
                <Icon name="trash" size={20} color={Color.red}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.containerIconCheck}onPress={props.onPressDone} > 
                <Icon name="check" size={20} color={Color.green}/>
            </TouchableOpacity>
        </View>
    )
}
const CardCompleted = (props) => {
    return (
        <View style={styles.containerCardDone}>
            <Text style={styles.cardTextDone}>{props.todo}</Text>
            <TouchableOpacity style={styles.containerIconDelete}onPress={props.onPressDelete} > 
                <Icon name="trash" size={20} color={Color.red}/>
            </TouchableOpacity>
        </View>
    )
}

const Title=(props)=>{
    return(
    <View style={styles.containerTitle}>
        <Text style={styles.textTitle}>{props.title}</Text>
    </View>
    )
}

export{
    Header,
    Input, 
    Title,
    Card,
    CardCompleted
}

const styles = StyleSheet.create({
    containerHeader:{
        width:'100%',
        height:60,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:Color.greenBlue
    },
    headerText:{
        color:Color.white,
        fontWeight:'700',   
        fontSize:18
    },
    containerIconHeader:{
        position:'absolute',
        left:'8%'
    },
    txtInput:{
        width:'85%',
        borderWidth:1,
        borderColor:Color.white,
        borderRadius:15,
        marginTop:20,
        paddingLeft:20,
        color:Color.white,
        alignSelf:'center',
        
    },
    containerTitle:{
        marginLeft:'10%',
        marginTop:10,
        marginBottom:10,
        justifyContent:'flex-start'
    },
    textTitle:{
        fontWeight:'700',
        fontSize:16,
        color:Color.white
    },
    containerCard:{
        width:'85%',
        height:50,
        alignSelf:'center',
        justifyContent:'center',
        backgroundColor:Color.white,
        paddingLeft:'8%',
        borderRadius:15,
        marginBottom:10
    },
    containerCardDone:{
        width:'85%',
        height:50,
        alignSelf:'center',
        justifyContent:'center',
        backgroundColor:Color.greenBlue,
        paddingLeft:'8%',
        borderColor:Color.white,
        borderWidth:1,
        borderRadius:15,
        marginBottom:10
    },
    cardText:{
        fontSize:16,
        fontWeight:'700'
    },
    cardTextDone:{
        fontSize:16,
        fontWeight:'700',
        color:Color.white
    },
    containerIconDelete:{
        position:'absolute',
        right:'8%',
        flexDirection:'row'
    },
    containerIconCheck:{
        position:'absolute',
        right:'18%',
        flexDirection:'row'
    }


})
