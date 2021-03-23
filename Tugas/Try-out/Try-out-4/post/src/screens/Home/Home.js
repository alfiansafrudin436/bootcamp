import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RTextInput, RColor, RIcon} from '@reusable';
const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <View>
          <Text>Hello, </Text>
          <Text style={{fontSize: 28, fontWeight: 'bold'}}>Namaku</Text>
        </View>
        <RIcon name="bell" size={20} />
      </View>
      <View>
        <RTextInput placeholder="Search here..." />
      </View>
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
    marginLeft: '10%',
    marginRight: '10%',
  },
});
