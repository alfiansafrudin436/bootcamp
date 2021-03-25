import React from 'react';
import { Image, StyleSheet, Text, View} from 'react-native';
import {RColor, RIcon} from '@reusable';

const Detail = ({navigation,route}) => {
  const {name,user,phone}=route.params
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <View style={{position: 'absolute'}}>
          <RIcon onPress={()=>navigation.goBack()}name="arrow-left" size={20} />
        </View>
        <View style={styles.containerHeaderTitle}>
          <Text style={{fontSize: 28, fontWeight: 'bold'}}>Detail</Text>
        </View>
      </View>
      <View
        style={{alignSelf: 'center', alignItems: 'center', marginTop: '5%'}}>
        <Text style={styles.txtsubTitle}>Supplier : {user}</Text>
        <Text style={styles.txtsubTitle}>{phone}</Text>
        <Image
          style={{
            width: 343,
            height: 194,
            marginTop:10,
            backgroundColor: RColor.lightGray,
            resizeMode: 'contain',
          }}
          source={require('../../../img/8.png')}
        />
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
  containerHeader: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: '5%',
    marginRight: '5%',
  },
  containerHeaderTitle: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
  },
  txtTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  txtsubTitle: {
    fontWeight: '600',
    color: RColor.darkGrey,
  },
  containerMain:{
    marginLeft:'6%',
    marginTop:15
  }
});
