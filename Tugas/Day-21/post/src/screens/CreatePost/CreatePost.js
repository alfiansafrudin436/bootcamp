import React, {useState} from 'react';
import {Alert, Image, ScrollView, StyleSheet, View} from 'react-native';
import {RColor, RTitleSlider, RTextInput, RButton, RQuestion} from '@reusable';
import {useMutation} from '@apollo/client';
import {CREATE_POST} from '../../config/mutation/mutation';
import { GraphProvider } from '../../config/apollo';

const RegisterList = (props) => {
  const [blur, setBlur] = useState(true);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const [post, {data, loading, error}] = useMutation(CREATE_POST);
  console.log({data, loading, error});
  const height = blur ? '35%' : 0;
  let navigation = props.navigation;
  const postPress = () => {
    try {
      if (title == '' || content == '') {
        alert('Fill an Empty Field');
      } else {
        post({
          variables: {
            title: title,
            content: content,
          },
        });
        if (data.register.email !== null) {
          Alert.alert('Success', 'Posted');
          navigation.navigate('Login');
        }
      }
    } catch (error) {
      Alert.alert('Alert', `${error}`);
    }
  };
  return (
    <View style={styles.container}>
      <Image
        style={[styles.img, {height: height}]}
        source={require('../../img/3.png')}
      />
      <RTitleSlider title="Post" />
      <ScrollView>
        <RTextInput
          placeholder="Title"
          CStyle={styles.CStyleInput}
          onChangeText={text => {
            setContent(text);
          }}
          value={content}
          onBlur={() => setBlur(true)}
          onFocus={() => setBlur(false)}
        />
        <RTextInput
          placeholder="Content"
          CStyle={styles.CStyleInput}
          onChangeText={text => {
            setTitle(text);
          }}
          value={title}
          onBlur={() => setBlur(true)}
          onFocus={() => setBlur(false)}
        />

        <RButton title="Create Post" CStyle={{marginTop: 20}}
        onPress={()=>postPress()} />
      </ScrollView>
    </View>
  );
};
const CreatePost=({navigation})=>{
  return(
    <GraphProvider>
      <RegisterList navigation={navigation}/>
    </GraphProvider>
  )
}

export default CreatePost;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: RColor.white,
  },
  img: {
    marginTop: 10,
    alignSelf: 'center',
    width: '80%',
  },
  CStyleInput: {
    marginTop: 20,
  },
});
