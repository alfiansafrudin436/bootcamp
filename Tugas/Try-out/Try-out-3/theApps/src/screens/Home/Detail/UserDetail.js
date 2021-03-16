import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import api from '../../../api/api';
import {CustomColor, CustomHeader, Loader} from '../../../components/Reusable';
import useGetData from '../../../lib/useGetData';

const UserDetail = ({navigation, route}) => {
  const {response, err, isLoading} = useGetData({url: `${api}users`});
  const {id} = route.params;
  const [data, setData] = useState();
  const [loadUser, setloadUser] = useState(true);

  useEffect(() => {
    response.find((f) => {
      f.id = id;
      setData(f);
      setloadUser(false);
    });
  }, [response]);
  return (
    <View style={{flex: 1}}>
      <CustomHeader
        title="User Detail"
        cStyleHeader={{backgroundColor: CustomColor.green}}
        cStyleTitle={{color: CustomColor.white}}
        cStyleImage={{tintColor: CustomColor.white}}
        onPress={() => navigation.navigate('Home')}
        source={{uri: 'https://img.icons8.com/metro/2x/back.png'}}
        onPressBack={() => navigation.goBack()}
      />
      {loadUser ? (
        <Loader
          styleLoader={{top: '50%'}}
          size={25}
          title="Load User Details"
        />
      ) : (
        <View
          style={{
            width: '100%',
            height:'100%',
            marginTop:30,
            paddingLeft:30
          }}>
          <Text style={[styles.txtDetail,{fontSize:20,fontWeight:'bold'}]}>{data.name}</Text>
          <Text style={[styles.txtDetail,{fontSize:18,fontWeight:'bold'}]}>{data.username}</Text>
          <Text style={[styles.txtDetail,{fontSize:16,fontWeight:'500'}]}>{data.email}</Text>
          <Text style={[styles.txtDetail,{fontSize:16,fontWeight:'500'}]}>{data.website}</Text>
        </View>
      )}
    </View>
  );
};

export default UserDetail;

const styles = StyleSheet.create({
  txtDetail:{
    textAlign:'center'
  }
});
