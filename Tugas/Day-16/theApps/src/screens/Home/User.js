import React, { useContext } from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import { CustomColor } from '../../components/Reusable';
import { Context } from '../../context/Context';

const User = () => {
    const data= useContext(Context)
    console.log(data)
    const renderItem = ({item}) => (
    <View style={styles.txtContainer}>
      <View style={{backgroundColor: CustomColor.green}}>
        <Text style={styles.txtTitle}>{item.name}</Text>
      </View>
      <Text style={styles.txtsubTitle}>{item.email}</Text>
      <Text style={styles.txtsubTitle}>
        {item.address['street']},{item.address['suite']},{item.address['city']}
      </Text>
    </View>
  );
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default User;

const styles = StyleSheet.create({
  txtTitle: {
    color: CustomColor.white,
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  txtsubTitle: {
    color: 'black',
    fontSize: 15,
    textAlign: 'center',
    fontWeight: '600',
    paddingTop: 5,
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
