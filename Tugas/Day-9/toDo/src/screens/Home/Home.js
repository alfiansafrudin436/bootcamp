import React, { useState } from 'react'
import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Color from '../../components/Color'
import {Header,Input, Title, Card,CardCompleted} from '../../components/Reusable'
import Icon from 'react-native-vector-icons/FontAwesome5'

const Home = () => {
    const [todo, setTodo]=useState([])

    const [text, setText] = useState();
    const addTodo=()=>{
        text==null?
        alert("Isi Data Dahulu")
        :
        setTodo([...todo,{
            no:todo.length+1,
            todo:text,
            status:false
        }])
        setText()
    }
    const onUpdate=(id)=>{
        setTodo([...todo,
            todo.filter((e)=>{
                if(e.no==id) e.status=true
            })
        ])
    }
    const onDelete=(id)=>{
        setTodo(
            todo.filter((e)=>{
                if(e.no!==id) return true
            })
        )
    }


    return (
        <View style={styles.container}>
            <Header title="DAILIST"/>
            {todo==''?
            <View style={{flex:1, justifyContent:'center'}}>
                <Image source={require('../../assets/images/box.png')}
            style={styles.image}/>
            </View>:
            <View style={styles.containerCard}>
            <Title title="TODO"/>
            <ScrollView style={{flex:1}}>
            {todo.filter((e)=>e.status==false).map((m)=>{
                return(
                    <Card todo={m.no+' '+m.todo}
                    onPressDelete={()=>onDelete(m.no)}
                    onPressDone={()=>onUpdate(m.no)}/>
                    )
                })}
            </ScrollView>

            <Title title="FINISHED"/>
            <ScrollView style={{flex:1}}>
            {todo.filter((e)=>e.status==true).map((m)=>{
                return(
                    <CardCompleted todo={m.no+' '+m.todo}
                    onPressDelete={()=>onDelete(m.no)}/>
                    )
                })}
            </ScrollView>    
            </View>}


            <View>
                <Input
                    placeholder="Tambah"
                    value={text}
                    onChangeText={(text)=>setText(text)}
                />
                <TouchableOpacity style={styles.containerAdd} onPress={()=>addTodo()}>
                    <Icon name="plus" size={25} color={Color.greenBlue}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container:{
        backgroundColor:Color.greenBlue,
        width:'100%',
        height:'100%'
    },   
    containerAdd:{
        margin:15,
        width:60,
        height:60,
        backgroundColor:Color.white,
        borderRadius:60/2,
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center'
    },
    containerCard:{
       flex:1
    },   
    image:{
        width:100,
        height:100,
        alignSelf:'center'
    }
})
