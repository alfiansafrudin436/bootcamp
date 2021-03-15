import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CustomColor, CustomHeader} from '../../../components/Reusable';

const Detail = ({navigation, route}) => {
  const {title, body} = route.params;
  return (
    <View style={{flex: 1}}>
      <CustomHeader
        title="Detail"
        onPress={() => navigation.navigate('Home')}
        source={{uri: 'https://img.icons8.com/metro/2x/back.png'}}
        onPressBack={() => navigation.goBack()}
      />
      <View style={{marginTop: 120}}>
        <View style={{alignItems: 'center'}}>
          <Text>{title}</Text>
        </View>
        <View style={{alignItems:'center'}}>
          <Text>{body}</Text>
        </View>
      </View>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({});
