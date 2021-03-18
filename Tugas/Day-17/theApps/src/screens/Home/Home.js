import React, {useEffect} from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {CustomColor, CustomHeader, Loader} from '../../components/Reusable';
import ProductProvider, {useProduct} from '@context/ProductProvider';
import {useUser} from '@context/UserProvider';

const List = ({navigation}) => {
  const {product, err, getData} = useProduct();
  const {isLoading,
    data: {user},
  } = useUser();
  useEffect(() => {
    getData(user.token);
  }, [user.token]);
  console.log({product});
  const renderItem = ({item}) => (
    <View style={styles.txtContainer}>
      <View style={{backgroundColor: CustomColor.green,
    marginBottom:10,
      }}>
        <Text style={styles.txtTitle}>{item.name}</Text>
      </View>
      <View style={styles.itemContainer}>
        <Image
          source={{
            uri: `${
              !item.photo_url
                ? item.photo_url
                : 'https://cdn3.iconfinder.com/data/icons/social-media-2068/64/_shopping-512.png'
            }`,
          }}
          style={{width: 60, height: 60}}
        />
        <View>
          <Text style={styles.txtsubTitle}>Rp. {item.price}</Text>
          <Text style={styles.txtsubTitle}>Stock {item.stock}</Text>
        </View>
      </View>
    </View>
  );
  return (
    <View style={{flex: 1}}>
      <CustomHeader
        cStyleHeader={{backgroundColor: CustomColor.green}}
        cStyleTitle={{color: CustomColor.white}}
        title="Products"
      />
      {isLoading? (
        <Loader styleLoader={{top: '50%'}} size={30} title="Load Users" />
      ) : (
        <FlatList
          data={product.data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
};
const Home = () => {
  return (
    <ProductProvider>
      <List />
    </ProductProvider>
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
  txtsubTitle: {
    color: 'black',
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    paddingTop: 5,
  },
  txtContainer: {
    backgroundColor: CustomColor.white,
    height: 100,
    borderRadius: 15,
    alignSelf: 'center',
    width: '90%',
    marginTop:15,

  },
});
