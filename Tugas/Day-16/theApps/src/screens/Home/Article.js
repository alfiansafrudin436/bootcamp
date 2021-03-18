import React, {useContext} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { CustomColor } from '../../components/Reusable';
import {Context} from '../../context/Context';
const Article = ({navigation}) => {
  const data = useContext(Context);
  console.log(data)
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
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default Article;

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
