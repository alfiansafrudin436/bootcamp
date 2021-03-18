import React, { useContext } from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import useGetData from '../../lib/useGetData';
import api from '../../api/api';
import {CustomColor, CustomHeader, Loader} from '../../components/Reusable';
import { Context } from '../../context/Context';
import User from './User';

const Home = ({navigation}) => {
  const {response, err, isLoading} = useGetData({
    url: `${api}users`,
    method: `get`,
  });

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
        <Context.Provider value={response}>
          <User />
        </Context.Provider>
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({

});
