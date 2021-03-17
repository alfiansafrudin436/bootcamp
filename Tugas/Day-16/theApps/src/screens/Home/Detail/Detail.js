import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { CustomColor, CustomHeader} from '../../../components/Reusable';

const Detail = ({navigation, route}) => {
  const {title, body, id} = route.params;

  return (
    <View style={styles.container}>
      <CustomHeader
        title="Detail"
        cStyleHeader={{backgroundColor:CustomColor.green}}
        cStyleTitle={{color:CustomColor.white}}
        cStyleImage={{tintColor:CustomColor.white}}
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
