import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import useGetData from '../../lib/useGetData';
import api from '../../api/api';
import {CustomColor, CustomHeader, Loader} from '../../components/Reusable';
import {Context} from '../../context/Context';
import Article from './Article';

const MyArticle = () => {
  const {response, err, isLoading} = useGetData({
    url: `${api}posts`,
    method: `get`,
  });
  const dataIdContext = useContext(Context);
  console.log('CONTEXT', dataIdContext);
  return (
    <View style={{flex: 1}}>
      <CustomHeader
        cStyleHeader={{backgroundColor: CustomColor.green}}
        cStyleTitle={{color: CustomColor.white}}
        title="Articles"
      />
      {isLoading ? (
        <Loader styleLoader={{top: '50%'}} size={30} title="Load Articles" />
      ) : (
        <Context.Provider value={response}>
          <Article />
        </Context.Provider>
      )}
    </View>
  );
};

export default MyArticle;

const styles = StyleSheet.create({});
