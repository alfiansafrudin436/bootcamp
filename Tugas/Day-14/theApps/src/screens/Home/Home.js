import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import useGetData from '../../lib/useGetData';
import api from '../../api/api';
import {CustomColor, Loader} from '../../components/Reusable';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Home = ({navigation}) => {
  const {response, err, isLoading} = useGetData({url: api});
  const renderItem = ({item}) => (
    <TouchableOpacity onPress={()=>navigation.navigate('Detail',{
      title:item.title, body:item.body
    })} style={styles.txtContainer}>
      <Text style={styles.txtTitle}>{item.title}</Text>
    </TouchableOpacity>
  );
  return (
    <View style={{flex: 1}}>
      {response == null ? (
        <Loader />
      ) : (
          <FlatList
            data={response}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
    txtTitle:{
        color:CustomColor.white,
        fontSize:15,
        fontWeight:'600'
    },
    txtContainer:{
        backgroundColor:CustomColor.green,
        height:50,
        margin:4,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5
    }
});
