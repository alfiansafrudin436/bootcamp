import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import useGetData from '../../lib/useGetData';
import api from '../../api/api';
import {CustomColor, CustomHeader, Loader} from '../../components/Reusable';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Home = ({navigation}) => {
  const {response, err, isLoading} = useGetData({url: `${api}posts`});
  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Detail', {
          title: item.title,
          body: item.body,
          id: item.id,
        })
      }
      style={styles.txtContainer}>
      <Text style={styles.txtTitle}>{item.title}</Text>
    </TouchableOpacity>
  );
  return (
    <View style={{flex: 1}}>
      <CustomHeader
      cStyleHeader={{backgroundColor:CustomColor.green}}
      cStyleTitle={{color:CustomColor.white}}
      title="Articles"/>
      {isLoading ? (
        <Loader styleLoader={{top:'50%'}} size={30} title="Load Articles" />
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
  txtTitle: {
    color: CustomColor.white,
    fontSize: 15,
    textAlign: 'center',
    fontWeight: '600',
  },
  txtContainer: {
    backgroundColor: CustomColor.green,
    height: 100,
    marginTop: 10,
    borderRadius: 15,
    alignSelf: 'center',
    justifyContent: 'center',
    width: '90%',
  },
});
