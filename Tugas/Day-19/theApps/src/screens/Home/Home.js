import {useQuery} from '@apollo/client';
import React, {useEffect} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {CustomColor, CustomHeader, Loader} from '../../components/Reusable';
import {GraphProvider} from '../../config/apollo';
import {QUERY_USERS} from '../../config/query/query';
const List = (props) => {
  const {loading, data, error} = useQuery(QUERY_USERS);
  console.log({QUERY_USERS});
  useEffect(() => {}, []);

  const renderItem = ({item}) => (
    <TouchableOpacity onPress={()=>props.onPress(item.userId)} style={styles.txtContainer}>
      <View style={styles.itemContainer}>
        <Image
          source={{
            uri: `${
              item.userId % 2 == 0
                ? 'https://aux.iconspalace.com/uploads/117428211619219278.png'
                : item.userId % 3 == 0
                ? 'https://ih1.redbubble.net/image.1730629917.3632/st,small,507x507-pad,600x600,f8f8f8.u2.jpg'
                : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQdvUWj6MUqHDttr8UeMSrVUCuDHL6dhf5wA&usqp=CAU'
            }`,
          }}
          style={{width: 60, height: 60}}
        />
      </View>
      <Text style={styles.txtTitle}>{item.userName}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{flex: 1}}>
      <CustomHeader
        cStyleHeader={{backgroundColor: CustomColor.green}}
        cStyleTitle={{color: CustomColor.white}}
        title="Users"
      />
      {loading ? (
        <Loader styleLoader={{top: '50%'}} size={30} title="Load Users" />
      ) : (
        <FlatList
          data={data.user}
          renderItem={renderItem}
          keyExtractor={(item) => item.userId.toString()}
        />
      )}
    </View>
  );
};
const Home = ({navigation}, props) => {
  return (
    <GraphProvider>
      <List onPress={(userId) => navigation.navigate('Task', {id: userId})} />
    </GraphProvider>
  );
};

export default Home;

const styles = StyleSheet.create({
  txtTitle: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  itemContainer: {
    position: 'absolute',
    left: '10%',
  },
  txtContainer: {
    backgroundColor: CustomColor.white,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: 90,
    borderRadius: 15,
    width: '90%',
    marginTop: 10,
  },
});
