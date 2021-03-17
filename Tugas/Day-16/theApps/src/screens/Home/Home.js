import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import useGetData from '../../lib/useGetData';
import api from '../../api/api';
import {CustomColor, CustomHeader, Loader} from '../../components/Reusable';

const Home = ({navigation}) => {
  const {response, err, isLoading} = useGetData({
    url: `${api}users`,
    method: `get`,
  });
  const renderItem = ({item}) => (
    <View style={styles.txtContainer}>
      <View style={{backgroundColor:CustomColor.green}}>
        <Text style={styles.txtTitle}>{item.name}</Text>
      </View>
        <Text style={styles.txtsubTitle}>{item.email}</Text>
        <Text style={styles.txtsubTitle}>{item.address['street']},
        {item.address['suite']},
        {item.address['city']}</Text>
    </View>
  );
  return (
    <View style={{flex: 1}}>
      <CustomHeader
        cStyleHeader={{backgroundColor: CustomColor.green}}
        cStyleTitle={{color: CustomColor.white}}
        title="Articles"
      />
      {isLoading ? (
        <Loader styleLoader={{top: '50%'}} size={30} title="Load Users" />
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
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  txtsubTitle: {
    color:'black',
    fontSize: 15,
    textAlign: 'center',
    fontWeight: '600',
    paddingTop:5
  },
  txtContainer: {
    backgroundColor: CustomColor.white,
    height: 100,
    marginTop: 10,
    borderRadius: 15,
    alignSelf: 'center',
    width: '90%',
  },
});
