import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import api from '../../../api/api';
import {CustomColor, CustomHeader, Loader} from '../../../components/Reusable';
import useGetData from '../../../lib/useGetData';

const Detail = ({navigation, route}) => {
  const {title, body, id} = route.params;
  const {response, err, isLoading} = useGetData({url: `${api}comments`});
  const [loadComments, setloadComments] = useState(true);
  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.renderItemContainer} onPress={()=>navigation.navigate('User Detail',{
        id:item.id
      })}>
      <Text style={[styles.txtcomment, {fontWeight: 'bold'}]}>{item.name}</Text>
      <Text style={[styles.txtcomment, {fontWeight: '500'}]}>{item.email}</Text>
      <Text style={[styles.txtcomment, {fontWeight: '500'}]}>{item.body}</Text>
    </TouchableOpacity>
  );

  useEffect(() => {
    response.filter((f) => {
      f.postId = id;
      setloadComments(false);
    });
  });

  return (
    <View style={styles.container}>
      <CustomHeader
        title="Detail"
        cStyleHeader={{backgroundColor:CustomColor.green}}
        cStyleTitle={{color:CustomColor.white}}
        cStyleImage={{tintColor:CustomColor.white}}
        onPress={() => navigation.navigate('Home')}
        source={{uri: 'https://img.icons8.com/metro/2x/back.png'}}
        onPressBack={() => navigation.goBack()}
      />
      <View style={{padding: 10}}>
        <View>
          <Text style={styles.textTitle}>{title}</Text>
        </View>
        <View>
          <Text style={styles.text}>{body}</Text>
        </View>
        <View style={{marginLeft: '5%', marginTop: 10, marginBottom: 5}}>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>Comments</Text>
        </View>
        {loadComments ? (
          <Loader styleLoader={{top: '50%'}} size={25} title="Load Comments" />
        ) : (
          <FlatList
            data={response}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
        )}
      </View>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  renderItemContainer:{
    width: '90%',
    borderWidth: 5,
    marginTop: 10,
    padding: 10,
    borderColor: CustomColor.green,
    alignSelf: 'center',
  },
  textTitle: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  text: {
    textAlign: 'center',
  },
  txtcomment: {
    fontSize: 14,
  },
});
