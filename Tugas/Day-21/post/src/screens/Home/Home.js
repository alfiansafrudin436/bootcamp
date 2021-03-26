import React, {useEffect} from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {RTextInput, RColor, RIcon, RLoader, RCategory} from '@reusable';
import {useDispatch, useSelector} from 'react-redux';
import fetchProduct from '../../redux/Product/actions';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const {list,listProduct, loading, error} = useSelector(state => {
    return {
      listProduct: state.product.list,
      list: state.auth.list,
      loading: state.product.loading,
      error: state.product.error,
    };
  });
  
  useEffect(() => {
    dispatch(fetchProduct());
    console.log({list});
    console.log({listProduct});
  }, []);
  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.containerCard}
      onPress={() => {
        navigation.navigate('Detail', {
          name: item.name,
          user: item.supplier.full_name,
          phone: item.supplier.phone_number,
        });
      }}>
      <View style={styles.imgContainer}>
        <Image
          source={
            item.id % 2 == 0
              ? require('../../img/6.png')
              : require('../../img/7.png')
          }
          style={{width: '100%', height: '100%', overflow: 'hidden'}}
        />
      </View>
      <View style={{paddingLeft: 20, paddingTop: 5}}>
        <Text style={[styles.txtsubTitle, {fontSize: 12, color: RColor.green}]}>
          Rp. {item.price}
        </Text>
        <Text style={styles.txtTitle}>{item.name}</Text>
        <Text style={[styles.txtsubTitle, {fontSize: 14, fontWeight:'600'}]}>
          Stock {item.stock}
        </Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <View>
          <Text>Hello, </Text>
          {/* {loading?<></>:list.name} */}
          <Text style={{fontSize: 28, fontWeight: 'bold'}}>
            {list.full_name}
          </Text>
        </View>
        <RIcon name="bell" size={20} />
      </View>
      <View>
        <RTextInput placeholder="Search here..." />
      </View>
      <View style={styles.category}>
        <Text>Category : </Text>
        <RCategory title="#CSS" />
        <RCategory title="#UX" />
        <RCategory title="#SWIFT" />
        <RCategory title="#UI" />
      </View>
      {loading ? (
        <RLoader styleLoader={{top: '35%'}} size={30} title="Load Users" />
      ) : (
        <FlatList
          data={listProduct.data}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: RColor.white,
    flex: 1,
  },
  containerHeader: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: '5%',
    marginRight: '5%',
  },
  category: {
    flexDirection: 'row',
    marginBottom: 12,
    marginTop: 12,
    marginLeft: '5%',
    marginRight: '5%',
  },
  containerCard: {
    height: 297,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    backgroundColor: RColor.white,
    borderColor: RColor.grey,
    alignSelf: 'center',
  },
  imgContainer: {
    width: 343,
    height: 194,
    backgroundColor: RColor.lightGray,
  },
  txtTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  txtsubTitle: {
    fontWeight: 'bold',
    paddingTop: 5,
  },
});
