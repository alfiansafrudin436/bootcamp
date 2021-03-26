import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {RColor, RHeader} from '@reusable';

const Detail = ({navigation, route}) => {
  const {name, user, phone} = route.params;
  return (
    <View style={styles.container}>
      <RHeader title="Detail" onPress={()=>navigation.goBack()}/>
      <View
        style={{alignSelf: 'center', alignItems: 'center', marginTop: '5%'}}>
        <Text style={styles.txtsubTitle}>Supplier : {user}</Text>
        <Text style={styles.txtsubTitle}>{phone}</Text>
        <View>
          <Image
            style={{
              width: 343,
              height: 200,
              marginTop: 10,
              backgroundColor: RColor.lightGray,
              resizeMode: 'contain',
            }}
            source={require('../../../img/8.png')}
          />
        </View>
      </View>
      <View style={styles.containerMain}>
        <Text style={styles.txtTitle}>Introduction</Text>
        <Text style={styles.txtsubTitle}>Introduction</Text>
      </View>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    backgroundColor: RColor.white,
    flex: 1,
  },
  txtTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  txtsubTitle: {
    fontWeight: '600',
    color: RColor.darkGrey,
  },
  containerMain: {
    marginLeft: '6%',
    marginTop: 15,
  },
});
