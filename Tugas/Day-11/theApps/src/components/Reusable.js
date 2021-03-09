import React, {useState} from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
const CustomColor = {
  white: '#FFFFFF',
  green: '#5DB075',
  grey: '#F6F6F6',
  darkGrey: '#BDBDBD',
};

const CustomBtn = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.CustomBtn}>
      <Text style={styles.txtButton}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const CustomBtnLoading = (props) => {
  return (
    <View style={styles.CustomBtn}>
      <ActivityIndicator size={30} color={CustomColor.white} />
    </View>
  );
};

const CustomQuestion = (props) => {
  return (
    <View style={{alignItems: 'center'}}>
      <TouchableOpacity onPress={props.onPress}>
        <Text style={styles.txtGreen}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const CustomHeader = (props) => {
  return (
    <View style={styles.containerHeader}>
      <View style={styles.containerHeaderTitle}>
        <Text style={[styles.title, props.cStyleTitle]}>{props.title}</Text>
      </View>
      <TouchableOpacity
        onPress={props.onPress}
        style={{position: 'absolute', right: '10%'}}>
        <Text style={[styles.txtNavigation, props.cStyleNav]}>
          {props.navigationTitle}
        </Text>
      </TouchableOpacity>
      <Image style={props.styleImage} source={props.source} />
    </View>
  );
};

const CustomInput = (props) => {
  return (
    <View>
      <Text style={styles.text}>{props.text}</Text>
      <TextInput
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        value={props.value}
        editable={props.editable}
        onChangeText={props.onChangeText}
        placeholder={props.placeholder}
        style={styles.input}></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  // STYLES BUTTON
  CustomBtn: {
    // position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: '80%',
    marginTop: 45,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: CustomColor.green,
  },
  txtButton: {
    color: CustomColor.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  // STYLES HEADER
  containerHeader: {
    width: '100%',
    height: 80,
    top: 15,
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerHeaderTitle: {
    alignSelf: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    fontStyle: 'normal',
    color: 'black',
  },
  txtNavigation: {
    fontSize: 18,
    fontWeight: '600',
    color: CustomColor.green,
  },
  // STYLES INPUT
  input: {
    width: '80%',
    height: 50,
    paddingLeft: 40,
    marginBottom: 5,
    borderRadius: 15,
    backgroundColor: CustomColor.grey,
    alignSelf: 'center',
    color: CustomColor.green,
  },
  text: {
    color: CustomColor.darkGrey,
    paddingLeft: '10%',
    marginBottom: 5,
  },
  // TEXT GREEN
  txtGreen: {
    fontSize: 16,
    margin: 20,
    fontWeight: 'bold',
    color: CustomColor.green,
  },
});

export {
  CustomBtn,
  CustomColor,
  CustomInput,
  CustomHeader,
  CustomQuestion,
  CustomBtnLoading,
};
