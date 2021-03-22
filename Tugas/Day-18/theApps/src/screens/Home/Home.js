import {useQuery} from '@apollo/client';
import React, {useEffect} from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {CustomColor, CustomHeader, Loader} from '../../components/Reusable';
import {GraphProvider} from '../../config/apollo';
import {gql} from 'graphql-tag';
const QUERY_USERS = gql`
  query MyQuery {
    task(where: {Users: {userId: {_eq: 1}}}) {
      userId
      taskStatus
      taskName
      taskExpired
    }
  }
`;

const List = ({navigation}) => {
  const {loading, data, error} = useQuery(QUERY_USERS);
  console.log({data, loading, error});
  console.log({QUERY_USERS})
  useEffect(() => {}, []);

  const renderItem = ({item}) => (
    <View style={styles.txtContainer}>
      <View style={{backgroundColor: CustomColor.green, marginBottom: 10}}>
        <Text style={styles.txtTitle}>{item.userName}</Text>
      </View>
      <View style={styles.itemContainer}>
        <Image
          source={{
            uri: `${
              !item.userPhoto
                ? item.userPhoto
                : 'https://cdn3.iconfinder.com/data/icons/social-media-2068/64/_shopping-512.png'
            }`,
          }}
          style={{width: 60, height: 60}}
        />
      </View>
    </View>
  );
  return (
    <View style={{flex: 1}}>
      <CustomHeader
        cStyleHeader={{backgroundColor: CustomColor.green}}
        cStyleTitle={{color: CustomColor.white}}
        title="Users"
      />
      {/* {loading ? (
        <Loader styleLoader={{top: '50%'}} size={30} title="Load Users" />
      ) : (
        <FlatList
          data={product.data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      )} */}
    </View>
  );
};
const Home = () => {
  return (
    <GraphProvider>
      <List />
    </GraphProvider>
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
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: '15%',
    paddingRight: '15%',
  },
  txtContainer: {
    backgroundColor: CustomColor.white,
    height: 100,
    borderRadius: 15,
    alignSelf: 'center',
    width: '90%',
    marginTop: 15,
  },
});
